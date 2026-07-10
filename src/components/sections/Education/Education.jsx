import { motion } from "framer-motion";

import { education } from "../../../data/educationData";

import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            Education
          </p>

          <h2
            className="
            text-5xl

            font-black

            mt-5
            "
          >
            Academic Journey
          </h2>

          <p
            className="
            text-slate-400

            max-w-3xl

            mx-auto

            mt-6

            leading-8
            "
          >
            My educational journey has strengthened my
            problem-solving skills and passion for software
            development, enabling me to build modern web
            applications and continuously learn new technologies.
          </p>
        </motion.div>

        {/* Timeline */}

        <div
          className="
          relative

          mt-20

          border-l

          border-orange-500/30

          space-y-14
          "
        >
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}