import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Fisher',
    role: 'Infrastructure Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'The engineering solutions provided were seamless. Their technical expertise completely optimized our facilities management workflow within weeks.',
  },
  {
    id: 2,
    name: 'Dominic Taylor',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Incredibly responsive and professional. They handled our complex industrial technical maintenance without a single hour of operational downtime.',
  },
  {
    id: 3,
    name: 'Brandon Daniels',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Highly recommended for any commercial technical framework setups. Their team brought elite problem-solving skills directly to our job site.',
  },
];

export default function TestimonialsAlternative() {
  return (
    <section className="bg-slate-950 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase px-3 py-1 bg-yellow-500/10 rounded-full">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Trusted by Industry Experts
          </h2>
          <p className="text-gray-400 text-base">
            See how Megaskill Technical Services empowers businesses with premium engineering, support, and structural solutions.
          </p>
        </div>

        {/* Asymmetric Flex/Grid Stack Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {testimonialsData.map((item, idx) => (
            <div 
              key={item.id} 
              className={`bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 shadow-xl
                ${idx === 1 ? 'lg:translate-y-6 lg:bg-gradient-to-b lg:from-slate-900 lg:to-slate-950' : ''}`}
            >
              {/* Giant Stylized Quote Mark background */}
              <span className="absolute top-2 right-6 text-slate-800 text-8xl font-serif font-black select-none pointer-events-none opacity-40">
                ”
              </span>

              {/* Star Rating decoration */}
              <div className="flex gap-1 mb-4 text-yellow-500 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Testimonial Review Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10 font-medium italic">
                "{item.text}"
              </p>

              {/* User Bio Footer Divider line */}
              <div className="w-full h-[1px] bg-slate-800 mb-6"></div>

              {/* User Meta Information */}
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-xl object-cover border-2 border-slate-700 bg-slate-800 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}