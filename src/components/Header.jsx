import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        <h1 className="fade-in">
          <a 
          href="/" 
          className="logo hover:scale-110 transition-transform duration-300 inline-block"
          >
            <img src="assets/logo.png"
            width={40}
            height={40}
            alt="Navneet Gupta" 
            className="hover:rotate-12 transition-transform duration-300"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
        <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} closeNav={() => setNavOpen(false)} />
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            aria-label="Open command palette"
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all duration-300 fade-in"
          >
            <span className="material-symbols-rounded text-[18px]" aria-hidden="true">search</span>
            <kbd className="text-[11px] font-sans">⌘K</kbd>
          </button>

          <a
          href="#contact"
          className="btn btn-secondary max-md:hidden fade-in delay-200"
          >
            Contact Me
          </a>
        </div>

      </div>
    </header>
    
  )
}

export default Header