import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react';

// --- Counter Logic Component ---
const ScrollingNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Jab scroll karke samne aaye tabhi chale

  useEffect(() => {
    if (isInView) {
      // String se number nikalne ke liye (e.g., "700+" -> 700)
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      
      const controls = animate(0, numericValue, {
        duration: 2, // 2 seconds mein count khatam hoga
        ease: "easeOut",
        onUpdate: (value) => setDisplay(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </span>
  );
};

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"
        ></motion.div>

        <motion.h3 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          className="text-red-600 font-bold uppercase text-xs md:text-sm mb-4 tracking-[0.2em]"
        >
          Know More
        </motion.h3>
        
        <motion.h1 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight uppercase"
        >
          ABOUT <span className="text-red-600 italic block sm:inline">BHORHARI ASSOCIATE</span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed px-2"
        >
          We are revolutionizing the legal industry by making justice accessible, 
          affordable, and digital. Connect with the best minds in law instantly.
        </motion.p>
      </section>

      {/* --- Stats Section with Ftafat Counter --- */}
      <section className="bg-zinc-900/30 py-12 md:py-20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
          {[
            { label: "Verified Lawyers", val: "700+" },
            { label: "Consultations", val: "50000+" },
            { label: "Cities Covered", val: "100+" },
            { label: "Success Rate", val: "99%" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-2 tabular-nums">
                <ScrollingNumber value={stat.val} />
              </h2>
              <p className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-12 md:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            { title: "Our Mission", icon: Shield, desc: "To bridge the gap between people and legal experts through technology and transparency." },
            { title: "Our Vision", icon: Target, desc: "To become the world's most trusted digital platform for legal consultation." },
            { title: "Our Values", icon: Award, desc: "Integrity, Confidentiality, and relentless pursuit of Justice for every citizen." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp} 
              className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-[2rem] hover:border-red-600 transition-all duration-300 group"
            >
              <div className="bg-red-600/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <item.icon className="text-red-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-28 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
              alt="Legal Office" 
              className="relative rounded-[2.5rem] shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition duration-700 w-full object-cover aspect-video lg:aspect-square"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 order-1 lg:order-2"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Why <span className="text-red-600">Choose</span> <br className="hidden md:block"/> ADVO TALKS?
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            {[
              "Instant access to top-rated legal professionals.",
              "Secure and encrypted video/audio consultations.",
              "Transparent pricing with no hidden charges.",
              "Available 24/7 for urgent legal assistance."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="mt-1.5 bg-red-600 rounded-full p-1 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <p className="text-zinc-300 text-base md:text-lg leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-red-600 text-white font-bold px-12 py-4 rounded-full shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all text-sm uppercase tracking-wider"
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;