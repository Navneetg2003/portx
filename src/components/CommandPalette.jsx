import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACTIONS = [
  { id: "home", label: "Go to Home", icon: "home", action: () => scrollToId("home") },
  { id: "about", label: "Go to About", icon: "person", action: () => scrollToId("about") },
  { id: "skill", label: "Go to Skills", icon: "code", action: () => scrollToId("skill") },
  { id: "work", label: "Go to Projects", icon: "grid_view", action: () => scrollToId("work") },
  { id: "experiences", label: "Go to Experience", icon: "work", action: () => scrollToId("experiences") },
  { id: "achievements", label: "Go to Achievements", icon: "emoji_events", action: () => scrollToId("achievements") },
  { id: "contact", label: "Go to Contact", icon: "mail", action: () => scrollToId("contact") },
  {
    id: "cv",
    label: "Download CV",
    icon: "download",
    action: () => window.open("assets/Navneet_CV.pdf", "_blank", "noopener,noreferrer"),
  },
  {
    id: "chat",
    label: "Ask the AI Assistant",
    icon: "smart_toy",
    action: () => window.dispatchEvent(new CustomEvent("open-chat")),
  },
  {
    id: "github",
    label: "View GitHub",
    icon: "code_blocks",
    action: () => window.open("https://github.com/Navneetg2003", "_blank", "noopener,noreferrer"),
  },
  {
    id: "linkedin",
    label: "View LinkedIn",
    icon: "business_center",
    action: () => window.open("https://www.linkedin.com/in/navneetgupta/", "_blank", "noopener,noreferrer"),
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredActions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ACTIONS;
    return ACTIONS.filter((action) => action.label.toLowerCase().includes(q));
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const runAction = (action) => {
    if (!action) return;
    close();
    // Let the palette close before scrolling/opening so it doesn't flash mid-transition.
    setTimeout(() => action.action(), 50);
  };

  // Global open shortcut (Cmd+K / Ctrl+K), plus a custom event so a
  // visible button (e.g. in the header) can open it for people who'd
  // never guess the shortcut exists.
  useEffect(() => {
    const onKeyDown = (event) => {
      const isModK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isModK) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    const onCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onCustomOpen);
    };
  }, []);

  // In-palette keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filteredActions.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        runAction(filteredActions[activeIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex, filteredActions]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-start justify-center pt-[12vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="relative w-full max-w-lg rounded-2xl border border-zinc-700/50 bg-zinc-900/95 backdrop-blur-sm shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-700/50">
              <span className="material-symbols-rounded text-zinc-500 text-xl" aria-hidden="true">
                search
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or run a command..."
                className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-500 focus:outline-none text-[15px]"
              />
              <kbd className="hidden sm:inline-block px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-500">
                Esc
              </kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-2 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-600">
              {filteredActions.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-zinc-500">No matching commands.</p>
              )}
              {filteredActions.map((action, index) => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => runAction(action)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors duration-100 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-sky-400/20 to-blue-500/20 text-sky-300"
                      : "text-zinc-300 hover:bg-zinc-800/60"
                  }`}
                >
                  <span className="material-symbols-rounded text-lg" aria-hidden="true">
                    {action.icon}
                  </span>
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
