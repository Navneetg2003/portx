import { MongoClient } from "mongodb";

const databaseName = "portfolio";
const collectionName = "contact_messages";

let cachedClient = null;
let cachedDb = null;

async function getDatabase(connectionString) {
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  if (cachedDb) {
    return cachedDb;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(connectionString);
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(databaseName);
  return cachedDb;
}

export async function processContactRequest({ connectionString, body }) {
  try {
    const { name, email, message } = body || {};

    if (typeof name !== "string" || !name.trim()) {
      return {
        status: 400,
        body: { error: "Name is required." },
      };
    }

    if (typeof email !== "string" || !email.trim()) {
      return {
        status: 400,
        body: { error: "Email is required." },
      };
    }

    if (typeof message !== "string" || !message.trim()) {
      return {
        status: 400,
        body: { error: "Message is required." },
      };
    }

    const db = await getDatabase(connectionString);

    const document = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
      source: "portfolio-contact-form",
    };

    const result = await db.collection(collectionName).insertOne(document);

    return {
      status: 201,
      body: {
        ok: true,
        id: result.insertedId,
        message: "Contact submission stored successfully.",
      },
    };
  } catch (error) {
    console.error("Contact handler error:", error);
    return {
      status: 500,
      body: { error: "Something went wrong saving the message." },
    };
  }
}