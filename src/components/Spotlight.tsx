import React, { useEffect, useRef, useState } from "react";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Spotlight({ children, className = "" }: SpotlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 }); // % positions

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        setPos({ x, y });
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, black 60%, transparent 100%)",
          animation: "gridMove 12s linear infinite",
        }}
      />

      {/* Spotlight glow follows mouse */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(16,185,129,0.22), transparent 60%)`,
        }}
      />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative">{children}</div>

      {/* Keyframes */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 120px 0px, 0px 120px; }
        }
      `}</style>
    </div>
  );
}
