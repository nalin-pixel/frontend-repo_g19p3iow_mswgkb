import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const steps = [
  { title: 'Cleanse', text: 'Begin with a gentle cleanse to reset the skin and the senses.' },
  { title: 'Tone', text: 'Prep with Celeste Toner to balance pH and enhance absorption.' },
  { title: 'Treat', text: 'Press in Lune Glow Serum for a dewy, luminous complexion.' },
  { title: 'Seal', text: 'Massage Noir Night Oil to lock in moisture and calm.' },
];

const testimonials = [
  {
    quote: 'My skin has never felt so calm and radiant. The serum is like a daily meditation.',
    author: '— A.M.',
  },
  {
    quote: 'Elegant textures and a subtle, natural scent. It turns skincare into a ritual.',
    author: '— S.L.',
  },
  {
    quote: 'I love the transparency and sustainability. A brand I trust with my skin.',
    author: '— R.K.',
  },
];

export default function RitualAndCommunity() {
  return (
    <>
      {/* Ritual */}
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

      {/* Testimonials */}
      <section className="bg-[#FAF7F2]" id="testimonials">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-[#2C2A28]">Kind Words</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/70 p-6 text-left text-gray-700 ring-1 ring-black/5 backdrop-blur"
              >
                <p>{t.quote}</p>
                <footer className="mt-4 text-sm text-gray-600">{t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#EFE7DC]" id="newsletter">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h3 className="font-serif text-2xl text-[#2C2A28]">Join the Ritual</h3>
          <p className="mt-3 text-gray-700">Receive gentle notes on skincare, product drops, and studio happenings.</p>
          <form
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for joining Lune.');
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full flex-1 rounded-full border border-[#D9CDBE] bg-white/80 px-5 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:border-[#CBBBA7] focus:outline-none focus:ring-2 focus:ring-[#E6D8C8]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2C2A28] px-6 py-3 text-sm text-white transition hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#2C2A28] text-white flex items-center justify-center">☾</div>
              <span className="font-serif text-xl text-[#2C2A28]">Lune Skin Studio</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Organic skincare, crafted in London.</p>
          </div>
          <nav className="flex gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:underline">About</a>
            <a href="#collection" className="hover:underline">Collection</a>
            <a href="#ritual" className="hover:underline">Ritual</a>
            <a href="#newsletter" className="hover:underline">Newsletter</a>
          </nav>
          <div className="flex gap-4 text-gray-700">
            <a href="#" aria-label="Instagram" className="hover:text-[#2C2A28]"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#2C2A28]"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#2C2A28]"><Facebook size={18} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
