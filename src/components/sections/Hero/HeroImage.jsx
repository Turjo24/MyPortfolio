import profile from "../../../assets/profile.jpg";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ff7a00,#ff004c,#7c3aed,#00d4ff,#ff7a00)] p-[6px] animate-[spin_8s_linear_infinite]">

        <div className="h-full w-full rounded-full bg-[#050505]" />

      </div>

      <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[70px]" />

      <img
        src={profile}
        alt="Sharadindu Dutta"
        className="relative h-72 w-72 rounded-full border-4 border-neutral-900 object-cover shadow-[0_0_80px_rgba(255,122,0,.25)] transition duration-500 hover:scale-105 lg:h-96 lg:w-96"
      />
    </motion.div>
  );
}