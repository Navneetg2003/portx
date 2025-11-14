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

          <Navbar navOpen={navOpen} />
        </div>

        <a
        href="#contact"
        className="btn btn-secondary max-md:hidden md:justify-self-end fade-in delay-200"
        >
          Contact Me
        </a>

      </div>
    </header>
    
  )
}

export default Header