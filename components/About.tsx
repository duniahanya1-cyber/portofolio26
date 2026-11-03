"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "3+", label: "Tahun Pengalaman" },
  { num: "20+", label: "Project Selesai" },
  { num: "100%", label: "Komitmen" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
          TENTANG SAYA
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
          Siap Bantu <span className="gradient-text">Sesuai Kebutuhan</span>
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Saya percaya pekerjaan yang baik itu lahir dari{" "}
            <span className="text-slate-900 font-semibold">
              pemahaman, ketelitian, dan komunikasi
            </span>
            . Selama beberapa tahun ini, saya belajar banyak hal dari pengalaman
            — mulai dari desain grafis, ngoding web, sampai mengurus
            administrasi sebagai KTU.
          </p>
          <p>
            Saya bukan tipe yang mengklaim jago di semua hal. Tapi saya senang
            belajar, dan saya siap bantu pekerjaan apa pun yang bisa saya
            kerjakan dengan baik — mulai dari bikin website, desain materi
            promosi, sampai ngerapihin data dan dokumen.
          </p>
          <p>
            Kalau ada yang bisa saya bantu, saya akan kerjakan dengan{" "}
            <span className="text-slate-900 font-semibold">sepenuh hati</span>.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-white border border-slate-100 card-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {s.num}
              </div>
              <div className="text-slate-500 text-xs md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}