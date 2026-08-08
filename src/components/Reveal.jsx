import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

// Wraps children so they animate in when scrolled into view, instead of
// all firing once on page load like the old .fade-in/.reveal-up CSS
// classes did. Respects prefers-reduced-motion.
const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  y: PropTypes.number,
  className: PropTypes.string,
  as: PropTypes.string,
};

export default Reveal;
