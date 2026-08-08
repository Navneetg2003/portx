import { profileContext } from "./profileContext.js";

const GEMINI_MODEL = "gemini-3.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const GROQ_MODEL = "llama-3.1-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

function isSchoolQuestion(text) {
  const normalized = text.toLowerCase();
  return /\b(high\s*school|schooling|class\s*10|10\s*th|10th|class\s*12|12\s*th|12th|school)\b/.test(
    normalized
  );
}

function getSchoolReply() {
  return "Navneet studied at Delhi Public School, Gwalior. Class 12: CBSE, 90.8%. Class 10: CBSE, 89.6%.";
}

function getGroqApiKey() {
  return process.env.GROQ_API_KEY || process.env.groq_api || process.env.groq_api_key;
}

function getConversationText(messages) {
  return messages
    .map((message) => String(message?.text || ""))
    .join(" \n")
    .toLowerCase();
}

function isTopicQuestion(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getLocalFallbackReply(messages) {
  const conversationText = getConversationText(messages);

  if (isSchoolQuestion(conversationText)) {
    return getSchoolReply();
  }

  if (isTopicQuestion(conversationText, ["project", "projects", "tell about them", "them"])) {
    return (
      "Navneet's key projects include GeoVision, a geospatial platform built with Java, Spring Boot, PostgreSQL, and PostGIS; " +
      "StockSentry-AI, a financial analytics pipeline using Python, XGBoost, and FinBERT; " +
      "MiniGPT, a GPT-style language model built from scratch in PyTorch; " +
      "VastraVerse, an AI cultural fashion platform using Gemini and Stable Diffusion; " +
      "Yaar, a full-stack React and Node.js app; and All About Coding, a live DSA learning platform deployed on Vercel."
    );
  }

  if (isTopicQuestion(conversationText, ["skill", "skills", "technical skills", "technologies"])) {
    return "Navneet's core skills include Python, Java, React, Node.js, Spring Boot, PostgreSQL, MongoDB, PyTorch, TensorFlow, Scikit-learn, XGBoost, Docker, Git, and prompt engineering.";
  }

  if (isTopicQuestion(conversationText, ["achievement", "achievements", "certification", "certifications", "leetcode"])) {
    return "His standout achievements include 325+ LeetCode problems solved, a contest rating of 1433, BharatGen Hackathon semi-finalist recognition, and Oracle OCI Generative AI and AI Foundations certifications.";
  }

  if (isTopicQuestion(conversationText, ["contact", "email", "linkedin", "github"])) {
    return "You can contact Navneet through the portfolio contact form, email him at navneetg1302@gmail.com, or find him on GitHub and LinkedIn.";
  }

  if (isTopicQuestion(conversationText, ["education", "college", "vit", "university"])) {
    return "Navneet is pursuing B.Tech in Computer Science and Engineering at VIT, Vellore, with a CGPA of 8.66 and graduation expected in 2026.";
  }

  return null;
}

function buildGeminiContents(messages) {
  const trimmedHistory = messages.slice(-MAX_HISTORY_MESSAGES);

  return trimmedHistory.map((message) => ({
    role: message.role === "model" ? "model" : "user",
    parts: [{ text: String(message.text || "").slice(0, MAX_MESSAGE_LENGTH) }],
  }));
}

function buildGroqMessages(messages) {
  const trimmedHistory = messages.slice(-MAX_HISTORY_MESSAGES);

  return trimmedHistory.map((message) => ({
    role: message.role === "model" ? "assistant" : "user",
    content: String(message.text || "").slice(0, MAX_MESSAGE_LENGTH),
  }));
}

const SYSTEM_PROMPT = `You are the assistant for Navneet Gupta's personal portfolio website (navneetg.vercel.app).

Goal:
- Help visitors learn about Navneet's education, experience, projects, skills, achievements, and contact options.
- Stay strictly within the portfolio context. Do not become a general-purpose tutor, search engine, or math helper.

Behavior rules:
- Answer only questions that are directly about Navneet Gupta or this portfolio site.
- If the user asks something unrelated, politely refuse and redirect them to Navneet's projects, experience, education, or contact form.
- If the user asks about a skill or concept such as AI, Python, React, DSA, databases, or internships, answer only in the context of Navneet's own work.
- Never invent facts, timelines, or accomplishments.
- If a detail is not in the profile below, say you do not have that detail and suggest the contact form for more info.
- Keep answers short, specific, and friendly. Default to 2 to 4 sentences unless the user asks for more detail.

Context file:
${profileContext}

Instructions:
- Use the context file above as the full source of truth.
- If the user asks about school, high school, class 10, class 12, or schooling, answer with these exact facts:
  - Class 12: Delhi Public School, Gwalior, CBSE, 90.8%.
  - Class 10: Delhi Public School, Gwalior, CBSE, 89.6%.
- If the user asks about high school, explicitly mention Delhi Public School, Gwalior.
- Do not replace these facts with VIT or university details when the question is about school.
- If the user asks about anything outside the context file, politely say you do not have that detail and direct them to the contact form.
- Keep answers short, specific, and friendly. Default to 2 to 4 sentences unless the user asks for more detail.`;

async function getGroqReply({ groqApiKey, messages, fetchImpl }) {
  if (!groqApiKey) {
    return null;
  }

  const groqMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...buildGroqMessages(messages),
  ];

  const groqRes = await fetchImpl(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${groqApiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: groqMessages,
      temperature: 0.7,
      max_tokens: 400,
    }),
  });

  const data = await groqRes.json();

  if (!groqRes.ok) {
    console.error("Groq API error:", data);
    return null;
  }

  const reply = (data?.choices?.[0]?.message?.content || "").trim();
  return reply || null;
}

