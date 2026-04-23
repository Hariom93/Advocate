import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.status === 'success') {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to connect to the server' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h3 className="text-red-600 font-bold uppercase text-xs tracking-[0.4em] mb-4">Contact Gateway</h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Get In <span className="text-red-600 italic">Touch</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Have questions or need legal assistance? We're here to help. Reach out to us and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="space-y-10">
            <h3 className="text-3xl font-black uppercase tracking-tight text-white">Office <span className="text-red-600">Information</span></h3>
            
            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", detail: "+91 7499383674", sub: "Mon-Fri (9am - 6pm)" },
                { icon: Mail, title: "Email", detail: "info@advotalks.com", sub: "24/7 Support" },
                { icon: MapPin, title: "Office", detail: "Indore, Madhya Pradesh, India", sub: "Main Branch" }
              ].map((info, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xl">
                    <info.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{info.title}</h4>
                    <p className="text-xl font-bold text-zinc-200 mt-1">{info.detail}</p>
                    <p className="text-sm text-zinc-600 font-medium">{info.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-red-600/5 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-xl mb-6 text-sm font-bold flex items-center gap-3 ${
                      status.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/50 text-green-500' 
                      : 'bg-red-500/10 border border-red-500/50 text-red-500'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-black tracking-[0.2em] text-white ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="mt-1 w-full bg-black/50 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-700"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-black tracking-[0.2em] text-white ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@email.com"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl mt-1 p-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-700"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-black tracking-[0.2em] text-white ml-1">Your Message</label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Briefly explain your case..."
                    className="mt-1 w-full bg-black/50 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none placeholder:text-zinc-700"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 px-4 rounded-2xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                >
                  {loading ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;