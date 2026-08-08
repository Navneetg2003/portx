import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-600"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full grid place-items-center bg-zinc-800/80 backdrop-blur-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
            >
              <span className="material-symbols-rounded text-xl">close</span>
            </button>

            <figure className="aspect-square bg-zinc-950/40">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="p-6 md:p-8">
              <h3
                id="project-modal-title"
                className="text-2xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text mb-3"
              >
                {project.title}
              </h3>

              <p className="text-zinc-300 leading-relaxed mb-5">{project.description}</p>

              {project.details && project.details.length > 0 && (
                <ul className="space-y-2.5 mb-6">
                  {project.details.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-zinc-400 text-sm leading-relaxed">
                      <span className="material-symbols-rounded text-sky-400 text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                        arrow_right
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("filter-projects", { detail: { tag } }));
                      }, 50);
                    }}
                    className="h-7 text-xs text-sky-300 bg-sky-400/10 border border-sky-400/30 grid items-center px-3 rounded-full hover:bg-sky-400/20 hover:border-sky-400/50 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950 font-semibold hover:scale-[1.02] transition-transform duration-300"
              >
                <span>{project.projectLink?.includes("github.com") ? "View on GitHub" : "View Live"}</span>
                <span className="material-symbols-rounded text-lg">arrow_outward</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    projectLink: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetailModal;
