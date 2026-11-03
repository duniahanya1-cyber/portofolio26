"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistem Informasi Akademik (SIAKAD) Perguruan Tinggi Pesantren",
    desc: "Sistem informasi akademik berbasis web android untuk mempermudah proses KRS, KHS, dan jadwal perkuliahan mahasiswa.",
    tools: "php, Laravel, MySQL",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
  },
  {
    title: "Desain Banner & Poster Untuk Event Organisasi",
    desc: "Desain materi promosi untuk 3 event besar.",
    tools: "Corel Draw & Canva",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
  },
  {
    title: "Sistem Rekap Data KTU Perguruan Tinggi Pesantren",
    desc: "Mempermudah proses rekap administrasi akademik saat asesmen lapangan.",
    tools: "Php, Laravel, MySQL",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Personal Branding Website",
    desc: "Portfolio pribadi dengan animasi halus.",
    tools: "React, Framer Motion",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
            PRODUK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Terealisasi <span className="gradient-text">Terbaik</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 card-shadow hover:border-sky-200 transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{p.desc}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-100 font-medium">
                  {p.tools}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}