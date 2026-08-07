import { motion } from "framer-motion";

function FloatingBadge({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.08,
        rotate: -2,
      }}
      className="rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-300 shadow-lg backdrop-blur-md"
    >
      {text}
    </motion.div>
  );
}

export default FloatingBadge;