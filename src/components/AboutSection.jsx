import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-[#FBF8F3]" id="about">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-serif text-3xl text-[#2C2A28] md:text-4xl">Our Philosophy</h2>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Each bottle is crafted in small batches using certified organic oils and botanicals. We believe in slow beauty—intentional rituals that nourish skin and spirit. Our formulas are free from fillers and synthetic fragrance, focusing on potency, purity, and sensorial elegance.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Sustainability guides our process from sourcing to packaging. We work with local suppliers, recyclable materials, and gentle production methods to honor the earth as much as your skin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Founder workspace"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FBF8F3] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
