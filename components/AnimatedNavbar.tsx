"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="text-2xl font-display font-bold tracking-tighter uppercase transition-colors group-hover:text-purple-400">
            Kashif <span className="text-purple-500 group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation (21st.dev style glassmorphism) */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-neutral-950/20 backdrop-blur-xl">
          {navLinks.map((link) => (
            <MagneticButton key={link.name} className="px-1">
              <Link
                href={link.href}
                className="relative px-5 py-2 text-sm font-display font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </MagneticButton>
          ))}
        </div>

        {/* CTA Button */}
        <MagneticButton>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-black text-xs font-display font-bold uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Book a Call
          </a>
        </MagneticButton>
      </nav>
    </motion.header>
  );
}
