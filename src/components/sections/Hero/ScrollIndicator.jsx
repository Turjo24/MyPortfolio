import { motion } from "framer-motion";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="
          flex
          flex-col
          items-center
          text-slate-400
        "
      >
        <span className="text-xs tracking-[4px] uppercase mb-2">
          Scroll
        </span>

        <HiOutlineChevronDoubleDown
          size={26}
          className="text-orange-400"
        />
      </motion.div>
    </motion.div>
  );
}