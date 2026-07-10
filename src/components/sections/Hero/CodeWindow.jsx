import { motion } from "framer-motion";

export default function CodeWindow() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 0.8,
        y: {
          duration: 4,
          repeat: Infinity,
        },
      }}
      className="
      hidden
      xl:block

      absolute
      left-0
      bottom-10

      w-72

      rounded-2xl

      border
      border-white/10

      bg-[#0B1120]/80

      backdrop-blur-xl

      shadow-2xl
      "
    >
      {/* Header */}

      <div className="flex gap-2 p-4">

        <span className="w-3 h-3 rounded-full bg-red-500" />

        <span className="w-3 h-3 rounded-full bg-yellow-500" />

        <span className="w-3 h-3 rounded-full bg-green-500" />

      </div>

      <div className="px-5 pb-5 text-sm font-mono">

        <p className="text-blue-400">
          const developer = {"{"}
        </p>

        <p className="ml-5 text-orange-400">
          name: "Sharadindu Dutta",
        </p>

        <p className="ml-5 text-cyan-400">
          role: "Full Stack",
        </p>

        <p className="ml-5 text-green-400">
          stack: ["React","Laravel",".NET"]
        </p>

        <p className="text-blue-400">
          {"}"}
        </p>

      </div>
    </motion.div>
  );
}