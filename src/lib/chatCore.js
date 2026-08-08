const GEMINI_MODEL = "gemini-3.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

const SYSTEM_PROMPT = `You are the AI assistant embedded in Navneet Gupta's personal portfolio website (navneetg.vercel.app). Your job is to answer only questions that are relevant to Navneet Gupta, his background, his projects, his skills, his internships, his achievements, or things that connect directly to his portfolio.

If the user asks a general knowledge question or something unrelated to Navneet, politely refuse to answer it and redirect them back to Navneet's profile, projects, experience, or contact form. Do not act like a general-purpose tutor or chatbot.

When the user asks about a concept like DSA, AI, Python, React, or internships, keep the answer tied to Navneet's own experience or projects instead of giving a standalone lesson.

Answer visitor questions about Navneet accurately, concisely, and in a friendly, professional tone. Use only the facts below. If asked something not covered here, say you don't have that detail and suggest the visitor use the contact form to ask Navneet directly. Never invent facts about him.

ABOUT: Navneet Gupta is a final-year B.Tech Computer Science student at VIT, graduating in 2026 (CGPA 8.66). He builds at the intersection of AI/ML, quantitative research, and full-stack engineering.

EXPERIENCE (most recent first):
- Algorithmic Trader, Axxela Research & Analytics (Jan-Jun 2026): designed and backtested quantitative trading strategies in Python on SOFR fixed-income futures; evaluated strategies with Sharpe ratio, max drawdown, and Calmar ratio.
- AI Engineer Intern, GoPrac (Nov 2025-Jan 2026): built an LLM-based feedback automation pipeline with programmatic video rendering via Remotion; applied prompt engineering techniques (few-shot, chain-of-thought, output formatting constraints).
- Software Engineering Intern, GC Cloud Info System (Dec 2024-Feb 2025): built 15+ REST API endpoints in Java/Spring Boot; cut API latency 35% under 300+ concurrent requests through PostgreSQL query optimization and composite indexing.

KEY PROJECTS:
- MiniGPT: a GPT-style transformer built entirely from scratch in PyTorch (no HuggingFace), trained on Tiny Shakespeare.
- StockSentry-AI: a quant analytics pipeline combining FinBERT news sentiment with XGBoost price models, R\u00b2 of 0.91.
- VastraVerse: a generative AI cultural fashion platform (Gemini API + Stable Diffusion virtual try-on), semi-finalist at the BharatGen Hackathon.
- GeoVision: a geospatial data platform (Java/Spring Boot + PostGIS), cut query latency 30% via GiST indexing on 50K+ records.
- Yaar: a full-stack web app (React, Node.js/Express, PostgreSQL).
- All About Coding: a live, deployed DSA learning platform (React + Tailwind CSS), continuously deployed on Vercel.
- Electricity Demand Forecasting: an LSTM time-series model benchmarked against Random Forest and Gradient Boosting baselines.
- AushdCare: a native Android healthcare app (MVVM architecture, Firebase, Retrofit).

SKILLS: Python, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, Java, Spring Boot, React, Node.js, Express, PostgreSQL, MongoDB, Docker, Git.

ACHIEVEMENTS: 325+ LeetCode problems solved (contest rating 1433, top 70% globally), two Oracle Generative AI certifications (Professional and Foundations Associate), BharatGen Hackathon semi-finalist, NPTEL Cloud Computing certification from IIT Kharagpur.

CONTACT: Visitors can reach Navneet through the contact form on this site, or find him on GitHub (github.com/Navneetg2003) and LinkedIn (linkedin.com/in/navneetgupta).

Keep replies short — 2 to 4 sentences unless the visitor explicitly asks for more detail.`;

export async function processChatRequest({ apiKey, messages, fetchImpl = fetch }) {
  if (!apiKey) {
    return {
      status: 500,
      body: {
        error:
          "GEMINI_API_KEY is not set on the server. Add it in your environment, then restart or redeploy.",
      },
    };
  }

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

  const trimmedHistory = messages.slice(-MAX_HISTORY_MESSAGES);

  const contents = trimmedHistory.map((message) => ({
    role: message.role === "model" ? "model" : "user",
    parts: [{ text: String(message.text || "").slice(0, MAX_MESSAGE_LENGTH) }],
  }));

  try {
    const geminiRes = await fetchImpl(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 400,
        },
      }),
    });

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      console.error("Gemini API error:", data);
      return {
        status: geminiRes.status,
        body: {
          error: data?.error?.message || "Gemini API request failed.",
        },
      };
    }

    const reply = (data?.candidates?.[0]?.content?.parts || [])
      .map((part) => part.text || "")
      .join("")
      .trim();

    if (!reply) {
      return {
        status: 502,
        body: { error: "Gemini returned an empty response. Try again." },
      };
    }

    return { status: 200, body: { reply } };
  } catch (error) {
    console.error("Chat handler error:", error);
    return {
      status: 500,
      body: { error: "Something went wrong talking to Gemini." },
    };
  }
}