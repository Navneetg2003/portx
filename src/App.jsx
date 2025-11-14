import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience"
import Footer from "./components/Footer";
import GalaxyBackground from "./components/GalaxyBackground";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return(
    <>
      <GalaxyBackground />
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
};

export default App;