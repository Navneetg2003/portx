import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience"
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import GalaxyBackground from "./components/GalaxyBackground";
import Chatbot from "./components/Chatbot";
import CommandPalette from "./components/CommandPalette";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return(
    <>
      <GalaxyBackground />
      <CommandPalette />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <Analytics />
    </>
  );
};

export default App;