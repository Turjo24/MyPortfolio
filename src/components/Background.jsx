import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(#ffffff22 1px, transparent 1px),
          linear-gradient(90deg,#ffffff22 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px]
        bg-cyan-500/20 left-0 top-0"
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] rounded-full blur-[140px]
        bg-blue-600/20 right-0 bottom-0"
      />

    </div>
  );
};

export default Background;