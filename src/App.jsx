import React from 'react';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar added at the top of the layout */}
      <Navbar /> 
      <Hero />
       <Statistics />
      <Services />
      <WorkProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}