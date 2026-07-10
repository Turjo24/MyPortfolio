import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-orange-500">Turjo</span>.dev
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">

          <li className="hover:text-orange-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Skills
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Contact
          </li>

        </ul>

        <button className="hidden md:block px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 transition">
          Hire Me
        </button>

        <HiOutlineMenuAlt3 className="md:hidden text-3xl" />

      </div>

    </nav>
  );
}