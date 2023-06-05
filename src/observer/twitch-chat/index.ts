import { filter, map, scan } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import WebSocket from 'ws';

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

  socket$.pipe(filter((msg) => msg === TWITCH_COMMANDS.PING)).subscribe(() => {
    console.log('PING');
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

const { $messages } = initChat('waolol1');
const $messagesCount = $messages.pipe(scan((acc) => acc + 1, 0));

$messages.subscribe((message) => {
  console.log(message);
});

$messagesCount.subscribe((count) => {
  console.log('count', count);
});
