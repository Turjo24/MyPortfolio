import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-150"
      style={{
        background: `radial-gradient(
          400px circle at ${position.x}px ${position.y}px,
          rgba(249,115,22,0.22),
          transparent 70%
        )`,
      }}
    />
  );
}