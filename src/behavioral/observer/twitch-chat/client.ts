import WebSocket from "ws";

const createTestClient = () => {
  const testClient = new WebSocket("ws://localhost:8080");

  testClient.on("open", () => {
    console.log("[TEST CLIENT] Connected to server");
  });

  testClient.on("message", (data) => {
    const message = data.toString();

    // Respond to PING messages from server silently
    if (message === "PING") {
      console.log("[TEST CLIENT] Received PING, sending PONG");
      testClient.send("PONG");
    } else if (!message.startsWith("Count:")) {
      // Only log actual chat messages, not count updates
      console.log(`[CLIENT] ${message}`);
    }
  });

  testClient.on("close", () => {
    console.log("[TEST CLIENT] Disconnected from server");
  });

  testClient.on("error", (error) => {
    console.log(`[TEST CLIENT] Error: ${error.message}`);
  });

  return testClient;
};

createTestClient();
