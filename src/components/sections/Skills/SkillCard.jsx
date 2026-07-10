import { motion } from "framer-motion";

export default function SkillCard({
  name,
  icon: Icon,
  color,
  level,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: .5,
      }}
      className="
      group
      relative
      overflow-hidden

      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      p-7
      "
    >

      {/* Glow */}

      <div
        className="
        absolute
        inset-0

        opacity-0

        group-hover:opacity-100

        transition

        duration-500
        "
        style={{
          background: `radial-gradient(circle at top, ${color}25, transparent 70%)`,
        }}
      />

      {/* Animated Border */}

      <div
        className="
        absolute

        inset-0

        rounded-3xl

        border

        border-transparent

        group-hover:border-orange-500/30

        transition-all

        duration-500
        "
      />

      {/* Floating Icon */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        relative

        w-16
        h-16

        rounded-2xl

        flex

        items-center

        justify-center

        mb-8
        "
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          size={34}
          color={color}
        />
      </motion.div>

      <h3
        className="
        relative

        text-2xl

        font-bold
        "
      >
        {name}
      </h3>

      <p
        className="
        relative

        mt-2

        text-sm

        text-slate-400
        "
      >
        Professional Experience
      </p>

      {/* Progress */}

      <div
        className="
        relative

        mt-8

        h-2

        rounded-full

        bg-slate-700

        overflow-hidden
        "
      >

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${level}%`,
          }}
          transition={{
            duration: 1.3,
          }}
          viewport={{
            once: true,
          }}
          className="h-full rounded-full"
          style={{
            background: color,
          }}
        />

      </div>

      <div
        className="
        relative

        flex

        justify-between

        mt-4
        "
      >

        <span className="text-slate-400">
          Skill Level
        </span>

        <span
          className="font-bold"
          style={{
            color,
          }}
        >
          {level}%
        </span>

      </div>

    </motion.div>
  );
}