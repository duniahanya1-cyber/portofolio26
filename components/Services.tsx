"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Bikin website company profile, landing page, atau web app pakai HTML, CSS, JS, Next.js, dan WordPress.",
  },
  {
    icon: "🎨",
    title: "Web & Graphic Design",
    desc: "Desain UI web, banner, logo, dan materi promosi pakai Corel Draw, Canva, dan Figma.",
  },
  {
    icon: "📋",
    title: "Administrasi & Operasional",
    desc: "Pengalaman sebagai KTU: rekap data, kelola dokumen, susun laporan, dan koordinasi tim.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
            LAYANAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Apa yang Bisa Saya <span className="gradient-text">Bantu</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 card-shadow hover:border-sky-200 transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}