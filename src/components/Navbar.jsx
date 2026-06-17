import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-white text-2xl font-bold">
              Mega Skill
            </h1>
            <p className="text-xs text-gray-300">
              Technical Services LLC
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 text-white">
            <Link to="/">Home</Link>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
          </nav>

          <Link
            to="/contact"
            className="bg-yellow-500 px-6 py-3 rounded-xl font-semibold text-white"
          >
            Contact
          </Link>

          <button className="lg:hidden">
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}