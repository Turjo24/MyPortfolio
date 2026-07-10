import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function EducationCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      className="relative pl-10"
    >
      {/* Circle */}

      <div
        className="
        absolute
        left-0
        top-2

        w-6
        h-6

        rounded-full

        bg-orange-500

        flex

        items-center

        justify-center
        "
      >
        <FaGraduationCap
          size={12}
          className="text-white"
        />
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="
        rounded-3xl

        border

        border-white/10

        bg-white/5

        backdrop-blur-xl

        p-7
        "
      >
        <span className="text-orange-400 font-semibold">
          {item.year}
        </span>

        <h3 className="text-2xl font-bold mt-3">
          {item.degree}
        </h3>

        <h4 className="text-sky-400 mt-2">
          {item.institution}
        </h4>

        <p className="text-slate-400 leading-8 mt-5">
          {item.description}
        </p>

        {item.cgpa && (
          <div className="mt-6">
            <span
              className="
              px-4

              py-2

              rounded-full

              bg-orange-500/10

              border

              border-orange-500/20

              text-orange-300
              "
            >
              {item.cgpa}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}