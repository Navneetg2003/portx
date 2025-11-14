import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1558769132-cb1aea8f4e4d?w=800&auto=format&fit=crop',
      title: 'VastraVerse',
      tags: ['AI', 'Computer Vision', 'Generative AI', 'Python'],
      projectLink: 'https://github.com/Navneetg2003/VastraVerse',
      description: 'AI-powered virtual try-on system using computer vision and generative AI to revolutionize online fashion shopping experience.'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop',
      title: 'StockSentry',
      tags: ['Python', 'Market Analysis', 'Alerts', 'Data Analysis'],
      projectLink: 'https://github.com/Navneetg2003/StockSentry',
      description: 'Real-time stock market monitoring system with intelligent alerts and comprehensive data analysis for informed trading decisions.'
    },
    {
      imgSrc: 'assets/2.jpeg',
      title: 'GeoVision',
      tags: ['GIS', 'PostgreSQL', 'Spatial Analysis', 'Mapping'],
      projectLink: 'https://github.com/Navneetg2003/GeoVision',
      description: 'Advanced geospatial analysis platform leveraging PostgreSQL and GIS technologies for powerful location-based insights.'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop',
      title: 'All About Coding',
      tags: ['DSA', 'Python', 'Java', 'C++'],
      projectLink: 'https://github.com/Navneetg2003/All-About-Coding',
      description: 'Comprehensive collection of data structures and algorithms implementations across multiple languages for learning and reference.'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop',
      title: 'Movie Recommendation System',
      tags: ['Machine Learning', 'Python', 'Cosine Similarity', 'ML'],
      projectLink: 'https://github.com/Navneetg2003/Movie-Recommendation-System',
      description: 'Intelligent movie recommendation engine using machine learning algorithms and cosine similarity to personalize user experience.'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      title: 'Anemia Detection',
      tags: ['Computer Vision', 'ML', 'Medical AI', 'Python'],
      projectLink: 'https://github.com/Navneetg2003',
      description: 'Medical diagnostic tool using computer vision and machine learning to detect anemia through non-invasive image analysis.'
    },
  ];

const Work = () => {
  return (
    <section 
        id="work" 
        className="section"
    >
        <div className="container">

            <div className="relative inline-block mb-8">
              <h2 className="headline-2 reveal-up relative z-10">
                  My Portfolio Highlights
              </h2>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full animate-glow"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl"></div>
            </div>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Explore a selection of my recent projects showcasing full-stack development, API integration, and modern web technologies.
            </p>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
               { works.map(({imgSrc,title,tags,projectLink,description}, key)=> (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        description={description}
                    />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Work
