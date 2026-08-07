import { motion } from "framer-motion";

function FloatingBadge({
  top,
  left,
  right,
  bottom,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top,
        left,
        right,
        bottom,
      }}
      className="
        absolute
        hidden
        lg:flex
        items-center
        rounded-full
        border
        border-white/10
        bg-slate-900/70
        px-5
        py-3
        text-sm
        font-medium
        text-white
        backdrop-blur-xl
        shadow-xl
      "
    >
      {text}
    </motion.div>
  );
}

export default FloatingBadge;