import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2

        w-[500px]
        h-[500px]

        rounded-full

        bg-orange-500/10

        blur-[180px]

        -z-10
        "
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-orange-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-5">
            Let's Build Something Amazing
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-8">
            I'm always open to discussing new opportunities,
            freelance projects, collaborations or simply having
            a conversation about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
          >

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="text-slate-400 mt-5 leading-8">
              Feel free to reach out through any of the
              following platforms.
            </p>

            <div className="space-y-6 mt-10">

              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                value="your_email@gmail.com"
              />

              <ContactItem
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+8801XXXXXXXXX"
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Dhaka, Bangladesh"
              />

            </div>

            <div className="flex gap-5 mt-10">

              <SocialButton
                icon={<FaGithub />}
                link="#"
              />

              <SocialButton
                icon={<FaLinkedin />}
                link="#"
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            space-y-6
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/10 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-white/10 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-white/10 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-transparent border border-white/10 rounded-xl p-4 outline-none resize-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="
              flex
              items-center
              justify-center
              gap-3

              w-full

              py-4

              rounded-xl

              bg-orange-500

              hover:bg-orange-600

              transition
              "
            >
              <FaPaperPlane />

              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function ContactItem({
  icon,
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-5">

      <div
        className="
        w-14
        h-14

        rounded-2xl

        bg-orange-500/10

        border

        border-orange-500/20

        flex

        items-center

        justify-center

        text-orange-400

        text-xl
        "
      >
        {icon}
      </div>

      <div>

        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="text-slate-400">
          {value}
        </p>

      </div>

    </div>
  );
}

function SocialButton({
  icon,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
      w-14
      h-14

      rounded-2xl

      border

      border-white/10

      bg-white/5

      flex

      items-center

      justify-center

      text-xl

      hover:bg-orange-500

      transition
      "
    >
      {icon}
    </a>
  );
}