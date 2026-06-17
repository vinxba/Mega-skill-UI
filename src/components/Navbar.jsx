import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to check active route styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Section */}
          <Link to="/" className="flex flex-col group select-none">
            <h1 className="text-white text-xl md:text-2xl font-black tracking-tight leading-none group-hover:text-amber-500 transition-colors duration-200">
              MEGA<span className="text-amber-500 group-hover:text-white transition-colors duration-200">SKILL</span>
            </h1>
            <p className="text-[10px] md:text-xs text-slate-400 font-medium tracking-widest uppercase mt-0.5">
              Technical Services LLC
            </p>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isActive("/") ? "text-amber-500" : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-sm font-semibold tracking-wide text-slate-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="/#services" 
              className="text-sm font-semibold tracking-wide text-slate-300 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
          </nav>

          {/* Action Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger/Close Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 px-6 py-6 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`text-base font-semibold py-2 border-b border-slate-800/50 ${
              isActive("/") ? "text-amber-500" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <a 
            href="/#about" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50"
          >
            About
          </a>
          <a 
            href="/#services" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50"
          >
            Services
          </a>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-sm uppercase tracking-wide mt-2"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}