export async function processChatRequest({ apiKey, messages, fetchImpl = fetch }) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return {
      status: 400,
      body: { error: 'Request body must include a non-empty "messages" array.' },
    };
  }

  const lastMessage = messages[messages.length - 1];
  if (typeof lastMessage?.text !== "string" || lastMessage.text.length === 0) {
    return {
      status: 400,
      body: { error: "The last message must have non-empty text." },
    };
  }

  if (lastMessage.text.length > MAX_MESSAGE_LENGTH) {
    return {
      status: 400,
      body: { error: `Please keep messages under ${MAX_MESSAGE_LENGTH} characters.` },
    };
  }

  if (isSchoolQuestion(lastMessage.text)) {
    return {
      status: 200,
      body: { reply: getSchoolReply() },
    };
  }

  const localFallbackReply = getLocalFallbackReply(messages);
  const groqApiKey = getGroqApiKey();

  if (localFallbackReply && !apiKey && !groqApiKey) {
    return {
      status: 200,
      body: { reply: localFallbackReply },
    };
  }

  try {
    if (apiKey) {
      const geminiRes = await fetchImpl(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: buildGeminiContents(messages),
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 400,
          },
        }),
      });

      const data = await geminiRes.json();

      if (geminiRes.ok) {
        const reply = (data?.candidates?.[0]?.content?.parts || [])
          .map((part) => part.text || "")
          .join("")
          .trim();

        if (reply) {
          return { status: 200, body: { reply } };
        }
      } else {
        console.error("Gemini API error:", data);
      }
    }

    const groqReply = await getGroqReply({
      groqApiKey,
      messages,
      fetchImpl,
    });

    if (groqReply) {
      return { status: 200, body: { reply: groqReply } };
    }

    if (localFallbackReply) {
      return { status: 200, body: { reply: localFallbackReply } };
    }

    return {
      status: 500,
      body: {
        error: "Both Gemini and Groq are unavailable right now. Please try again later.",
      },
    };
  } catch (error) {
    console.error("Chat handler error:", error);

    const groqReply = await getGroqReply({
      groqApiKey,
      messages,
      fetchImpl,
    }).catch(() => null);

    if (groqReply) {
      return { status: 200, body: { reply: groqReply } };
    }

    if (localFallbackReply) {
      return { status: 200, body: { reply: localFallbackReply } };
    }

    return {
      status: 500,
      body: { error: "Something went wrong talking to Gemini or Groq." },
    };
  }
}
