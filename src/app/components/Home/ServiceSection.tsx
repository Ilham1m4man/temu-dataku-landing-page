"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "1-on-1 & Group Mentoring",
    slug: "mentoring",
    desc: "Sesi interaktif bersama mentor industry-level untuk membahas project atau topik tertentu.",
    img: "/images/mentoring.jpg",
  },
  {
    name: "Data Science Practice",
    slug: "practice",
    desc: "Kumpulan latihan real-world + evaluasi otomatis agar skill-mu terasah secara terukur.",
    img: "/images/practice.jpg",
  },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cardParent: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease },
  }),
};

export default function ServiceSection() {
  return (
    <section className="relative w-full bg-transparent py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight text-[#21356e]">
          Layanan&nbsp;TemuDataku
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              custom={i}
              variants={cardParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={s.img}
                alt={s.name}
                width={800}
                height={500}
                className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-bold text-white drop-shadow-sm">
                  {s.name}
                </h3>

                <div
                  className="mt-2 space-y-4 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <p className="text-sm text-slate-200">{s.desc}</p>
                  <button className="rounded-md border border-teal-400 px-4 py-1.5 text-sm font-semibold text-teal-300 transition hover:bg-teal-400/20">
                    selengkapnya
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
