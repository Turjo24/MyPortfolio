import { motion } from "framer-motion";

import profile from "../../../assets/profile.jpg";

import AboutCard from "./AboutCard";
import Journey from "./Journey";

import { aboutCards } from "../../../data/aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
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
          text-5xl
          font-black
          text-center
          "
        >
          About Me
        </motion.h2>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          mt-24
          "
        >

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            flex
            justify-center
            "
          >

            <div
              className="
              relative

              w-[360px]
              h-[450px]

              rounded-[40px]

              overflow-hidden

              border
              border-white/10

              bg-white/5
              "
            >

              <div
                className="
                absolute

                inset-0

                bg-gradient-to-b

                from-orange-500/10

                to-transparent
                "
              />

              <img
                src={profile}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p
              className="
              text-orange-400
              uppercase
              tracking-[5px]
              "
            >
              Who Am I
            </p>

            <h2
              className="
              text-4xl
              font-black
              mt-4
              "
            >
              Full Stack Developer &
              <br />
              Problem Solver
            </h2>

            <p
              className="
              mt-8

              text-slate-400

              leading-8
              "
            >
              I am a passionate Computer Science student
              who enjoys building modern,
              scalable and beautiful web applications.

              My focus is creating responsive interfaces,
              clean backend architecture
              and exceptional user experience.
            </p>

            <div
              className="
              grid
              md:grid-cols-3
              gap-5
              mt-12
              "
            >

              {aboutCards.map((card) => (

                <AboutCard
                  key={card.title}
                  {...card}
                />

              ))}

            </div>

          </motion.div>

        </div>

        {/* <Journey /> */}

      </div>
    </section>
  );
}