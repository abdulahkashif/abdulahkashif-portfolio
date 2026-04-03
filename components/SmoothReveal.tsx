"use client";

import { motion } from "framer-motion";

export default function SmoothReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
