import { motion } from "framer-motion";

import {
  FaReact,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiDotnet,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    top: "12%",
    left: "8%",
    delay: 0,
  },
  {
    Icon: FaLaravel,
    color: "#FF2D20",
    top: "70%",
    left: "12%",
    delay: 0.6,
  },
  {
    Icon: SiDotnet,
    color: "#512BD4",
    top: "18%",
    right: "8%",
    delay: 1,
  },
  {
    Icon: SiTailwindcss,
    color: "#38BDF8",
    top: "72%",
    right: "14%",
    delay: 0.3,
  },
  {
    Icon: FaNodeJs,
    color: "#68A063",
    top: "45%",
    right: "3%",
    delay: 0.8,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
          }}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          className="
            hidden
            lg:flex

            absolute

            w-16
            h-16

            rounded-2xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            items-center
            justify-center
          "
        >
          <item.Icon
            size={30}
            color={item.color}
          />
        </motion.div>
      ))}
    </>
  );
}