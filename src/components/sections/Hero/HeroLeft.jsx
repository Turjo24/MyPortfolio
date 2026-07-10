import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import HeroStats from "./HeroStats";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: .8,
      }}
    >
      <p className="uppercase tracking-[6px] text-orange-400 mb-5">
        Hello I'm
      </p>

      <h1 className="text-6xl lg:text-7xl font-black leading-tight">

        Sharadindu 

        <br />

        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
          Dutta
        </span>

      </h1>

      <div className="text-3xl font-semibold mt-8 h-12">

        <Typewriter
          words={[
            "Full Stack Developer",
            "React Developer",
            "Laravel Developer",
            "ASP.NET Core Developer",
          ]}
          loop
          cursor
        />

      </div>

      <p className="text-slate-400 mt-8 max-w-xl leading-8">

        Passionate software developer creating premium web
        experiences with React, ASP.NET Core, Laravel
        and modern UI technologies.

      </p>

      <div className="flex flex-wrap gap-5 mt-10">
        <Link to="/thank-you">
        <MagneticButton
          className="bg-orange-500 hover:bg-orange-600"
        >
          Hire Me

          <FaArrowRight />
        </MagneticButton>
        </Link>
      <a href="/cv/Turjo_Dutta_CV.pdf" download="Turjo_Dutta_CV.pdf">
       <MagneticButton className="border border-white/10 hover:bg-white/10">
         Download CV
        <FaDownload />
     </MagneticButton>
      </a>

      </div>

      <div className="flex gap-5 mt-10">

        <a
          href="https://github.com/Turjo24"
          className="text-3xl hover:text-orange-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sharadindu-dutta-3a8923419/"
          className="text-3xl hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

      </div>

      <HeroStats />

    </motion.div>
  );
}