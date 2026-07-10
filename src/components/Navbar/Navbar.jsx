"use client";

import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center"
            : "top-0 left-0 w-full h-20 bg-black/20 backdrop-blur-xl border-b border-white/5"
        }
      `}
    >
      {scrolled ? (
        // Collapsed state: RGB glowing circle
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-14 h-14 rounded-full flex items-center justify-center"
        >
          {/* Rotating RGB gradient ring */}
          <span
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #ff0000, #ff9900, #33ff00, #00fff2, #3300ff, #ff00e6, #ff0000)",
              filter: "blur(4px)",
            }}
          />
          {/* Inner black circle so only the ring glows */}
          <span className="absolute inset-[3px] rounded-full bg-black/90 backdrop-blur-xl" />

          {/* T text */}
          <span className="relative text-orange-500 font-bold text-xl z-10">
            T
          </span>
        </button>
      ) : (
        // Full navbar
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-orange-500">Turjo</span>.dev
          </h1>

          <ul className="hidden md:flex gap-10 text-gray-300">
            <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
            <li className="hover:text-orange-500 cursor-pointer transition">About</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Skills</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Projects</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
          </ul>

          <button className="hidden md:block px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 transition">
            Hire Me
          </button>

          <HiOutlineMenuAlt3 className="md:hidden text-3xl" />
        </div>
      )}
    </nav>
  );
}