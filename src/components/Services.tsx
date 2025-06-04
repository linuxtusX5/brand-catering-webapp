import { services } from "../data/content";

const Services = () => (
  <section className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Services;
