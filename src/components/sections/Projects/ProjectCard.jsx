import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectCard({
  project,
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      transition-all
      duration-500
      "
    >
      {/* IMAGE */}

      <div
        className="
        relative

        h-60

        overflow-hidden
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover

          transition-transform
          duration-700

          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t

          from-black

          via-black/20

          to-transparent
          "
        />

        {/* STATUS */}

        <div
          className="
          absolute

          top-5

          left-5
          "
        >
          <span
            className={`
            px-4
            py-2
            rounded-full

            text-xs
            font-semibold

            ${
              project.status === "In Progress"
                ? "bg-orange-500 text-white"
                : "bg-green-500 text-white"
            }
            `}
          >
            {project.status}
          </span>
        </div>

        {/* FEATURED */}

        {project.featured && (
          <div
            className="
            absolute

            top-5

            right-5

            px-3
            py-2

            rounded-full

            bg-sky-500

            text-xs
            font-semibold
            "
          >
            Featured
          </div>
        )}
      </div>

      {/* CONTENT */}

      <div className="p-7">

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          {project.title}
        </h2>

        <p
          className="
          mt-5

          text-slate-400

          leading-7
          "
        >
          {project.description}
        </p>

        {/* TECH */}

        <div
          className="
          flex
          flex-wrap

          gap-3

          mt-7
          "
        >
          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
              px-3

              py-2

              rounded-full

              text-sm

              bg-orange-500/10

              border

              border-orange-500/20

              text-orange-300
              "
            >
              {tech}
            </span>

          ))}
        </div>

        {/* BUTTON */}

        <div
          className="
          flex

          gap-4

          mt-8
          "
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1

            flex

            items-center

            justify-center

            gap-2

            rounded-xl

            py-3

            border

            border-white/10

            hover:bg-white/10

            transition
            "
          >
            <FaGithub />

            GitHub
          </a>

          {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              py-3
              bg-orange-500
              hover:bg-orange-600
              transition
            "
          >
            <FaExternalLinkAlt />
            Live
          </a>
        )}
              </div>

      </div>
    </motion.div>
  );
}