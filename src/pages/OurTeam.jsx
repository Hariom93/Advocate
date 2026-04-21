import React from 'react';

// --- ICONS (SVG Components) - No imports needed! ---
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
  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
          MEET OUR <span className="text-red-600">TEAM</span>
        </h1>
        <div className="h-1.5 w-20 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-500 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={member.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                alt={member.name} 
              />
              
              {/* Overlay with Custom SVG Icons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                <a href="#" className="bg-red-600 p-2.5 rounded-full text-white hover:bg-white hover:text-red-600 transition-all transform hover:-translate-y-1">
                  <LinkedinIcon />
                </a>
                <a href="#" className="bg-red-600 p-2.5 rounded-full text-white hover:bg-white hover:text-red-600 transition-all transform hover:-translate-y-1">
                  <TwitterIcon />
                </a>
                <a href="#" className="bg-red-600 p-2.5 rounded-full text-white hover:bg-white hover:text-red-600 transition-all transform hover:-translate-y-1">
                  <MailIcon />
                </a>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{member.name}</h3>
              <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;