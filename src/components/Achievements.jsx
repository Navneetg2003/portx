import AchievementCard from "./AchievementCard";
import Reveal from "./Reveal";

const achievements = [
  {
    icon: "workspace_premium",
    title: "OCI 2025 Generative AI Professional",
    detail: "Advanced Oracle certification — LLMs, RAG, vector databases, and OCI AI services.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=19B3A6CBA5495095966AD6413C3A1B7E579EFE62CA4741754F74133F4802AB8A"
  },
  {
    icon: "emoji_events",
    title: "BharatGen Hackathon — Semi-Finalist",
    detail: "Led development of VastraVerse, an AI cultural fashion assistant built on Gemini and Stable Diffusion.",
    link: null
  },
  {
    icon: "code",
    title: "LeetCode — 325+ Problems Solved",
    detail: "Contest rating 1433 (top 70% globally), 78% acceptance rate, 21 Hard problems.",
    link: "https://leetcode.com/u/navneetg1302/"
  },
  {
    icon: "workspace_premium",
    title: "OCI 2025 AI Foundations Associate",
    detail: "Foundational Oracle certification — AI/ML concepts, OCI AI services, and IAM.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E2F04128B014DA692CCDAF8B632312791A9B471B1705CCD385311AE7FF8D1634"
  },
  {
    icon: "school",
    title: "Cloud Computing — NPTEL, IIT Kharagpur",
    detail: "Distributed systems, cloud service models, and virtualization.",
    link: null
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="relative inline-block mb-8">
          <Reveal as="h2" className="headline-2 relative z-10">
            Achievements &amp; Certifications
          </Reveal>
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl"></div>
        </div>

        <Reveal delay={0.1} as="p" className="text-zinc-400 mt-3 mb-8 max-w-[60ch]">
          Third-party validation alongside the projects — certifications, competition results, and problem-solving track record.
        </Reveal>

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {achievements.map(({ icon, title, detail, link }, key) => (
            <Reveal key={key} delay={Math.min(key * 0.06, 0.3)} y={20}>
              <AchievementCard
                icon={icon}
                title={title}
                detail={detail}
                link={link}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
