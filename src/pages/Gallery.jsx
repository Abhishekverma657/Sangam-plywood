import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing all available assets for the gallery
import heroImg from '../assets/luxury_wood_interior.png';
import stackImg from '../assets/premium_plywood_stack.png';
import textureImg from '../assets/wood_texture_macro.png';
import kitchenImg from '../assets/modern_kitchen_wood.png';
import flushDoorImg from '../assets/flush_door_modern.png';
import blockboardImg from '../assets/blockboard_macro.png';
import officeImg from '../assets/office_wood_interior.png';
import laminateImg from '../assets/laminate_texture.png';
import livingRoomImg from '../assets/luxury_living_room.png';
import corpOfficeImg from '../assets/corporate_office_wood.png';
import plywoodSheetsImg from '../assets/plywood_sheets.png';
import marinePlywoodImg from '../assets/marine_plywood.png';
import blockboardStackImg from '../assets/blockboard_stack.png';
import flushDoorWoodImg from '../assets/flush_door_wood.png';
import bedroomInteriorImg from '../assets/bedroom_interior.png';
import laminatePatternImg from '../assets/laminate_pattern.png';
import introVideo from '../assets/intro-video.mp4';

const categories = ["ALL", "VIDEOS", "PLYWOOD", "BLOCKBOARD", "FLUSH DOORS", "INTERIORS", "LAMINATES", "OFFICE SPACES"];

const galleryImages = [
  { id: 1, src: livingRoomImg, title: "Luxury Living Room", category: "INTERIORS" },
  { id: 2, src: heroImg, title: "Premium Interiors", category: "INTERIORS" },
  { id: 3, src: laminateImg, title: "Decorative Laminate", category: "LAMINATES" },
  { id: 4, src: stackImg, title: "Industrial Grade", category: "PLYWOOD" },
  { id: 5, src: textureImg, title: "Rich Textures", category: "LAMINATES" },
  { id: 6, src: corpOfficeImg, title: "Corporate Setup", category: "OFFICE SPACES" },
  { id: 7, src: kitchenImg, title: "Modern Kitchens", category: "INTERIORS" },
  { id: 8, src: flushDoorImg, title: "Elegant Flush Doors", category: "FLUSH DOORS" },
  { id: 9, src: blockboardImg, title: "Blockboard Core", category: "BLOCKBOARD" },
  { id: 10, src: officeImg, title: "Office Interiors", category: "OFFICE SPACES" },
  { id: 11, src: plywoodSheetsImg, title: "Premium Plywood Sheets", category: "PLYWOOD" },
  { id: 12, src: marinePlywoodImg, title: "Marine Grade Plywood", category: "PLYWOOD" },
  { id: 13, src: blockboardStackImg, title: "Pine Blockboards", category: "BLOCKBOARD" },
  { id: 14, src: flushDoorWoodImg, title: "Modern Flush Door", category: "FLUSH DOORS" },
  { id: 15, src: bedroomInteriorImg, title: "Luxury Bedroom", category: "INTERIORS" },
  { id: 16, src: laminatePatternImg, title: "Abstract Laminate", category: "LAMINATES" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredImages = galleryImages.filter(img => 
    activeTab === "ALL" ? true : img.category === activeTab
  );

  return (
    <section className="py-24 bg-background min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
              Our <span className="gold-gradient-text">Gallery</span>
            </h3>
            <p className="text-text-muted text-lg">
              Explore our collection of premium plywood applications, promotional banners, and interior inspirations.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-primary text-background shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-surface text-text-muted hover:text-text-main border border-black/10 hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video Section - Always visible */}
        {(activeTab === "ALL" || activeTab === "VIDEOS") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 rounded-2xl overflow-hidden glass-panel relative max-w-5xl mx-auto group shadow-2xl border border-white/10 aspect-video bg-black"
          >
            <video 
              src={introVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              controls
              className="w-full h-full object-cover"
            ></video>
            {/* Overlay Gradient from top so bottom controls are not dimmed */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-2/3"></div>
            
            {/* Text at top */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-10 -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none opacity-0 group-hover:opacity-100 z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-sm">
                Featured Presentation
              </span>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 shadow-sm">Introduction to Sangam Plywood</h4>
              <p className="text-white/90 max-w-2xl text-sm md:text-base drop-shadow-md">
                Discover our commitment to quality, innovation, and durability. Experience the strength and beauty of our premium wood solutions.
              </p>
            </div>
          </motion.div>
        )}

        {/* Gallery Grid with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div 
                layout
                key={img.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-xl overflow-hidden glass-panel cursor-pointer"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-wider uppercase mb-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {img.category}
                  </span>
                  <h4 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
