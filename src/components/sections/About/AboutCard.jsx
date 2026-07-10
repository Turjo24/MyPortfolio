import { motion } from "framer-motion";

export default function AboutCard({
  icon: Icon,
  title,
  subtitle,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        mb-5
        "
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          size={28}
          color={color}
        />
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
}