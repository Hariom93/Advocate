import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import kiya
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.1, duration: 0.5 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900 overflow-hidden">
      <motion.div 
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-baseline gap-1">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              BHORHARI<span className="text-red-600">ASSOCIATE</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Leading legal platform providing expert consultation and nationwide legal assistance.
          </p>
          
          <div className="flex gap-4 pt-2">
            {[
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaInstagram, href: "#" },
              { Icon: FaTwitter, href: "#" },
              { Icon: FaYoutube, href: "#" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                whileHover={{ y: -5, backgroundColor: "#dc2626" }}
                className="bg-zinc-900 p-3 rounded-full transition-colors duration-300"
              >
                <social.Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Browse Links (Using React Router Link) */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-red-600 pl-3">Browse</h3>
          <ul className="space-y-4 text-zinc-400 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-red-600 flex items-center gap-2 transition-colors">
                <ChevronRight size={14} className="text-red-600" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600 flex items-center gap-2 transition-colors">
                <ChevronRight size={14} className="text-red-600" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/OurTeam" className="hover:text-red-600 flex items-center gap-2 transition-colors">
                <ChevronRight size={14} className="text-red-600" /> Our Team
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Support Links */}
        <motion.div variants={itemVariants} className="md:pt-14">
          <ul className="space-y-4 text-zinc-400 text-sm font-medium">
            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            <li><Link to="/login" className="hover:text-red-600 transition-colors">Login</Link></li>
            <li><Link to="/signup" className="hover:text-red-600 transition-colors">Signup</Link></li>
          </ul>
        </motion.div>

        {/* Contact Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-red-600 pl-3">Contact Us</h3>
          <ul className="space-y-5 text-zinc-400 text-sm">
            <li className="flex items-center gap-3">
              <div className="bg-zinc-900 p-2 rounded-lg text-red-600"><Phone size={16} /></div>
              <a href="tel:+917499383674" className="hover:text-white">+91 7499383674</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-zinc-900 p-2 rounded-lg text-red-600"><Mail size={16} /></div>
              <a href="mailto:info@advotalks.com" className="hover:text-white">info@advotalks.com</a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase">
          © 2026 Copyright <span className="text-zinc-400 font-bold">BHORHARI<span className="text-red-600">ASSOCIATE</span></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;