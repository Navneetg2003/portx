import SkillCard from "./SkillCard";
import Reveal from "./Reveal";


const skillItem = [
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      label: 'Python',
      desc: 'Programming'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      label: 'PyTorch',
      desc: 'Deep Learning'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      label: 'TensorFlow',
      desc: 'Deep Learning'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      label: 'Scikit-learn',
      desc: 'Machine Learning'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      label: 'Pandas',
      desc: 'Data Analysis'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      label: 'NumPy',
      desc: 'Numerical Computing'
    },
    {
      imgSrc: 'assets/spring-boot.svg',
      label: 'SpringBoot',
      desc: 'Framework'
    },
    {
      imgSrc: 'assets/react.svg',
      label: 'React',
      desc: 'Frontend Framework'
    },
    {
      imgSrc: 'assets/javascript.svg',
      label: 'JavaScript',
      desc: 'Programming'
    },
    {
      imgSrc: 'assets/nodejs.svg',
      label: 'NodeJS',
      desc: 'Runtime Environment'
    },
    {
      imgSrc: 'assets/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Backend Framework'
    },
    {
      imgSrc: 'assets/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      imgSrc: 'assets/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: 'assets/css3.svg',
      label: 'CSS3',
      desc: 'Styling'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      label: 'HTML5',
      desc: 'Markup Language'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      label: 'GitHub',
      desc: 'Code Hosting'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      label: 'PostgreSQL',
      desc: 'SQL Database'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      label: 'Java',
      desc: 'Programming'
    },
    {
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      label: 'VS Code',
      desc: 'Code Editor'
    },
  ];

const Skill = () => {
  return (
    <section id="skill" className="section">
        <div className="container">

            <div className="relative inline-block">
              <Reveal as="h2" className="headline-2 relative z-10">
                  Essential Tools I Use
              </Reveal>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>

            <Reveal delay={0.1} className="text-zinc-400 mt-3 mb-8 max-w-[50ch]" as="p">
            The tools and technologies I build with — from deep learning frameworks and data pipelines to full-stack frameworks, databases, and DevOps.
            </Reveal>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>
                    (
                        <Reveal key={key} delay={Math.min(key * 0.04, 0.4)} y={16}>
                            <SkillCard 
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                onClick={() =>
                                    window.dispatchEvent(
                                        new CustomEvent("filter-projects", { detail: { tag: label } })
                                    )
                                }
                            />
                        </Reveal>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill