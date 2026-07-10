import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { HiArrowDownTray } from "react-icons/hi2";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <p className="mb-5 uppercase tracking-[6px] text-orange-500">
        Welcome To My Portfolio
      </p>

      <h1 className="text-5xl font-black leading-tight lg:text-7xl">
        Hi,
        <br />
        I'm
        <span className="text-orange-500"> Sharadindu</span>
        <br />
        Dutta
      </h1>

      <div className="mt-6 text-2xl font-semibold text-gray-300 h-10">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1500,
            "AI Enthusiast",
            1500,
            "Full Stack Developer",
            1500,
            "Cybersecurity Learner",
            1500,
          ]}
          speed={40}
          repeat={Infinity}
        />
      </div>

      <p className="mt-8 leading-8 text-gray-400">
        Passionate about building modern web applications,
        Artificial Intelligence and Cybersecurity with clean,
        scalable and user-focused solutions.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <button className="rounded-xl bg-orange-500 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-orange-600 flex items-center gap-2">
          <HiArrowDownTray />
          Download CV
        </button>

        <button className="rounded-xl border border-orange-500 px-7 py-4 hover:bg-orange-500 transition">
          View Projects
        </button>
      </div>

      <div className="mt-10 flex gap-6 text-3xl">
        <FaGithub className="cursor-pointer hover:text-orange-500 transition" />
        <FaLinkedin className="cursor-pointer hover:text-orange-500 transition" />
        <FaFacebook className="cursor-pointer hover:text-orange-500 transition" />
      </div>

      <div className="mt-14 grid grid-cols-3 gap-5">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h2 className="text-3xl font-bold text-orange-500">10+</h2>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h2 className="text-3xl font-bold text-orange-500">15+</h2>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h2 className="text-3xl font-bold text-orange-500">3+</h2>
          <p className="text-gray-400 mt-2">Years Learning</p>
        </div>

      </div>
    </motion.div>
  );
}