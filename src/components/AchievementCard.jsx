import PropTypes from "prop-types";

const AchievementCard = ({ icon, title, detail, link }) => {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="relative flex items-start gap-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-5 transition-all duration-300 group hover:scale-[1.02] overflow-hidden bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-transparent to-blue-500/0 group-hover:from-sky-400/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

      <div className="relative z-10 w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-sky-400 to-blue-500 text-zinc-950 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-sky-400/20">
        <span className="material-symbols-rounded text-[22px]" aria-hidden="true">
          {icon}
        </span>
      </div>

      <div className="relative z-10 min-w-0">
        <h3 className="font-semibold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mt-1 group-hover:text-zinc-300 transition-colors duration-300">
          {detail}
        </p>
      </div>
    </Wrapper>
  );
};

AchievementCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default AchievementCard;
