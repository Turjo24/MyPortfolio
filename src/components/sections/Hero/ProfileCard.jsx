import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import profile from "../../../assets/profile.jpg";

export default function ProfileCard() {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      glareEnable
      glareMaxOpacity={0.15}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          relative
          w-[360px]
          h-[470px]
          rounded-[36px]
          overflow-hidden
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(249,115,22,.15)]
        "
      >
        {/* Orange Glow */}

        <div
          className="
          absolute
          -top-24
          left-1/2
          -translate-x-1/2
          w-72
          h-72
          rounded-full
          bg-orange-500/20
          blur-[120px]
          "
        />

        {/* Border Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-[36px]
          border
          border-orange-500/20
          "
        />

        <img
          src={profile}
          alt="profile"
          className="
          absolute
          bottom-0
          w-full
          h-full
          object-cover
          "
        />
      </motion.div>
    </Tilt>
  );
}