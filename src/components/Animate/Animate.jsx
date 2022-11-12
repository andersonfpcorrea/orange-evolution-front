import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function Animate({ children, id, className = "" }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id}
        initial={{ x: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

Animate.defaultProps = {
  className: "",
};

export default Animate;
