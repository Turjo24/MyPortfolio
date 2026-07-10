import { motion } from "framer-motion";
import { skills } from "../../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#020617] px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-orange-400">
            My Expertise
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-5 text-white">
            Technologies
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 mt-8 leading-8">
            I build modern, scalable and responsive web applications
            using cutting-edge frontend and backend technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              name={skill.title}
              icon={skill.icon}
              color={skill.color}
              level={skill.level}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;