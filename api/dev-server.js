import "dotenv/config";
import http from "node:http";
import { processChatRequest } from "../src/lib/chatCore.js";
import { processContactRequest } from "../src/lib/contactCore.js";

const port = Number(process.env.API_PORT || 3001);

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      if (chunks.length === 0) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    });
    res.end();
    return;
  }

  if (req.url === "/api/contact" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const result = await processContactRequest({
        connectionString: process.env.DATABASE_URL,
        body,
      });
      sendJson(res, result.status, result.body);
      return;
    } catch (error) {
      console.error("Dev contact server error:", error);
      sendJson(res, 500, { error: "Something went wrong saving the message." });
      return;
    }
  }

  if (req.url === "/api/chat" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const result = await processChatRequest({
        apiKey: process.env.GEMINI_API_KEY,
        messages: body?.messages,
      });
      sendJson(res, result.status, result.body);
      return;
    } catch (error) {
      console.error("Dev chat server error:", error);
      sendJson(res, 500, { error: "Something went wrong talking to Gemini." });
      return;
    }
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(port, () => {
  console.log(`API dev server listening on http://127.0.0.1:${port}`);
});