import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: 'public/assets/spring-boot.svg',
      label: 'SpringBoot',
      desc: 'Framework'
    },
    {
      imgSrc: 'public/assets/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'public/assets/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'public/assets/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'public/assets/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'public/assets/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: 'public/assets/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'public/assets/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-50[ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
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