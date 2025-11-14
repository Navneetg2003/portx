import PropTypes from "prop-types";

const SkillCard =({ 
    imgSrc, 
    label, 
    desc, 
    classes 
}) => {
    return(
        <div className={'relative flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 transition-all duration-300 group hover:scale-105 overflow-hidden '+classes}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-transparent to-blue-500/0 group-hover:from-sky-400/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>

            {/* Glass effect background */}
            <div className="absolute inset-0 bg-zinc-800/50 backdrop-blur-sm group-hover:bg-zinc-700/50 transition-colors duration-300 rounded-2xl"></div>
            
            <figure className="relative z-10 bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-gradient-to-br group-hover:from-sky-500/20 group-hover:to-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-sky-400/20">
                <img 
                src={imgSrc} 
                alt={label}
                width={32}
                height={32}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
                />
            </figure>
            <div className="relative z-10">
                <h3 className="font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">{label}</h3>
                <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {desc}
                </p>
            </div>
        </div>
    )

}

SkillCard.propTypes={
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard;