// Vercel serverless function — POST /api/chat
// Thin HTTP wrapper around src/lib/chatCore.js, which holds the actual
// Gemini request logic as a plain testable function. The API key lives
// only here, server-side, and is never sent to the browser.

import { processChatRequest } from "../src/lib/chatCore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};

  const result = await processChatRequest({
    apiKey: process.env.GEMINI_API_KEY,
    messages,
  });

  return res.status(result.status).json(result.body);
}
