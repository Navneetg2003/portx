import PropTypes from "prop-types";

const ExperienceCard = ({ time,content, name, imgSrc, company, classes }) => {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] hover:bg-zinc-700 transition-colors duration-300 shadow-lg hover:shadow-xl ${classes}`}
    >

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div>
          <p className="text-lg font-semibold">{company}</p>
          <p className="text-sm text-zinc-400 tracking-wider">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{time}</p>
        </div>


      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ExperienceCard;