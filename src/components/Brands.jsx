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
    <section className="py-16 overflow-hidden bg-background border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Our Trusted Partners</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-text-main">Premium Brands We Trade</h3>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex space-x-6 md:space-x-10 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] py-4 px-3 md:px-5">
          {repeatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="glass-panel px-6 py-3 md:px-8 md:py-4 rounded-full border border-black/10 hover:border-primary/50 transition-colors cursor-default"
            >
              <span className="text-lg md:text-xl font-medium text-text-muted hover:text-primary transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
