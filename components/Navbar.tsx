"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md py-3 shadow-sm border-b border-slate-100"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">
          FR.
        </a>
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-slate-600 hover:text-sky-500 transition-colors"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 hover:scale-105 transition-all shadow-md shadow-sky-500/20"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}