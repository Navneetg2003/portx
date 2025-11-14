import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    description,
    classes 
}) => {
  return (
    <div className={"relative p-[2px] rounded-2xl bg-gradient-to-br from-sky-400/30 via-blue-500/20 to-purple-500/30 group hover:from-sky-400/50 hover:via-blue-500/40 hover:to-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/25 " + classes}>
      <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 transition-all duration-500 h-full overflow-hidden">
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-blue-500/10"></div>
        </div>

        {/* Content wrapper */}
        <div className="relative p-5 flex flex-col h-full">
          
          {/* Image */}
          <figure className="aspect-video rounded-xl mb-4 overflow-hidden relative bg-transparent">
              <img 
                  src={imgSrc} 
                  alt={title}
                  loading='lazy'
                  className="w-full h-full rounded-xl object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              />
          </figure>

          {/* Title with icon */}
          <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="title-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-2">
                  {title}
              </h3>
              
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-sky-400 to-blue-500 text-zinc-950 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-sky-400/30 group-hover:shadow-sky-400/60">
                  <span className="material-symbols-rounded text-[20px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true">
                      arrow_outward
                  </span>
              </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
              {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-auto">
              {tags.map((label, key) => (
                  <span key={key} className="h-7 text-xs text-zinc-400 bg-zinc-800/80 backdrop-blur-sm grid items-center px-3 rounded-full border border-zinc-700/50 group-hover:bg-gradient-to-r group-hover:from-sky-400/20 group-hover:to-blue-500/20 group-hover:text-sky-300 group-hover:border-sky-400/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                      <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></span>
                      <span className="relative z-10">{label}</span>
                  </span>
              ))}
          </div>
        </div>

        <a 
          href={projectLink} 
          target='_blank' 
          rel="noopener noreferrer" 
          className="absolute inset-0 rounded-2xl z-20"
        ></a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string,
    description: PropTypes.string,
    classes: PropTypes.string
};

export default ProjectCard;
