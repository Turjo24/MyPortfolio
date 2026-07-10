import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import CodeWindow from "./CodeWindow";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      <ProfileCard />
      <CodeWindow />
    </motion.div>
  );
}