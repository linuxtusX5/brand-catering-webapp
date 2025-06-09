export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, Exquisite Catering began with a simple mission: to
            create memorable dining experiences through exceptional food and
            service. What started as a small family business has grown into one
            of the region's premier catering companies.
          </p>
          <p className="text-gray-600">
            Our team of experienced chefs and event planners work tirelessly to
            ensure that every detail of your event is perfect, from the menu
            selection to the final presentation.
          </p>
        </div>
        <div className="md:w-1/2 bg-gray-200 rounded-lg h-64 md:h-auto"></div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-medium mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We source local ingredients and minimize waste in all our
              operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-medium mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for perfection in every dish and every event we cater.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-medium mb-2">Partnership</h3>
            <p className="text-gray-600">
              We work closely with our clients to bring their vision to life.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Executive Chef",
            "Event Director",
            "Pastry Chef",
            "Operations Manager",
          ].map((role, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="font-medium">Jane Doe</h3>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
