import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 hover:bg-zinc-800/70 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-zinc-700/50">
          <p className="text-zinc-300 mb-4 md:text-xl md:leading-relaxed">
            I&apos;m Navneet Gupta, a final-year Computer Science student who builds at the intersection of 
            AI/ML, quantitative research, and full-stack engineering. I&apos;ve worked as an Algorithmic Trader 
            researching SOFR futures strategies at Axxela Research &amp; Analytics, and before that shipped 
            production backend services as a Software Engineering Intern at GC Cloud.
          </p>
          
          <p className="text-zinc-300 md:text-xl md:leading-relaxed">
            Outside of work, I build from first principles — a GPT-style transformer trained from scratch in 
            PyTorch, a FinBERT-driven stock analytics pipeline, a generative AI fashion platform that reached 
            the semi-finals at the BharatGen Hackathon. Whether the problem is a trading signal, a spatial 
            database, or a full-stack product, I care about understanding the system all the way down and 
            shipping something that actually works.
          </p>

          <div className="flex justify-end mt-6">
            <img
              src="assets/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="md:w-[40px] md:h-[40px] hover:rotate-12 transition-transform duration-300"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;