"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Nadia Rahma",
    title: "ML Engineer • Bangkit ’23",
    avatar: "/images/mentor-nadia.jpg",
  },
  {
    name: "Reza Pradipta",
    title: "Data Scientist • Bangkit ’22",
    avatar: "/images/mentor-reza.jpg",
  },
  {
    name: "Salma Putri",
    title: "AI Researcher • Bangkit ’21",
    avatar: "/images/mentor-salma.jpg",
  },
  {
    name: "Irfan Kurniawan",
    title: "Product Analyst • Bangkit ’22",
    avatar: "/images/mentor-irfan.jpg",
  },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function MentorSection() {
  return (
    <section className="relative overflow-hidden w-full rounded-4xl bg-slate-50 py-24">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 -rotate-12 rounded-full bg-emerald-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="mb-20 text-center">
          <h2 className="inline-block text-4xl font-extrabold tracking-tight text-emerald-500">
            Meet Our Mentors
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mt-1 block h-1 origin-left rounded-full bg-gradient-to-r from-emerald-300 to-teal-400"
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Mentor kami adalah alumni unggulan&nbsp;
            <span className="font-semibold text-slate-700">
              Bangkit Academy
            </span>{" "}
            dengan rata-rata nilai kelulusan{" "}
            <span className="font-bold">A</span> dan pengalaman nyata di
            industri data &amp; AI.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {mentors.map(({ name, title, avatar }, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -6,
                rotateX: 5,
                rotateY: -5,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="group relative rounded-2xl bg-white/20 p-6 pt-14 shadow-xl backdrop-blur-lg backdrop-saturate-150"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="relative h-20 w-20">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    sizes="80px"
                    className="rounded-full object-cover"
                    quality={80}
                  />
                </div>
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-teal-200 to-emerald-400 opacity-0 blur-sm transition group-hover:opacity-60" />
              </div>

              <h3 className="mt-6 text-center text-lg font-semibold text-slate-800">
                {name}
              </h3>
              <p className="mt-1 text-center text-sm text-slate-600">{title}</p>

              <span className="pointer-events-none absolute -z-10 inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-teal-100 to-emerald-200 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mt-24 flex justify-center"
        >
          <Image
            src="/images/bangkit-logo.png"
            alt="Bangkit Academy"
            width={320}
            height={120}
            priority={false}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
