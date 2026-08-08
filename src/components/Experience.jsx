import ExperienceCard from "./ExperienceCard";
import Reveal from "./Reveal";

const experiences = [
  {
    time: "January 2026 - June 2026",
    content:
      "Worked as an Algorithmic Trader on SOFR fixed-income futures — designing and backtesting quantitative trading strategies in Python, from signal research through walk-forward validation. Built automated data pipelines and evaluated strategies against Sharpe ratio, max drawdown, and Calmar ratio, with select strategies assessed for live capital deployment.",
    name: "Algorithmic Trader",
    imgSrc: "assets/axxela_logo.jpg",
    company: "Axxela Research & Analytics",
    skills: ["Python", "Quantitative Research", "Backtesting", "Time-Series Analysis", "Statistical Modelling"]
  },
  {
    time: "November 2025 - January 2026",
    content:
      "Built an end-to-end AI feedback automation pipeline at an early-stage startup — combining LLM-based content generation with programmatic video rendering via Remotion. Designed and refined prompts using few-shot examples, output-formatting constraints, and chain-of-thought instructions to improve the reliability of LLM-generated feedback at scale.",
    name: "AI Engineer Intern",
    imgSrc: "assets/goprac_logo.jpg",
    company: "GoPrac",
    skills: ["LLMs", "Prompt Engineering", "Remotion", "Video Automation"]
  },
  {
    time: "December 2024 - February 2025",
    content:
      "Built 15+ REST API endpoints in Java and Spring Boot following a clean controller-service-repository architecture. Diagnosed and fixed PostgreSQL query bottlenecks through execution-plan analysis and composite indexing — cutting API latency 35% under 300+ concurrent requests — and wrote JUnit test suites across the service layer.",
    name: "Software Engineering Intern",
    imgSrc: "assets/gc-cloud-logo.jpg",
    company: "GC Cloud Info System Pvt. Ltd.",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JUnit", "Docker"]
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="section overflow-hidden">
      <div className="container">
        <div className="relative inline-block mb-8">
          <Reveal as="h2" className="headline-2 relative z-10">
            Professional Experience
          </Reveal>
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl"></div>
        </div>

        <Reveal delay={0.1} as="p" className="text-zinc-400 mb-10 max-w-[60ch]">
          My journey across quantitative research and software development — a progression, not a list.
        </Reveal>

        <div className="relative">
          {/* Connecting line — desktop/tablet only, mobile keeps a clean stack */}
          <div className="hidden sm:block absolute left-[15px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-sky-400 to-blue-500/20" />

          <div className="space-y-8">
            {experiences.map(({ time, content, name, imgSrc, company, skills }, key) => (
              <Reveal key={key} delay={Math.min(key * 0.15, 0.4)}>
                <div className="relative sm:pl-12">
                  <div className="hidden sm:grid absolute left-0 top-3 w-8 h-8 rounded-full place-items-center bg-zinc-950 border-2 border-sky-400 z-10 shadow-lg shadow-sky-400/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  </div>
                  <ExperienceCard
                    time={time}
                    content={content}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    skills={skills}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
