import React from 'react';
import { 
  Phone, Mail, MapPin 
} from "lucide-react";
// Hum social icons ke liye react-icons use kar rahe hain
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-1">
            <h2 className="text-2xl font-black tracking-tighter">ADVO<span className="text-red-600">TALKS</span></h2>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Leading legal platform providing expert consultation and nationwide legal assistance. Justice gets easy with our verified experts.
          </p>
          
          {/* Social Icons - Using React Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="bg-zinc-900 p-2.5 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-zinc-900 p-2.5 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-zinc-900 p-2.5 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-zinc-900 p-2.5 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Browse Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">Browse</h3>
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li className="hover:text-red-600 cursor-pointer transition-colors flex items-center gap-2">Home</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors flex items-center gap-2">About Us</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors flex items-center gap-2">Events</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors flex items-center gap-2">Law Firms</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="md:pt-12">
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li className="hover:text-red-600 cursor-pointer transition-colors">Blogs</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Support</li>
          </ul>
        </div>

        {/* Company & Contact Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">Contact Us</h3>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-red-600" /> +91 7499383674
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-red-600" /> info@advotalks.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-red-600 mt-1" /> 
              <span>Indore, Madhya Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © 2026 Copyright <span className="text-zinc-400 font-bold">ADVO<span className="text-red-600">TALKS</span></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;