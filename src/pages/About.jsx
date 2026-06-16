import { motion } from 'framer-motion';
import { Award, ShieldCheck, ThumbsUp, Truck } from 'lucide-react';
import woodTexture from '../assets/wood_texture_macro.png';
import officeImg from '../assets/office_wood_interior.png';

const features = [
  { icon: <Award size={24} />, title: 'Premium Quality', desc: 'Sourced from the finest timber.' },
  { icon: <ShieldCheck size={24} />, title: 'Durability', desc: 'Long-lasting and termite resistant.' },
  { icon: <ThumbsUp size={24} />, title: '100% Satisfaction', desc: 'Trusted by hundreds of builders.' },
  { icon: <Truck size={24} />, title: 'Fast Delivery', desc: 'Timely dispatch across the region.' },
];

const About = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: 'cover' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Excellence in <span className="gold-gradient-text">Wood & Plywood</span>
            </h3>
            <p className="text-text-muted text-lg mb-4 leading-relaxed">
              Based in Bhilwara, <strong className="text-text-main font-bold">Sangam Plywood</strong> is a premier trading house for high-quality wood and plywood products. With years of expertise, we supply top-tier materials for interior designers, architects, and homeowners.
            </p>
            <p className="text-text-muted text-lg mb-4 leading-relaxed">
              We specialize in MR Plywood, Marine Plywood, Block Boards, Flush Doors, and decorative laminates like Sunmica. Our commitment to excellence ensures that every product meets the highest industry standards.
            </p>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              Our journey began with a simple vision: to provide the best wood products at competitive prices while maintaining uncompromising quality. Today, we proudly celebrate 17+ years of building trust through our flagship brand, <strong>Sangam Plus</strong>. Whether you're crafting a modern kitchen, outfitting a corporate office, or building a cozy home, we have the perfect material to shape your thinking into reality.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-text-main font-bold mb-1">{feat.title}</h4>
                    <p className="text-sm text-text-muted">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="relative h-[350px] rounded-lg overflow-hidden glass-panel p-2 hover-glow">
              <img 
                src={woodTexture} 
                alt="Premium Wood Texture" 
                className="w-full h-full object-cover rounded shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
            </div>
            
            <div className="relative h-[250px] rounded-lg overflow-hidden glass-panel p-2 hover-glow">
              <img 
                src={officeImg} 
                alt="Office Interiors" 
                className="w-full h-full object-cover rounded shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
