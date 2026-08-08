import PropTypes from "prop-types";

const ExperienceCard = ({ time, content, name, imgSrc, company, skills, classes }) => {
  return (
    <div
      className={`relative p-[2px] rounded-2xl bg-gradient-to-br from-sky-400/30 to-blue-500/20 group hover:from-sky-400/50 hover:to-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/25 ${classes}`}
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 transition-all duration-500 h-full overflow-hidden">
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-blue-500/10"></div>
        </div>

        {/* Card body: logo badge sits beside the header, content flows below full-width */}
        <div className="relative h-full min-w-[320px] lg:min-w-[440px] flex flex-col p-6">

          {/* Header: logo badge + company/role/date */}
          <div className="flex items-center gap-4 mb-4">
            <figure className="w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 rounded-xl bg-white p-2.5 shadow-lg ring-1 ring-black/5 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:shadow-sky-400/20 transition-all duration-500">
              <img
                src={imgSrc}
                alt={name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="min-w-0">
              <h3 className="text-lg font-bold mb-0.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                {company}
              </h3>
              <p className="text-sm text-zinc-300 font-medium mb-1 group-hover:text-sky-300 transition-colors duration-300">
                {name}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-sky-400 transition-colors duration-300">
                <span className="material-symbols-rounded text-[16px]">schedule</span>
                <p className="tracking-wide">{time}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4 group-hover:via-sky-400/30 transition-colors duration-500"></div>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors duration-300">
            {content}
          </p>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="mt-auto">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-semibold group-hover:text-sky-400 transition-colors duration-300">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700/50 group-hover:bg-gradient-to-r group-hover:from-sky-400/20 group-hover:to-blue-500/20 group-hover:text-sky-300 group-hover:border-sky-400/30 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.string,
};

export default ExperienceCard;
