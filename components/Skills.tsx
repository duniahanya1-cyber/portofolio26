"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "PHP & Laravel", level: 70 },
  { name: "Next.js / React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Corel Draw", level: 85 },
  { name: "Canva", level: 90 },
  { name: "Microsoft Office Word, Excel, PowerPoint", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-500 text-sm tracking-widest mb-2 font-medium">
            SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Tools & <span className="gradient-text">Keahlian</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-medium text-slate-700">{s.name}</span>
                <span className="text-sky-500 font-semibold">{s.level}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-sky-500 to-violet-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}