import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const bgTexture =
  'https://images.unsplash.com/photo-1629198735663-6f5b8dfb81cc?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyNzh8MHwxfHNlYXJjaHwxfHxvaWwlMjB1cCUyMGNsb3NlJTIwZ2xhc3MlMjB0ZXh0dXJlfGVufDB8fHx8fA%3D%3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#FAF7F2]">
      <img
        src={bgTexture}
        alt="Soft oil texture"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/70 via-[#FAF7F2]/85 to-[#FAF7F2]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full bg-white/60 px-4 py-1 text-[11px] tracking-[0.2em] text-gray-700 backdrop-blur"
        >
          LONDON • SLOW BEAUTY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl leading-tight text-[#2C2A28] md:text-6xl"
        >
          Glow Begins With Ritual
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg"
        >
          Lune Skin Studio crafts natural skincare for mindful beauty routines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#collection"
            className="inline-flex items-center gap-2 rounded-full bg-[#E9DED1] px-6 py-3 text-sm text-[#2C2A28] shadow-sm transition hover:bg-[#E6D8C8]"
          >
            Explore Collection <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
