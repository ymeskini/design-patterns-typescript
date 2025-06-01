import { randomUUID } from "node:crypto";
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
  fromEvent,
} from "rxjs";
import { webSocket } from "rxjs/webSocket";
import WebSocket, { WebSocketServer, createWebSocketStream } from "ws";

interface WebSocketWithId extends WebSocket {
  id: string;
}

const wss = new WebSocketServer({ port: 8080 });

const TWITCH_URL = "wss://irc-ws.chat.twitch.tv:443";
const TWITCH_COMMANDS = {
  PING: "PING :tmi.twitch.tv",
  PONG: "PONG :tmi.twitch.tv",
};

const initChat = (channelName: string) => {
  console.log(
    `[TWITCH] Initializing chat connection for channel: ${channelName}`
  );

  const socket$ = webSocket<string>({
    url: TWITCH_URL,
    // @ts-expect-error
    WebSocketCtor: WebSocket,
    deserializer: (e) => e.data,
    serializer: (value) => value,
    openObserver: {
      next: () => console.log("[TWITCH] WebSocket connection opened"),
    },
    closeObserver: {
      next: () => console.log("[TWITCH] WebSocket connection closed"),
    },
  });

  console.log("[TWITCH] Sending authentication commands...");
  socket$.next(`CAP REQ :twitch.tv/tags twitch.tv/commands`);
  socket$.next("NICK justinfan12345");
  socket$.next(`JOIN #${channelName}`);
  console.log(`[TWITCH] Joined channel: #${channelName}`);

  socket$
    .pipe(
      // tap((msg) => console.log(`[TWITCH] Raw message: ${msg}`)),
      filter((msg) => msg === TWITCH_COMMANDS.PING)
    )
    .subscribe(() => {
      console.log("[TWITCH] Received PING, sending PONG");
      socket$.next(TWITCH_COMMANDS.PONG);
    });

  return {
    $messages: socket$.pipe(
      filter((msg) => msg.includes("PRIVMSG")),
      // tap((msg) => console.log(`[TWITCH] Chat message received: ${msg}`)),
      map((message) => {
        const [_, msg] = message.split(`#${channelName} :`);
        return msg;
      })
    ),
  };
};

const channelName = process.argv[2];
console.log(`[MAIN] Starting Twitch chat observer for channel: ${channelName}`);

const { $messages } = initChat(channelName);
const countSubject$ = new Subject<number>();
const $messagesCount = countSubject$.pipe(
  startWith(0),
  scan((acc) => acc + 1)
);

$messages.subscribe((message) => {
  console.log(`[OBSERVER] Message received: ${message}`);
  countSubject$.next(1);
});

console.log("[WEBSOCKET] Starting WebSocket server on port 8080...");
const clientConnections = new Map<string, boolean>();

wss.on("connection", (websocket) => {
  const ws = websocket as WebSocketWithId;
  ws.id = randomUUID();
  clientConnections.set(ws.id, true);
  console.log(`[WEBSOCKET] Client ${ws.id} connected`);

  // Create a stream from the WebSocket
  const wsStream = createWebSocketStream(ws);

  // Create observables for incoming messages
  const incomingMessages$ = fromEvent(ws, "message").pipe(
    map((data: MessageEvent) => {
      console.log(data.data);
      return data.data;
    }),
    tap((msg) =>
      console.log(`[WEBSOCKET] Client ${ws.id} sent message: "${msg}"`)
    )
  );

  // Handle PONG responses
  incomingMessages$
    .pipe(filter((msg: string): msg is "PONG" => msg === "PONG"))
    .subscribe(() => {
      console.log(`[WEBSOCKET] Client ${ws.id} sent PONG - connection alive`);
      clientConnections.set(ws.id, true);
    });

  // PING mechanism using RxJS
  const pingSub = interval(20000)
    .pipe(
      filter(() => ws.readyState === WebSocket.OPEN),
      tap(() => {
        console.log(`[WEBSOCKET] Sending PING to client ${ws.id}`);
        wsStream.write("PING");
        clientConnections.set(ws.id, false);
      }),
      delay(20000),
      filter(
        () => !clientConnections.get(ws.id) && ws.readyState === WebSocket.OPEN
      ),
      tap(() => {
        console.log(`[WEBSOCKET] Client ${ws.id} timeout - closing connection`);
        ws.close();
      })
    )
    .subscribe();

  // Send message counts using the stream
  const countSubscription = $messagesCount
    .pipe(
      auditTime(10000),
      filter(() => ws.readyState === WebSocket.OPEN)
    )
    .subscribe((count) => {
      wsStream.write(`Count: ${count}`);
    });

  // Forward Twitch messages using the stream
  const messagesSubscription = $messages
    .pipe(filter(() => ws.readyState === WebSocket.OPEN))
    .subscribe((message) => {
      wsStream.write(message);
    });

  ws.on("close", () => {
    console.log(`[WEBSOCKET] Client ${ws.id} disconnected`);
    pingSub.unsubscribe();
    countSubscription.unsubscribe();
    messagesSubscription.unsubscribe();
    clientConnections.delete(ws.id);
    wsStream.destroy();
  });
});
