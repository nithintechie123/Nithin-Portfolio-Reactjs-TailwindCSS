import React, { useEffect, useState } from "react";

const SpotlightEffect = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ${
        isHovering ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default SpotlightEffect;
