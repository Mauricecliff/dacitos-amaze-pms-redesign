"use client";

import { useState, useEffect, useCallback } from "react";

export function useMouseParallax(strength = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * strength * 100;
      setPosition({ x, y });
    },
    [strength]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
