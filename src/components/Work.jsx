import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import Reveal from "./Reveal";

const works = [
    {
      imgSrc: 'assets/minigpt.svg',
      title: 'MiniGPT',
      category: 'AI/ML',
      tags: ['PyTorch', 'Transformers', 'Deep Learning', 'Python'],
      projectLink: 'https://github.com/Navneetg2003/MiniGPT',
      description: 'GPT-style transformer built from scratch in PyTorch — hand-implemented multi-head attention, positional encoding, and a full GPU training pipeline on Tiny Shakespeare.',
      details: [
        'Hand-implemented multi-head attention, positional encoding, and layer normalization — no HuggingFace involved.',
        'Character-level tokenizer and training loop built and debugged from scratch.',
        'Trained on GPU via Google Colab, iterating on architecture and hyperparameters directly.',
      ],
    },
    {
      imgSrc: 'assets/ss.webp',
      title: 'StockSentry-AI',
      category: 'AI/ML',
      tags: ['Python', 'FinBERT', 'XGBoost', 'Scikit-learn', 'NLP'],
      projectLink: 'https://github.com/swayum1004/StockSentry',
      description: 'Quant analytics pipeline blending FinBERT news sentiment with XGBoost price models — R² of 0.91, orchestrated end-to-end with n8n and a Streamlit dashboard.',
      details: [
        '4-stage modular ETL pipeline: ingestion → cleaning → feature engineering → inference, each independently testable.',
        'FinBERT sentiment scoring blended with XGBoost and Random Forest price models.',
        'R² of 0.91 and a 17% MAE reduction over baseline via grid-search hyperparameter tuning.',
        'Orchestrated with n8n; Streamlit + Plotly dashboard built for non-technical stakeholders.',
      ],
    },
    {
      imgSrc: 'assets/vv.webp',
      title: 'VastraVerse',
      category: 'AI/ML',
      tags: ['Generative AI', 'Stable Diffusion', 'LLM', 'Flask'],
      projectLink: 'https://github.com/Navneetg2003/VastraVerse',
      description: 'BharatGen Hackathon semi-finalist — a Gemini-powered cultural fashion chatbot plus a Stable Diffusion + IP-Adapter virtual try-on pipeline.',
      details: [
        'Flask backend orchestrating the Gemini API (chatbot) and Stable Diffusion + IP-Adapter (virtual try-on).',
        'IP-Adapter preserves the user\u2019s identity and pose while applying reference clothing styles.',
        'Semi-finalist recognition at the BharatGen Generative AI Hackathon.',
      ],
    },
    {
      imgSrc: 'assets/2.jpeg',
      title: 'GeoVision',
      category: 'Backend',
      tags: ['Java', 'Spring Boot', 'PostGIS', 'Docker', 'AWS'],
      projectLink: 'https://github.com/Navneetg2003/GeoVision',
      description: 'Geospatial data platform handling 50K+ GeoJSON records — GiST spatial indexing cut query latency 30%, deployed on Dockerized AWS EC2 with CI/CD.',
      details: [
        'PostGIS with GiST spatial indexing across 50,000+ GeoJSON records.',
        'EXPLAIN ANALYZE-driven query tuning cut latency 30% under concurrent load.',
        '4+ Dockerized microservices with GitHub Actions CI/CD to AWS EC2.',
      ],
    },
    {
      imgSrc: 'assets/yaar.svg',
      title: 'Yaar',
      category: 'Full-Stack',
      tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      projectLink: 'https://github.com/Navneetg2003/Yaar',
      description: 'Full-stack web app with a composable React component library, an Express REST API, and a normalized PostgreSQL schema built for real load.',
      details: [
        'Container/presentational component split, with useMemo/useCallback on render-critical paths.',
        'AbortController-based request cancellation eliminates race conditions on unmount.',
        'Normalized PostgreSQL schema with foreign-key constraints and indexed hot-path columns.',
      ],
    },
    {
      imgSrc: 'assets/aac.svg',
      title: 'All About Coding',
      category: 'Full-Stack',
      tags: ['React', 'Tailwind CSS', 'DSA', 'Vercel'],
      projectLink: 'https://dsawebsite-kappa.vercel.app',
      description: 'Live, deployed DSA learning platform with topic and difficulty filtering — continuous deployment from GitHub straight to production.',
      details: [
        'FilterBar, ProblemCard, and ProblemList built as isolated, independently reusable components.',
        'Continuous deployment — every push to main auto-builds and ships to production.',
        'Live and in active use, not just a repository.',
      ],
    },
    {
      imgSrc: 'assets/demand-forecast.svg',
      title: 'Electricity Demand Forecasting',
      category: 'AI/ML',
      tags: ['TensorFlow', 'LSTM', 'Scikit-learn', 'Time-Series', 'Python'],
      projectLink: 'https://github.com/Navneetg2003/Electricity-Demand-Forecasting',
      description: 'Time-series forecasting pipeline — an LSTM benchmarked against Random Forest and Gradient Boosting baselines with walk-forward cross-validation.',
      details: [
        'LSTM benchmarked head-to-head against Linear Regression, Random Forest, and Gradient Boosting.',
        'Walk-forward expanding-window cross-validation — no lookahead leakage.',
        'EDA surfaced weekly seasonality, holiday effects, and long-term demand trends.',
      ],
    },
    {
      imgSrc: 'assets/aushdcare.svg',
      title: 'AushdCare',
      category: 'Mobile',
      tags: ['Android', 'Firebase', 'MVVM', 'Java'],
      projectLink: 'https://github.com/Navneetg2003/AushdCare',
      description: 'Native Android healthcare app — MVVM architecture, Retrofit networking, Firebase Auth and Firestore for appointments and medicine orders.',
      details: [
        'MVVM split across View / ViewModel / Repository layers for testability.',
        'Retrofit for typed REST calls; Firestore real-time listeners keep orders and appointments in sync live.',
        'RecyclerView ViewHolder recycling and lazy loading keep list views smooth.',
      ],
    },
  ];

