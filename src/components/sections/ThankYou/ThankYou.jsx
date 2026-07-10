import { Link } from "react-router-dom";

// Simple inline 2D character so you don't need an external image file.
// Swap this out any time for your own PNG/SVG in /public.
function ThankYouCharacter() {
  return (
    <svg
      viewBox="0 0 200 220"
      className="w-40 md:w-56 mx-auto animate-bounce"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <circle cx="100" cy="70" r="55" fill="#F4A261" />
      {/* eyes */}
      <circle cx="80" cy="65" r="6" fill="#1f2937" />
      <circle cx="120" cy="65" r="6" fill="#1f2937" />
      {/* big happy smile */}
      <path
        d="M75 90 Q100 120 125 90"
        stroke="#1f2937"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* blush */}
      <circle cx="65" cy="85" r="8" fill="#f97316" opacity="0.4" />
      <circle cx="135" cy="85" r="8" fill="#f97316" opacity="0.4" />
      {/* body */}
      <rect x="60" y="120" width="80" height="80" rx="20" fill="#f97316" />
      {/* raised arms - saluting/thanking pose */}
      <rect x="20" y="110" width="18" height="70" rx="9" fill="#F4A261" transform="rotate(-20 20 110)" />
      <rect x="162" y="110" width="18" height="70" rx="9" fill="#F4A261" transform="rotate(20 162 110)" />
    </svg>
  );
}

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-200 text-center px-6">
      <ThankYouCharacter />

      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mt-6 mb-2">
        Thank you, Sir! 🙏
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        God bless you! You just made my whole month 😄
      </p>

      <div className="flex flex-col items-center gap-3 text-gray-300">
        <a
          href="mailto:youremail@gmail.com"
          className="hover:text-orange-500 transition underline underline-offset-4"
        >
          turjodutta023@gmail.com
        </a>
        <a
          href="tel:+8801XXXXXXXXX"
          className="hover:text-orange-500 transition underline underline-offset-4"
        >
          +880 1955584768
        </a>
      </div>

      <Link
        to="/"
        className="mt-10 text-sm text-gray-500 hover:text-orange-500 transition"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}