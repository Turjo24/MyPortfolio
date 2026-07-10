import { motion } from "framer-motion";
import { journey } from "../../../data/aboutData";


export default function Journey() {
  return (
    <div className="mt-24">

      <h2 className="text-3xl font-bold mb-12">
        My Journey
      </h2>

      <div className="relative border-l border-orange-500/30 pl-10">

        {journey.map((item, index) => (

          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .2,
            }}
            className="mb-12 relative"
          >

            <div
              className="
              absolute
              -left-[46px]
              top-2

              w-5
              h-5

              rounded-full

              bg-orange-500
              "
            />

            <span
              className="
              text-orange-400
              font-semibold
              "
            >
              {item.year}
            </span>

            <h3
              className="
              text-2xl
              font-bold
              mt-2
              "
            >
              {item.title}
            </h3>

            <p
              className="
              text-slate-400
              mt-3
              leading-8
              "
            >
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}