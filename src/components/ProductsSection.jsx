import { motion } from 'framer-motion';

const products = [
  {
    name: 'Lune Glow Serum',
    price: '£58',
    image:
      'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Noir Night Oil',
    price: '£64',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e3e041211?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Celeste Toner',
    price: '£42',
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Étoile Elixir',
    price: '£76',
    image:
      'https://images.unsplash.com/photo-1599050751791-5b49a1f3cad2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-serif text-lg text-[#2C2A28]">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.price}</p>
        </div>
        <button className="rounded-full bg-[#E9DED1] px-4 py-2 text-sm text-[#2C2A28] transition hover:bg-[#E6D8C8]">
          Add to Bag
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="collection" className="bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-[#2C2A28] md:text-4xl">Featured Collection</h2>
            <p className="mt-3 text-gray-700">Small-batch serums and oils for luminous, balanced skin.</p>
          </div>
          <a href="#" className="text-sm text-gray-700 underline-offset-4 hover:underline">
            View all
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
