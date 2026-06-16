import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Brands from '../components/Brands';

import heroImg1 from '../assets/luxury_wood_interior.png';
import heroImg2 from '../assets/modern_kitchen_wood.png';
import heroImg3 from '../assets/office_wood_interior.png';

import stackImg from '../assets/premium_plywood_stack.png';
import blockboardImg from '../assets/blockboard_macro.png';
import flushDoorImg from '../assets/flush_door_modern.png';

const slides = [
  { 
    id: 1, 
    image: heroImg1, 
    title: "Premium Plywood", 
    subtitle: "Crafting Elegance With Every Layer",
    desc: "Enhance your spaces with our durable, superior grade wood materials."
  },
  { 
    id: 2, 
    image: heroImg2, 
    title: "Modern Interiors", 
    subtitle: "Unmatched Durability For Kitchens",
    desc: "Water-proof and termite resistant solutions for your modern home."
  },
  { 
    id: 3, 
    image: heroImg3, 
    title: "Corporate Luxury", 
    subtitle: "Sophisticated Wood Paneling",
    desc: "Elevate your office environment with our premium decorative range."
  }
];

const featuredProducts = [
  { img: stackImg, title: "Plywood", desc: "MR, Marine & Calibrated" },
  { img: blockboardImg, title: "Blockboards", desc: "Water Proof & Pine Core" },
  { img: flushDoorImg, title: "Flush Doors", desc: "A Grade 100% Pine" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    {/* 1. HERO SLIDER */}
    <section className="relative h-[calc(100vh-80px)] overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-md">
              {slides[currentSlide].title}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-md">
              {slides[currentSlide].subtitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow">
              {slides[currentSlide].desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-background font-bold rounded-md text-center transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
              >
                Explore Products
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-transparent border border-white/30 hover:border-primary hover:text-primary text-white font-bold rounded-md text-center transition-all hover:-translate-y-1 glass-panel"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-primary w-8' : 'bg-black/20 hover:bg-black/40'
            }`}
          />
        ))}
      </div>
    </section>

    {/* 2. WELCOME SECTION */}
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Welcome To</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-8">
            Sangam Plywood <span className="text-primary">(Bhilwara)</span>
          </h3>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            We are a premier trading house specializing in top-tier wood and plywood products. 
            With years of excellence and a commitment to quality, we bring you the finest selection 
            of materials designed to elevate your interiors, homes, and corporate spaces.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mb-10">
            From highly durable Marine Plywood to elegant Flush Doors and premium Laminates, 
            we shape your thinking into reality. <strong>We care for your HOME.</strong>
          </p>
          <Link to="/about" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
            Read More About Us &rarr;
          </Link>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>

    {/* 2.5 WHY CHOOSE US SECTION */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Sangam Advantage</h2>
            <h3 className="text-4xl font-serif font-bold text-text-main mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Unmatched Durability</h4>
                  <p className="text-text-muted leading-relaxed">Our plywood is meticulously crafted using advanced bonding techniques, ensuring superior strength and resistance against moisture, borers, and termites.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Extensive Variety</h4>
                  <p className="text-text-muted leading-relaxed">From MR grade to Marine grade and stunning decorative laminates, we offer a comprehensive portfolio for every specific interior need.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Trusted Heritage</h4>
                  <p className="text-text-muted leading-relaxed">With over 17 years of excellence celebrating "Sangam Plus", we have built an unshakeable reputation for trust, quality, and timely delivery in the wood industry.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl glass-panel p-2"
          >
            <img src={heroImg2} alt="Modern Kitchen showcasing premium plywood" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 3. PRODUCT RANGE SECTION */}
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What We Offer</h2>
            <h3 className="text-4xl font-serif font-bold text-text-main mb-4">Our Product Range</h3>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-xl overflow-hidden glass-panel border border-black/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <h4 className="text-2xl font-serif text-text-main mb-2 group-hover:text-primary transition-colors">{prod.title}</h4>
                <p className="text-text-muted mb-6">{prod.desc}</p>
                <Link to="/products" className="text-sm font-medium uppercase tracking-wider text-text-main hover:text-primary transition-colors">
                  View Category &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block px-8 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-background transition-all font-medium"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>

    {/* 4. BRANDS SECTION */}
    <Brands />
    </>
  );
};

export default Home;
