"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white"
    >
      {/* Blob dekorasi background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* KIRI: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-500 mb-4 text-sm tracking-widest font-medium">
            👋 HELLO, I'M
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
            M. Fazlur Rahman <br />
            <span className="gradient-text">Assauqi, S.Kom.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            <span className="text-sky-500 font-semibold">Web Developer</span> &
            Digital Staff — menggabungkan coding, desain, dan administrasi
            dalam satu solusi digital.
          </p>

          {/* Tombol sejajar di mobile */}
          <div className="flex gap-3 flex-nowrap">
            <a
              href="#portfolio"
              className="px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-sky-500 text-white font-semibold text-sm md:text-base hover:bg-sky-600 hover:glow transition-all shadow-md shadow-sky-500/25 whitespace-nowrap"
            >
              Lihat Portofolio
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 md:px-6 md:py-3 rounded-full border-2 border-sky-500 text-sky-500 font-semibold text-sm md:text-base hover:bg-sky-50 transition-all whitespace-nowrap"
            >
              Lihat CV
            </a>
          </div>
        </motion.div>

        {/* KANAN: Foto PNG 3D Tilt */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ perspective: 1000 }}
          className="flex justify-center items-center"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-72 h-96 md:w-96 md:h-[32rem]"
          >
            {/* Blob glow di belakang foto */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-violet-400 rounded-full blur-3xl opacity-50 scale-90" />

            {/* Foto PNG transparan */}
            <img
              src="/image.png"
              alt="Foto Profil M. Fazlur Rahman Assauqi, S.Kom."
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 text-slate-400 text-sm"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}