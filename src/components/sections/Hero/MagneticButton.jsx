import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={`
        inline-flex
        items-center
        gap-3
        px-7
        py-4
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}