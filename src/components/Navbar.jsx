import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { Phone, Mail, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Routes configuration
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "EXPERTISE", path: "/expertise" }, 
    { name: "OUR-TEAM", path: "/OurTeam" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="w-full">
      {/* 1. Top Header Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-2 px-4 md:px-6 flex flex-wrap justify-between items-center text-[10px] md:text-sm">
        <div className="flex gap-3 md:gap-6 mx-auto md:mx-0 text-zinc-300">
          <span className="flex items-center gap-1 md:gap-2">
            <Phone size={12} className="text-red-600"/> 7499383674
          </span>
          <span className="flex items-center gap-1 md:gap-2">
            <Mail size={12} className="text-red-600"/> info@advotalks.com
          </span>
        </div>
        <div className="hidden md:flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="bg-transparent border border-red-600 hover:bg-red-600/10 px-3 py-1 rounded text-[10px] font-bold transition text-white">
                LOGIN
              </Link>
              <Link to="/signup" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-[10px] font-bold transition text-white">
                SIGNUP
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-[10px] font-bold transition text-white">
              LOGOUT
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Sticky Navbar */}
      <nav className="bg-black py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 border-b border-zinc-900 shadow-xl">
        {/* Logo Section - Click karne par Home jayega */}
        <Link to="/" className="flex items-baseline gap-1">
          <h1 className="text-xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
            BHORHARI<span className="text-red-600">ASSOCIATE</span>
          </h1>
        </Link>
        
        {/* Desktop Links - NavLink use kiya hai taaki Active state dikhe */}
        <div className="hidden lg:flex gap-8 font-bold text-[13px] tracking-widest">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `${isActive ? "text-red-600" : "text-white hover:text-red-500"} transition-colors duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side Info & Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-white">
            <div className="bg-zinc-900 p-2 rounded-full border border-zinc-800">
              <Phone size={18} className="text-red-600" />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] text-zinc-400 uppercase font-bold">Call :</p>
              <p className="font-bold text-red-600 text-sm">7499383674</p>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={28} className="text-red-600" /> : <Menu size={28} />}
          </button>
        </div>

        {/* 3. Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zinc-950 fixed top-[105px] left-0 w-full h-fit z-[100] border-b-2 border-red-600 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-8 space-y-6 font-bold text-center">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} // Click karne par menu band ho jayega
                  className={({ isActive }) => 
                    `text-lg tracking-widest transition ${isActive ? "text-red-600" : "text-white hover:text-red-600"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-widest text-white hover:text-red-600">LOGIN</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-widest text-red-600 hover:text-red-500">SIGNUP</Link>
                </>
              ) : (
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-lg tracking-widest text-red-600 hover:text-red-500 uppercase">
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;






