import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
              Contact <span className="gold-gradient-text">Sangam Plywood</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Form - Moved to Left (col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-8 md:p-12 rounded-2xl flex flex-col shadow-lg border-t-4 border-t-primary"
          >
            <h4 className="text-3xl font-serif text-text-main mb-2">Send us a message</h4>
            <p className="text-text-muted mb-8">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-text-main">Your Name</label>
                  <input type="text" className="w-full bg-surface border-2 border-black/5 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-text-main">Phone Number</label>
                  <input type="tel" className="w-full bg-surface border-2 border-black/5 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-text-main">Requirements</label>
                <textarea className="w-full min-h-[120px] bg-surface border-2 border-black/5 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm resize-none" placeholder="I am looking for Marine Plywood..."></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary-dark text-background font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(139,28,32,0.39)] hover:shadow-[0_6px_20px_rgba(139,28,32,0.23)] hover:-translate-y-1">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards - Moved to Right (col-span-1) */}
          <div className="lg:col-span-1 space-y-5 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl hover-glow flex flex-col justify-center"
            >
              <h4 className="text-xl font-bold text-text-main mb-6">Reach Out</h4>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <a href="tel:7709081913" className="block text-base font-bold text-text-main hover:text-primary transition-colors">+91-7709081913</a>
                  <a href="tel:9460756014" className="block text-base font-bold text-text-main hover:text-primary transition-colors">+91-9460756014</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <a href="mailto:sangamplywoodbhl@yahoo.com" className="block text-base font-bold text-text-main hover:text-primary transition-colors break-all">sangamplywoodbhl@yahoo.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl hover-glow flex flex-col justify-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-2">Visit Us</h4>
              <p className="text-text-muted mb-1 font-medium">Sangam Plywood</p>
              <p className="text-text-muted text-sm">Bhilwara, Rajasthan, India</p>
              <a 
                href="https://maps.app.goo.gl/wtqfGef4PxiihVwP7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary font-bold hover:underline"
              >
                Get Directions &rarr;
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Google Map Embedded Section */}
      <div className="w-full h-[400px] mt-24">
        <iframe 
          src="https://maps.google.com/maps?q=Sangam%20Plywood%20Bhilwara&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sangam Plywood Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
