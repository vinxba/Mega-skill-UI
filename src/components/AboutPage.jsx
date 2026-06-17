import React from 'react';
import { ShieldCheck, HardHat, Wrench, Trophy } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Hero Banner */}
      <section className="relative bg-slate-900 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase px-3 py-1 bg-amber-500/10 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Engineering Reliability. <br />Delivering Excellence.
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Megaskill Technical Services LLC is a premier provider of technical installations, modern engineering infrastructure, and high-end asset management solutions.
          </p>
        </div>
      </section>

      {/* 2. Core Company Introduction Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Dynamic Image Stack */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
              alt="MEP Engineering Work" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent Mini Card floating overlay */}
          <div className="absolute -bottom-6 -right-2 md:right-10 bg-slate-900 text-white p-6 rounded-xl shadow-2xl hidden sm:block border border-slate-800 max-w-xs">
            <p className="text-amber-500 text-2xl font-black">100%</p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
              Regulatory Compliance & Premium Quality Assurance
            </p>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-amber-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Our Identity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Partner Committed to Your Infrastructure Goals
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Founded on the pillars of exceptional skill, cutting-edge methodology, and regulatory safety, Megaskill Technical Services LLC serves standard-setting commercial environments and high-profile residential domains. We seamlessly coordinate multi-disciplinary crews to solve intricate building system problems.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            From mechanical, electrical, and plumbing (MEP) layouts to critical preventive industrial technical maintenance, our operations ensure minimized downtime and optimized energy efficiency across your entire physical space.
          </p>
        </div>
      </section>

      {/* 3. Stat Highlights Bar */}
      <section className="bg-slate-50 border-y border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '24/7', label: 'Technical Support' },
            { value: 'MEP', label: 'Expert Standards' },
            { value: 'Zero', label: 'Downtime Policy' },
            { value: '100%', label: 'Project Transparency' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Pillars / Core Services Competency */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Megaskill?
          </h2>
          <p className="text-gray-500 text-sm">
            We operate at a higher standard, backing up every contractual engagement with specialized tooling and expert coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <HardHat className="w-6 h-6" />,
              title: "Certified Teams",
              desc: "Every specialized technician and on-site engineer holds rigorous structural safety certifications."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "MEP Precision",
              desc: "Deep knowledge base in intricate Mechanical, Electrical, and Plumbing distribution architecture."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Safety Verified",
              desc: "Strict adherence to safety codes and local regulatory infrastructure provisions."
            },
            {
              icon: <Trophy className="w-6 h-6" />,
              title: "Premium Finish",
              desc: "Combining technical accuracy with luxury structural or interior fit-outs flawlessly."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission & Vision Statement Blocks */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-4 p-8 bg-slate-800/40 rounded-2xl border border-slate-800">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block">Our Mission</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">To Empower Structural Lifespans</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our ultimate objective is to safely provide high-tier engineering diagnostics and preventive operational technical capabilities to corporate businesses and premium asset holding properties, continuously improving efficiency.
            </p>
          </div>
          {/* Vision */}
          <div className="space-y-4 p-8 bg-slate-800/40 rounded-2xl border border-slate-800">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block">Our Vision</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">The Benchmarks of Technical Quality</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We aim to establish Megaskill Technical Services LLC as the industry standard-bearer for elite, fully digitalized structural maintenance solutions, recognized across the region for immaculate precision and absolute integrity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}