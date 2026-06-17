import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}