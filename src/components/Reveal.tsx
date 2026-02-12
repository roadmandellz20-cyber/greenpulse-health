import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export default function Reveal({ children, delay = 0, y = 16 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
