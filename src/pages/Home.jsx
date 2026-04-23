import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Heart, Users, Gavel, ShieldAlert, 
  Landmark, Scale, ReceiptIndianRupee, 
  Home, Building2, Briefcase, Quote
} from 'lucide-react';

const HeroAndServices = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const services = [
    { title: "Divorce Lawyer", icon: <Heart className="text-red-600" size={32} /> },
    { title: "Arbitration", icon: <Users className="text-red-600" size={32} /> },
    { title: "Court Marriage", icon: <Gavel className="text-red-600" size={32} /> },
    { title: "Cyber Crime Lawyer", icon: <ShieldAlert className="text-red-600" size={32} /> },
    { title: "Supreme Court Lawyers", icon: <Landmark className="text-red-600" size={32} /> },
    { title: "High Court Lawyer", icon: <Scale className="text-red-600" size={32} /> },
    { title: "Taxation Lawyer", icon: <ReceiptIndianRupee className="text-red-600" size={32} /> },
    { title: "Lawyer for CBI", icon: <ShieldAlert className="text-red-600" size={32} /> },
    { title: "Landlord / Tenant", icon: <Home className="text-red-600" size={32} /> },
    { title: "Debt Recovery Tribunal", icon: <Landmark className="text-red-600" size={32} /> },
    { title: "Talk to Property Lawyer", icon: <Building2 className="text-red-600" size={32} /> },
    { title: "Corporate Lawyer", icon: <Briefcase className="text-red-600" size={32} /> },
  ];

  const testimonials = [
    {
      name: "Rohit Agarwal",
      location: "Florida, United States",
      text: "I have been seeking legal advice on immigration matters, as I am staying overseas currently. The 5 Minutes free legal consultation on AdvoTalks was absolutely helpful.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jitendra Walia",
      role: "Chief Growth Officer, BVG India Ltd",
      text: "We have been seeking legal Advice on various Corporate & labour laws issues. The advisory process is quick and simple. I will definitely recommend AdvoTalks.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  const clients = [
    { name: "Me n Moms", logo: "https://www.medianews4u.com/wp-content/uploads/2021/11/Me-N-Moms-expands-retail-presence-in-6-states-opens-12-new-stores.jpg" },
    { name: "Next Education", logo: "https://www.edtechreview.in/wp-content/uploads/next-education-launches-two-new-programmes.webp" },
    { name: "L&T Financial", logo: "https://media.assettype.com/freepressjournal/2023-12/2d2f861a-5053-44fe-876a-3fb2cfdf7953/L_T_Finance_Logo.jpg" },
    { name: "BillDesk", logo: "https://static.startuptalky.com/2024/03/BillDesk-Logo-Startuptalky.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Hero Content */}
      <main className="relative min-h-screen md:h-[90vh] flex items-center overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>

        <div className="container mx-auto px-6 md:px-10 relative z-20 grid md:grid-cols-2 items-center gap-12">
          
          {/* Left Text with Animation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 text-center md:text-left"
          >
            <motion.h3 variants={fadeInUp} className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Justice Gets Easy
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-black leading-tight uppercase">
              CONNECT WITH <br/>
              <span className="bg-red-600 text-white px-2 md:px-4 inline-block mt-2 transform -skew-x-6">EXPERT LAWYERS</span>
            </motion.h2>

            <motion.ul variants={fadeInUp} className="space-y-3 text-zinc-300 text-sm md:text-lg">
              {["Access Verified Legal Experts", "Nationwide Reach: 200+ Cities", "Assured Confidentiality"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-red-600 font-bold text-xl">»</span> {item}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition shadow-xl shadow-red-600/20"
              >
                Talk To Lawyer
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} /> Chat Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image with Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-red-600/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.news18.com/ibnkhabar/uploads/2023/05/who-is-lady-justice-why-justice-is-blind-2.jpg" 
              alt="Lady Justice" 
              className="relative rounded-[3rem] shadow-2xl border border-zinc-800 grayscale group-hover:grayscale-0 transition duration-700 w-full max-w-md mx-auto object-cover aspect-[4/5] border-b-8 border-red-600"
            />
          </motion.div>
        </div>
      </main>

      {/* Services Section with Scroll Reveal */}
      <section className="bg-black py-20 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
              Our Top <span className="text-red-600 italic">Services</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: "#dc2626", backgroundColor: "rgba(20,20,20,1)" }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center gap-4 cursor-pointer"
              >
                <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-red-600/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-xs text-center uppercase tracking-wider">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Slide-in */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-950">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs">Voice of Trust</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 italic">What Our Customers Say</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] relative shadow-2xl">
                  <Quote size={40} className="text-red-600/20 absolute top-6 right-8" />
                  <p className="text-zinc-300 leading-relaxed italic text-lg relative z-10">"{t.text}"</p>
                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-zinc-900 border-r border-b border-zinc-800 rotate-45"></div>
                </div>
                <div className="flex items-center gap-5 ml-8">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-red-600 p-1 grayscale" />
                  <div>
                    <h4 className="text-white font-bold text-xl">{t.name}</h4>
                    <p className="text-red-600 text-sm font-medium">{t.location || t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logos with Fade */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center  hover:opacity-100 transition-opacity duration-500">
            {clients.map((client, index) => (
              <motion.img 
                key={index}
                whileHover={{ scale: 1.1 }}
                src={client.logo} 
                alt={client.name} 
                className="max-h-12 w-auto mx-auto object-contain " 
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroAndServices;