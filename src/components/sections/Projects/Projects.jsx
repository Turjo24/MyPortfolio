import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/ProjectsData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2

        w-[550px]
        h-[550px]

        rounded-full

        bg-orange-500/10

        blur-[180px]

        -z-10
        "
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

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
          className="text-center"
        >
          <p
            className="
            uppercase

            tracking-[6px]

            text-orange-400

            font-semibold
            "
          >
            Portfolio
          </p>

          <h2
            className="
            mt-5

            text-5xl

            lg:text-6xl

            font-black
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            max-w-3xl

            mx-auto

            mt-8

            text-slate-400

            leading-8
            "
          >
            Here are some of the projects I've worked on,
            ranging from full-stack web applications and
            mobile apps to machine learning solutions.
            Each project reflects my passion for building
            scalable, modern and user-friendly software.
          </p>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="
          grid

          lg:grid-cols-2

          gap-10

          mt-20
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
            >
              <ProjectCard
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Button */}

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
          className="
          flex

          justify-center

          mt-20
          "
        >
          <a
            href="https://github.com/Turjo24"
            target="_blank"
            rel="noreferrer"
            className="
            flex

            items-center

            gap-3

            px-8

            py-4

            rounded-2xl

            border

            border-white/10

            bg-white/5

            backdrop-blur-xl

            hover:bg-orange-500

            hover:border-orange-500

            transition-all

            duration-300
            "
          >
            <FaGithub size={20} />

            View More on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}