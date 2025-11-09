import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import RitualSection from './components/RitualSection';
import TestimonialsNewsletterFooter from './components/TestimonialsNewsletterFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#2C2A28] text-white flex items-center justify-center">☾</div>
            <span className="font-serif text-lg text-[#2C2A28] tracking-wide">Lune</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#about" className="hover:text-[#2C2A28]">About</a>
            <a href="#collection" className="hover:text-[#2C2A28]">Collection</a>
            <a href="#ritual" className="hover:text-[#2C2A28]">Ritual</a>
            <a href="#newsletter" className="hover:text-[#2C2A28]">Newsletter</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <RitualSection />
        <TestimonialsNewsletterFooter />
      </main>
    </div>
  );
}

export default App;
