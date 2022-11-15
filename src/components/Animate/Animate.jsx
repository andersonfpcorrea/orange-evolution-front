import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function Animate({ children, id, className = "" }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ x: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Animate.defaultProps = {
  id: "",
  className: "",
};

export default Animate;
