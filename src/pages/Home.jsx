import React from 'react';
import {  MessageSquare, Heart, Users, Gavel, ShieldAlert, 
  Landmark, Scale, ReceiptIndianRupee, 
  Home, Building2, Briefcase, Quote
} from 'lucide-react';

const HeroAndServices = () => {
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
      text: "I have been seeking legal advice on immigration matters, as I am staying overseas currently. The 5 Minutes free legal consultation on AdvoTalks was absolutely helpful and the advice provided by Adv Rahul Mishra was genuine and quick.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jitendra Walia",
      role: "Chief Growth Officer, BVG India Ltd",
      text: "We have been seeking legal Advice on various Corporate & labour laws issues on pan India basis with the lawyers listed on AdvoTalks. The advisory process is quick and simple. I will definitely recommend AdvoTalks for Free Legal Guidance.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  const clients = [
    { name: "Me n Moms", logo: "https://www.advotalks.com/images/1685857826-client-1.png" },
    { name: "Next Education", logo: "https://www.advotalks.com/images/1685857838-client-2.png" },
    { name: "L&T Financial", logo: "https://media.assettype.com/freepressjournal/2023-12/2d2f861a-5053-44fe-876a-3fb2cfdf7953/L_T_Finance_Logo.jpg" },
    { name: "BillDesk", logo: "https://static.startuptalky.com/2024/03/BillDesk-Logo-Startuptalky.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Content */}
      <main className="relative min-h-screen md:h-[85vh] flex items-center overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>

        <div className="container mx-auto px-6 md:px-10 relative z-20 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm"> Justice Gets Easy</h3>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              CONNECT WITH <br/>
              <span className="bg-red-600 text-white px-2 md:px-4 inline-block mt-2">EXPERT LAWYERS</span>
            </h2>

            <ul className="space-y-2 md:space-y-3 text-zinc-300 text-sm md:text-base inline-block md:block text-left">
              <li className="flex items-center gap-3"><span className="text-red-600 font-bold">»</span> Access Verified Legal Experts</li>
              <li className="flex items-center gap-3"><span className="text-red-600 font-bold">»</span> Nationwide Reach: 200+ Cities</li>
              <li className="flex items-center gap-3"><span className="text-red-600 font-bold">»</span> Swift & Reliable Assistance</li>
              <li className="flex items-center gap-3"><span className="text-red-600 font-bold">»</span> Assured Confidentiality</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="https://wa.me/917804061695" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 px-6 md:px-8 py-3 rounded-md font-bold transition flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Chat With Lawyer
                </button>
              </a>
              <a href="tel:7804061695" className="w-full sm:w-auto">
                <button className="w-full bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 rounded-md font-bold transition shadow-lg shadow-red-600/20">
                  Talk To Lawyer
                </button>
              </a>
            </div>
          </div>

          <div className="block relative z-20">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
              alt="Lawyer" 
              className="w-full max-w-[280px] md:max-w-md mx-auto drop-shadow-2xl grayscale hover:grayscale-0 transition duration-500 rounded-2xl border-b-4 border-red-600 shadow-2xl shadow-red-600/10"
            />
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="bg-black py-16 md:py-20 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Our Top <span className="text-red-600">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-16 text-sm md:text-base leading-relaxed">
            We offer comprehensive legal solutions tailored to meet both your personal and business requirements.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-zinc-900 border border-zinc-800 p-5 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 cursor-pointer active:scale-95"
              >
                <div className="p-3 md:p-4 bg-zinc-800 rounded-full group-hover:bg-red-600/10 transition-colors">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <h3 className="text-white font-bold text-[11px] md:text-sm text-center group-hover:text-red-500 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">Testimonials</span>
            <h2 className="text-2xl md:text-4xl font-black text-white mt-4 italic">
              What Our <span className="text-red-600">Customers</span> Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((t, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-2xl relative shadow-xl">
                  <Quote size={30} className="text-red-600 mb-4 opacity-50" />
                  <p className="text-zinc-300 leading-relaxed italic text-sm md:text-lg">
                    "{t.text}"
                  </p>
                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-zinc-900 border-r border-b border-zinc-800 rotate-45"></div>
                </div>
                <div className="flex items-center gap-4 ml-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-red-600 p-1">
                    <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{t.name}</h4>
                    <p className="text-red-600 text-xs font-medium">{t.location || t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-black py-12 md:py-16 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
              OUR <span className="text-red-600">CORPORATE</span> CLIENTS
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="group bg-zinc-900/50 border border-zinc-800 p-4 md:p-6 rounded-xl flex items-center justify-center h-24 md:h-32 transition-all">
                <img src={client.logo} alt={client.name} className="max-h-10 md:max-h-16 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroAndServices;