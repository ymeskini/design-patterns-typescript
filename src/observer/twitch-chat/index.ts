import { randomUUID } from 'crypto';
import {
  Subject,
  auditTime,
  delay,
  filter,
  interval,
  map,
  scan,
  startWith,
  tap,
} from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import WebSocket, { WebSocketServer } from 'ws';

declare module 'ws' {
  interface WebSocket {
    id?: string;
  }
}

const wss = new WebSocketServer({ port: 8080 });

const TWITCH_URL = 'wss://irc-ws.chat.twitch.tv:443';
const TWITCH_COMMANDS = {
  PING: 'PING :tmi.twitch.tv',
  PONG: 'PONG :tmi.twitch.tv',
};

const initChat = (channelName: string) => {
  const socket$ = webSocket<string>({
    url: TWITCH_URL,
    // @ts-expect-error
    WebSocketCtor: WebSocket,
    deserializer: (e) => e.data,
    serializer: (value) => value,
  });

  socket$.next(`CAP REQ :twitch.tv/tags twitch.tv/commands`);
  socket$.next('NICK justinfan12345');
  socket$.next(`JOIN #${channelName}`);

  socket$
    .pipe(
      //   tap(console.log),
      filter((msg) => msg === TWITCH_COMMANDS.PING),
    )
    .subscribe(() => {
      socket$.next(TWITCH_COMMANDS.PONG);
    });

  return {
    $messages: socket$.pipe(
      filter((msg) => msg.includes('PRIVMSG')),
      map((message) => {
        const [_, msg] = message.split(`#${channelName} :`);
        return msg;
      }),
    ),
  };
};

const channelName = process.argv[2];
const { $messages } = initChat(channelName);
const countSubject$ = new Subject<number>();
const $messagesCount = countSubject$.pipe(
  startWith(0),
  scan((acc) => acc + 1),
);

$messages.subscribe(() => {
  countSubject$.next(1);
});

const clientConnections = new Map<string, boolean>();

wss.on('connection', (ws) => {
  ws.id = randomUUID();
  clientConnections.set(ws.id, true);

  const pingSub = interval(20000)
    .pipe(
      tap(() => {
        ws.send('PING');
        clientConnections.set(ws.id, false);
      }),
      delay(20000),
      filter(() => !clientConnections.get(ws.id)),
      tap(() => {
        ws.close();
      }),
    )
    .subscribe();

  const countSubscription = $messagesCount
    .pipe(auditTime(10000))
    .subscribe((count) => {
      ws.send(`Count: ${count}`);
    });

  const messagesSubscription = $messages.subscribe((message) => {
    ws.send(message);
  });

  ws.on('message', (message) => {
    if (message.toString() === 'PONG') {
      clientConnections.set(ws.id, true);
    }
  });

  ws.on('close', () => {
    console.log(`Client ${ws.id} disconnected`);
    pingSub.unsubscribe();
    countSubscription.unsubscribe();
    messagesSubscription.unsubscribe();
    clientConnections.delete(ws.id);
  });
});
