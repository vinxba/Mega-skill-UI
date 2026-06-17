import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://5.imimg.com/data5/SELLER/Default/2024/7/431904280/RU/XD/LS/46103444/plumbing-repair-services.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#081B3A]/75"></div>

      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="text-white max-w-3xl">
          <span className="text-[#F5B400]">
            PROFESSIONAL TECHNICAL SERVICES
          </span>

          <h1 className="text-7xl font-bold mt-4">
            We Deliver
            <br />
            Reliable MEP Solutions
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            HVAC • Plumbing • Electrical • Interior Fit-Out •
            Facility Maintenance
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#F5B400] px-8 py-4 text-black font-bold">
              OUR SERVICES
            </button>

            <Link
              to="/contact"
              className="border border-white px-8 py-4 text-white inline-flex items-center justify-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}