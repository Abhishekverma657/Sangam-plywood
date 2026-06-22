import { motion } from 'framer-motion';

const brands = [
  "Sangam Plus",
  "Morley Gold",
  "Amrit Gold",
  "Excel Club",
  "Gold Coin",
  "Wool Mark"
];

// Duplicate the array to create a seamless infinite scroll
const repeatedBrands = [...brands, ...brands, ...brands, ...brands];

const Brands = () => {
  return (
    <section className="py-20 overflow-hidden bg-background border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Trusted Partners</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main">Premium Brands We Trade</h3>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Subtle gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex space-x-6 md:space-x-12 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] py-8 px-4">
          {repeatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="glass-panel px-8 py-3 md:px-12 md:py-4 rounded-xl border border-black/10 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 bg-white/60 backdrop-blur-md flex items-center justify-center min-w-[220px] md:min-w-[280px]"
            >
              <span className="text-2xl md:text-3xl font-serif font-bold text-text-main/90 group-hover:text-primary transition-colors tracking-wide flex items-start gap-1">
                {brand}
                <sup className="text-sm md:text-base text-primary/80 mt-1 font-sans">®</sup>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
