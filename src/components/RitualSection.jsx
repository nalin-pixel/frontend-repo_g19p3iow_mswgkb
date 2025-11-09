import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Cleanse',
    text: 'Begin with a gentle cleanse to reset the skin and the senses.',
  },
  {
    title: 'Tone',
    text: 'Prep with Celeste Toner to balance pH and enhance absorption.',
  },
  {
    title: 'Treat',
    text: 'Press in Lune Glow Serum for a dewy, luminous complexion.',
  },
  {
    title: 'Seal',
    text: 'Massage Noir Night Oil to lock in moisture and calm.',
  },
];

export default function RitualSection() {
  return (
    <section className="bg-[#FBF8F3]" id="ritual">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-[#2C2A28] md:text-4xl">The Skincare Ritual</h2>
          <p className="mt-3 max-w-2xl text-gray-700">
            A mindful sequence to elevate everyday care. Breathe deeply, move slowly, and let texture and scent guide the moment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur"
            >
              <div className="text-xs tracking-widest text-gray-500">STEP {i + 1}</div>
              <h3 className="mt-2 font-serif text-xl text-[#2C2A28]">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
