"use client";
import { motion } from "framer-motion";

const experiences = [
 
  {
    role: "Ketua Tata Usaha (KTU)",
    place: "Nama Instansi/Perusahaan",
    period: "2025 — Sekarang",
    desc: "Mengelola administrasi digital tim 15 orang. Bikin template otomatis yang mempercepat rekap data hingga 40%.",
  },
  {
    role: "Freelance Web Developer",
    place: "Remote",
    period: "2023 — Sekarang",
    desc: "Mengerjakan 10+ website company profile & landing page untuk UMKM dan personal branding.",
  },
  {
    role: "Ketua Organisasi Santri",
    place: "IKSASS (Ikatan Santri Salafiyah Syafi'iyah)",
    period: "2021 — 2023",
    desc: "Memimpin operasional dan arah strategis organisasi dalam menaungi kegiatan santri. Mengoordinasi kerja lintas divisi, mengelola pelaksanaan 5+ program kerja utama, serta mengawasi publikasi media dan desain organisasi.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
            PENGALAMAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Jejak <span className="gradient-text">Karier</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-sky-200 pl-8 space-y-10">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-sky-100" />
              <p className="text-sky-500 text-sm mb-1 font-medium">
                {e.period}
              </p>
              <h3 className="text-xl font-bold text-slate-900">{e.role}</h3>
              <p className="text-slate-500 text-sm mb-2">{e.place}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}