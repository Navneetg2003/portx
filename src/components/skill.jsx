import SkillCard from "./SkillCard";


const skillItem = [
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

const skill = () => {
  return (
    <section className="section">
        <div className="container">

            <div className="relative inline-block">
              <h2 className="headline-2 reveal-up relative z-10">
                  Essential Tools I Use
              </h2>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full animate-glow"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications. From frontend frameworks to backend services, databases, and DevOps tools.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>
                    (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default skill