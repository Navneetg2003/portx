import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INITIAL_MESSAGE = {
  role: "model",
  text: "Hi! I'm an AI assistant that can answer questions about Navneet's projects, skills, and experience. What would you like to know?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNudge, setShowNudge] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowNudge(true), 1800);
    const hideTimer = setTimeout(() => setShowNudge(false), 9000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const onOpenChat = () => {
      setIsOpen(true);
      setShowNudge(false);
    };
    window.addEventListener("open-chat", onOpenChat);
    return () => window.removeEventListener("open-chat", onOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
      } else {
        setMessages([...nextMessages, { role: "model", text: data.reply }]);
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-[min(360px,calc(100vw-2.5rem))] h-[min(520px,calc(100vh-8rem))] flex flex-col rounded-2xl border border-zinc-700/50 bg-zinc-900/95 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-sky-400 to-blue-500 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-rounded text-zinc-950 text-xl" aria-hidden="true">
                smart_toy
              </span>
              <span className="font-semibold text-zinc-950 truncate">Ask about Navneet</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-zinc-950/80 hover:text-zinc-950 transition-colors shrink-0"
            >
              <span className="material-symbols-rounded text-xl">close</span>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-600"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950"
                      : "bg-zinc-800/80 text-zinc-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-3.5 py-2.5 bg-zinc-800/80 text-zinc-400 text-sm">
                  Thinking...
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-2xl px-3.5 py-2.5 bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                {error}
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 p-3 border-t border-zinc-700/50 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              maxLength={2000}
              className="flex-1 min-w-0 px-3.5 py-2.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-zinc-200 text-sm placeholder-zinc-500 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 focus:outline-none transition-all duration-300 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="shrink-0 w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="material-symbols-rounded text-xl">send</span>
            </button>
          </form>
        </div>
      )}

      <AnimatePresence>
        {showNudge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-[220px] px-4 py-3 rounded-2xl rounded-br-sm bg-zinc-800/95 backdrop-blur-sm border border-zinc-700/50 text-sm text-zinc-200 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setShowNudge(false)}
              aria-label="Dismiss"
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full grid place-items-center bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
            >
              <span className="material-symbols-rounded text-[14px]">close</span>
            </button>
            👋 Ask me about Navneet&apos;s projects, skills, or experience!
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowNudge(false);
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950 shadow-lg shadow-sky-400/30 hover:scale-110 transition-all duration-300"
      >
        <span className="material-symbols-rounded text-2xl">
          {isOpen ? "close" : "smart_toy"}
        </span>
      </button>
    </div>
  );
};

export default Chatbot;
