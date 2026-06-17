import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to check active route styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 left-0 w-full z-50 border-b border-slate-800 ${
      isOpen ? "bg-slate-950" : "bg-slate-900/80 backdrop-blur-md"
    }`}>
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
            <Link 
              to="/about" 
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isActive("/about") ? "text-amber-500" : "text-slate-300 hover:text-white"
              }`}
            >
              About
            </Link>
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

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-slate-950 border-r border-slate-800 px-6 py-8 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="mb-4">
            <h1 className="text-white text-xl font-black tracking-tight leading-none">
              MEGA<span className="text-amber-500">SKILL</span>
            </h1>
          </div>
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`text-base font-semibold py-2 border-b border-slate-800/50 ${
              isActive("/") ? "text-amber-500" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className={`text-base font-semibold py-2 border-b border-slate-800/50 ${
              isActive("/about") ? "text-amber-500" : "text-slate-300"
            }`}
          >
            About
          </Link>
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