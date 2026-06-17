import { services } from "../data/constants";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-16">
          Complete Technical Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white shadow-lg"
              >
                <div className="h-52 bg-slate-200"></div>

                <div className="p-6">
                  <Icon className="text-[#F5B400] mb-4" />

                  <h3 className="font-bold text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}