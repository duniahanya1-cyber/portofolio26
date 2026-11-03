"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-sky-50 to-violet-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
            KONTAK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Mari <span className="gradient-text">Bekerja Sama</span>
          </h2>
          <p className="text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
            Punya project atau butuh orang yang bisa handle web, desain, dan
            administrasi? Kirim pesan — saya siap bantu.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:sauqifazlur@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 hover:glow transition-all shadow-md shadow-sky-500/25"
            >
              📧 Email Saya
            </a>
            <a
              href="https://wa.me/6285784867153"
                target="_blank"
                rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border-2 border-slate-200 bg-white text-slate-700 font-semibold hover:border-sky-500 hover:text-sky-500 transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/m-fazlur-rahman-assauqi-25b634387"
                target="_blank"
                rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border-2 border-slate-200 bg-white text-slate-700 font-semibold hover:border-sky-500 hover:text-sky-500 transition-all"
            >
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}