import React, { useState } from 'react';
import { services } from '../data/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceRequired: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Inquiry from Megaskill Contact Form*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Email:* ${encodeURIComponent(formData.emailAddress)}%0A*Phone:* ${encodeURIComponent(formData.phoneNumber)}%0A*Service:* ${encodeURIComponent(formData.serviceRequired || 'Not specified')}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappURL = `https://wa.me/971569573155?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      serviceRequired: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="bg-gray-50 min-h-screen">
      {/* Top Banner Section based on contact.png */}
      <section className="relative bg-slate-900 text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Abstract structural layout background element */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Let's Build the Future <br />of Your Space
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl font-light leading-relaxed">
            Excellence in MEP technical services and luxury interior design across the UAE.
          </p>
        </div>
      </section>

      {/* Main Content Form & Details Section Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact Form Container */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:col-span-8">
          <h2 className="text-gray-500 font-medium text-sm mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition duration-200"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Email Address</label>
                <input 
                  type="email" 
                  name="emailAddress"
                  placeholder="john@example.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone Number */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Phone Number</label>
                <input 
                  type="text" 
                  name="phoneNumber"
                  placeholder="+971 50 000 0000"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition duration-200"
                />
              </div>

              {/* Service Required */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Service Required</label>
                <select 
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-amber-500 focus:bg-white transition duration-200 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_auto] bg-[right_16px_center] bg-no-repeat"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-semibold text-gray-600">Message</label>
              <textarea 
                name="message"
                rows="5"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition duration-200 resize-none"
              />
            </div>

            {/* Submit Button in Theme Gold */}
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs rounded-lg shadow-sm hover:shadow transition duration-200"
            >
              Send Inquiry
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l92-92M12 5l9 9M21 3L3 11l8.5 2.5L14 21z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details Card Info */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-amber-500 text-xs font-bold tracking-wide uppercase mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              {/* WhatsApp Info */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.768.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.921-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.088 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.123-.272-.198-.57-.347z" />
                    <path d="M12.004 2.001C6.477 2.001 2 6.478 2 12.005c0 2.122.657 4.088 1.794 5.747L2 22l4.438-1.161A9.97 9.97 0 0012.004 22c5.526 0 10.003-4.477 10.003-9.995S17.53 2.001 12.004 2.001zm0 18.23c-1.781 0-3.44-.486-4.88-1.329l-.35-.205-2.632.688.7-2.565-.228-.37A8.002 8.002 0 013.998 12.01c0-4.417 3.587-8.006 8.005-8.006 4.417 0 8.005 3.589 8.005 8.006 0 4.418-3.588 8.005-8.005 8.005z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/971569573155"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-gray-800 mt-0.5 block"
                  >
                    +971 56 957 3155
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Chat with us on WhatsApp</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Our Location</p>
                  <p className="text-sm font-bold text-gray-800 mt-0.5 leading-relaxed uppercase">
                    MEGA SKILL TECHNICAL SERVICES L.L.C<br />
                    HORIZONE BUILDING - Office No: 602-14<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Block Divider line */}
          <div className="w-full h-[1px] bg-gray-100 pt-2" />

          {/* Footer Social Connect Icons */}
          <div>
            <p className="text-xs text-gray-400 font-medium mb-3">Connect with us</p>
            <div className="flex gap-2.5">
              {['globe', 'users', 'camera'].map((icon, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-slate-700 hover:bg-amber-500 text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
                >
                  {/* Miniature dots representing standard image icon templates */}
                  <span className="w-2 h-2 rounded-full bg-white opacity-90" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}