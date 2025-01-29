import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'assets/1.jpeg',
      title: 'Chat Application',
      tags: ['Spring Boot', 'React', 'WebSocket'],
      projectLink: 'https://your-chat-app-link.com'
    },
    {
      imgSrc: 'assets/2.jpeg',
      title: 'GeoVision',
      tags: ['GIS', 'Postgres Sql', 'Mapping'],
      projectLink: 'https://your-geovision-link.com'
    },
  ];

const Work = () => {
  return (
    <section 
        id="work" 
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8">
                My Projects
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
               { works.map(({imgSrc,title,tags,projectLink}, key)=> (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Work
