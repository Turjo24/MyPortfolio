import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    title: "Projects",
  },
  {
    value: "10+",
    title: "Tech Stack",
  },
  {
    value: "2+",
    title: "Years Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-14">

      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.15,
          }}
          whileHover={{
            y: -6,
          }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-5
            text-center
          "
        >
          <h3 className="text-3xl font-black text-orange-400">
            {item.value}
          </h3>

          <p className="text-sm text-slate-400 mt-2">
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>
  );
}