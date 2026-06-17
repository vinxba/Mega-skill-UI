import {
  PhoneCall,
  SearchCheck,
  Users,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Book Online Or With Phone",
    description:
      "Contact our team through phone, email, or online form to discuss your project requirements.",
    icon: PhoneCall,
  },
  {
    id: "02",
    title: "We Identify The Problem",
    description:
      "Our experts inspect the site and identify the best technical solution for your needs.",
    icon: SearchCheck,
  },
  {
    id: "03",
    title: "Our Professionals Arrive",
    description:
      "Certified technicians arrive on-site with the required tools and equipment.",
    icon: Users,
  },
  {
    id: "04",
    title: "We Solve Your Problem",
    description:
      "We complete the work efficiently, ensuring quality, safety, and customer satisfaction.",
    icon: CheckCircle,
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-[#08264B] py-24 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
            Our Operation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            That's How We Work
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="text-center group"
              >
                {/* Circle Icon */}
                <div className="relative flex justify-center mb-8">
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-yellow-400 flex items-center justify-center group-hover:bg-yellow-400/10 transition">
                    <Icon className="w-10 h-10 text-yellow-400" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-0 right-[35%] translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400 text-[#08264B] font-bold flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}