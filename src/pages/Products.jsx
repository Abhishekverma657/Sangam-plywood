import { motion } from 'framer-motion';
import marinePlywoodImg from '../assets/marine_plywood.png';
import blockboardImg from '../assets/blockboard_stack.png';
import laminateImg from '../assets/laminate_pattern.png';

const productCategories = [
  {
    title: "Premium Plywood Range",
    description: "Engineered for unmatched strength, durability, and resistance. Our plywood range is the backbone of high-quality furniture, offering superior load-bearing capacity and moisture resistance for both residential and commercial applications.",
    image: marinePlywoodImg,
    reverse: false,
    items: [
      "MR Plywood",
      "Marine Plywood",
      "15 Layer Plywood",
      "Flexible Plywood",
      "Calibrated Plywood",
      "Shuttering Plywood",
      "Film Faced Shuttering Ply",
      "Teak Ply"
    ]
  },
  {
    title: "Block Boards & Doors",
    description: "Solid, stable, and secure. Our blockboards provide excellent screw holding capacity and warp-free performance, while our premium pine doors offer elegant aesthetics backed by robust structural integrity.",
    image: blockboardImg,
    reverse: true,
    items: [
      "Water Proof Block Boards",
      "Pine Block Boards",
      "Block Board MR",
      "Doors A Grade 100% Pine"
    ]
  },
  {
    title: "Laminates & Accessories",
    description: "The perfect finish for your interior masterpieces. We offer a curated selection of stunning laminates to bring your surfaces to life, along with industrial-grade adhesives and accessories to ensure a flawless installation.",
    image: laminateImg,
    reverse: false,
    items: [
      "Sunmica",
      "Fabric Sunmica",
      "Timber",
      "Adhesive",
      "Masking Tep"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Products = () => {
  return (
    <section className="py-24 bg-surface min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
              Extensive Range of <span className="gold-gradient-text">Products</span>
            </h3>
            <p className="text-text-muted text-lg">
              We offer a comprehensive selection of high-grade wood materials, doors, laminates, and accessories to cater to all your interior and construction needs.
            </p>
          </motion.div>
        </div>

        {/* Product Categories */}
        <div className="flex flex-col gap-24">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${category.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: category.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="w-16 h-1 bg-primary mb-4 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-serif font-bold text-text-main mb-4">{category.title}</h3>
                  <p className="text-text-muted text-lg mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Grid of Items */}
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {category.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="glass-panel p-4 flex items-center rounded-lg border border-black/5 hover:border-primary/50 hover:bg-black/5 transition-all group"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:scale-150 transition-transform"></div>
                        <span className="font-medium text-text-muted group-hover:text-text-main transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
