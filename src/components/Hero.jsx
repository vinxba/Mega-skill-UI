import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-5rem)] bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://5.imimg.com/data5/SELLER/Default/2024/7/431904280/RU/XD/LS/46103444/plumbing-repair-services.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#081B3A]/75"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="text-white max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#F5B400] font-bold tracking-widest block uppercase text-sm md:text-base"
          >
            PROFESSIONAL TECHNICAL SERVICES
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-extrabold mt-4 leading-tight"
          >
            We Deliver
            <br />
            Reliable MEP Solutions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            HVAC • Plumbing • Electrical • Interior Fit-Out •
            Facility Maintenance
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="bg-amber-500 hover:bg-amber-600 transition-colors px-8 py-4 text-slate-950 font-bold uppercase tracking-wide shadow-lg">
              OUR SERVICES
            </button>

            <Link
              to="/contact"
              className="border-2 border-white px-8 py-4 text-white font-bold inline-flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}