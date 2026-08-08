import { processContactRequest } from "../src/lib/contactCore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = await processContactRequest({
    connectionString: process.env.DATABASE_URL,
    body: req.body,
  });

  return res.status(result.status).json(result.body);
}