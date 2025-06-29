'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Python',       logo: '/images/tools/python.svg' },
  { name: 'Pandas',       logo: '/images/tools/pandas.svg' },
  { name: 'NumPy',        logo: '/images/tools/numpy.svg' },
  { name: 'Matplotlib',   logo: '/images/tools/matplotlib.svg' },
  { name: 'Seaborn',      logo: '/images/tools/seaborn.svg' },
  { name: 'TensorFlow',   logo: '/images/tools/tensorflow.svg' },
  { name: 'PyTorch',      logo: '/images/tools/pytorch.svg' },
  { name: 'Scikit-Learn', logo: '/images/tools/scikit-learn.svg' },
];

function ScrollingRow({
  direction = 'left',
  className = '',
}: {
  direction?: 'left' | 'right';
  className?: string;
}) {
  const xKeyframes = direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-20"
        animate={{ x: xKeyframes }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...tools, ...tools].map((tool, idx) => (
          <motion.div
            key={idx}
            style={{width: "80px", height: "160px"}}
            className="flex-none flex items-center justify-center"
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={100}
              height={160}
              sizes="160px"
              className="object-contain"
              quality={85}
              priority={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-extrabold tracking-tight text-emerald-600">
          Kuasai Tools di&nbsp;bidang&nbsp;Data&nbsp;Science
        </h2>

        <ScrollingRow direction="left" />
        <ScrollingRow direction="right" className="mt-12" />

      </div>
    </section>
  );
}