const categories = ['All', 'AI/ML', 'Full-Stack', 'Backend', 'Mobile'];

// Skill labels and project tags aren't always spelled identically
// ("SpringBoot" vs "Spring Boot", "NodeJS" vs "Node.js") — normalize
// before comparing so a skill click reliably finds its projects.
const normalize = (str) => str.toLowerCase().replace(/[\s.-]/g, "");

const Work = () => {
  const [activeFilter, setActiveFilter] = useState({ type: "category", value: "All" });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onFilterByTag = (event) => {
      const tag = event.detail?.tag;
      if (!tag) return;
      setActiveFilter({ type: "tag", value: tag });
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("filter-projects", onFilterByTag);
    return () => window.removeEventListener("filter-projects", onFilterByTag);
  }, []);

  const filteredWorks = useMemo(() => {
    if (activeFilter.type === "category") {
      return activeFilter.value === "All"
        ? works
        : works.filter((work) => work.category === activeFilter.value);
    }
    return works.filter((work) =>
      work.tags.some((tag) => normalize(tag) === normalize(activeFilter.value))
    );
  }, [activeFilter]);

  return (
    <section 
        id="work" 
        className="section"
    >
        <div className="container">

            <div className="relative inline-block mb-8">
              <Reveal as="h2" className="headline-2 relative z-10">
                  My Portfolio Highlights
              </Reveal>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl"></div>
            </div>

            <Reveal delay={0.1} as="p" className="text-zinc-400 mt-3 mb-6 max-w-[50ch]">
            A selection of projects spanning AI/ML built from first principles, quantitative systems, and full-stack products shipped end to end.
            </Reveal>

            <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter.type === "category" && activeFilter.value === category}
                  onClick={() => setActiveFilter({ type: "category", value: category })}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter.type === "category" && activeFilter.value === category
                      ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950'
                      : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200 hover:border-zinc-600'
                  }`}
                >
                  {category}
                </button>
              ))}

              {activeFilter.type === "tag" && (
                <button
                  type="button"
                  onClick={() => setActiveFilter({ type: "category", value: "All" })}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-sky-400/10 border border-sky-400/40 text-sky-300"
                >
                  Filtered by: {activeFilter.value}
                  <span className="material-symbols-rounded text-[16px]" aria-hidden="true">close</span>
                </button>
              )}
            </div>

            {filteredWorks.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-700/60">
                <p className="text-zinc-400 mb-1">
                  None of the featured projects are tagged &ldquo;{activeFilter.value}&rdquo; specifically.
                </p>
                <p className="text-zinc-500 text-sm mb-5">It&apos;s part of the broader toolkit — just not a headline tag on these particular builds.</p>
                <button
                  type="button"
                  onClick={() => setActiveFilter({ type: "category", value: "All" })}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300"
                >
                  Show all projects
                </button>
              </div>
            ) : (
              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                 { filteredWorks.map((work, key) => (
                      <Reveal key={work.title} delay={Math.min(key * 0.06, 0.3)} y={20}>
                          <ProjectCard 
                              imgSrc={work.imgSrc}
                              title={work.title}
                              tags={work.tags}
                              description={work.description}
                              onOpenDetails={() => setSelectedProject(work)}
                          />
                      </Reveal>
                  ))}
              </div>
            )}

        </div>

        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

    </section>
  )
}

export default Work
