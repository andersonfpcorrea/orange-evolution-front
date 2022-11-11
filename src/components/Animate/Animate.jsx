import { AnimatePresence, motion } from 'framer-motion';

function Animate({ children, id, className }) {
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

export default Animate;
