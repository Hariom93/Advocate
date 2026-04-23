import React from 'react';
import { motion } from 'framer-motion';

// --- ICONS (SVG Components) ---
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.17-2.41 3.06a13 13 0 0 1-1.39 17.16c-4.4 3.32-11.66 2.38-15.68-1.57A13 13 0 0 1 3.2 4c.54 1.25 1.5 2.16 2.5 2.76A7 7 0 0 1 2 5.1c.14 2.8 1.93 5.37 4.6 6.33a7 7 0 0 1-3.2.12c.78 2.45 3.05 4.25 5.75 4.3A13 13 0 0 1 2 18.4a13 13 0 0 0 7 2.1c8.4 0 13-7 13-13 0-.2 0-.4 0-.6B22 4Z"></path></svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const teamMembers = [
  {
    id: 1,
    name: "Adv. Mahesh Bhorhari",
    role: "Senior Associate & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in Corporate Law and Criminal Defense with over 15 years of experience."
  },
  {
    id: 2,
    name: "Adv. Kamlesh Bhorhari",
    role: "Family Law Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Dedicated to resolving family disputes and matrimonial cases with empathy."
  },
  {
    id: 3,
    name: "Adv. Toshu Bhorhari",
    role: "Property & Civil Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in real estate law, property documentation, and civil litigation."
  },
  {
    id: 4,
    name: "Adv. Priya Verma",
    role: "Intellectual Property Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Helping startups and companies protect their brand identities and patents."
  }
];

const OurTeam = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 text-center mb-20"
      >
        <h3 className="text-red-600 font-bold uppercase text-sm tracking-[0.3em] mb-4">Experts Behind Us</h3>
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
          MEET OUR <span className="text-red-600">TEAM</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-red-600 mx-auto mt-6 rounded-full"
        ></motion.div>
      </motion.div>

      {/* Grid Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id} 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/50 hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)]"
          >
            {/* Image Container */}
            <div className="relative h-[380px] overflow-hidden">
              <motion.img 
                src={member.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt={member.name} 
              />
              
              {/* Social Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8 gap-4"
              >
                {[
                  { Icon: LinkedinIcon, href: "#" },
                  { Icon: TwitterIcon, href: "#" },
                  { Icon: MailIcon, href: "#" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, backgroundColor: "#fff", color: "#dc2626" }}
                    className="bg-red-600 p-3 rounded-full text-white transition-colors"
                  >
                    <social.Icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-8 text-center bg-zinc-900">
              <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                {member.role}
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;