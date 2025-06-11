// import Services from "../../components/Services";
// import Testimonials from "../../components/Testimonials";
import { useState } from "react";
import { ChefHat, Star, Users } from "lucide-react";
import {
  features,
  serviceCategories,
  menuHighlights,
} from "../../data/content";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <ChefHat className="w-16 h-16 mx-auto text-[var(--color-primary)] mb-4 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Whisked
              <span className="block text-[var(--color-primary)]">Root</span>
              <span className="block text-3xl md:text-4xl font-light mt-2">
                for Every Occasion
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
              From intimate gatherings to grand celebrations, we create
              unforgettable culinary experiences that delight your guests and
              exceed your expectations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[var(--color-primary)] hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              View Our Menus
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-[var(--color-primary)] mr-2" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-gray-300">Events Catered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-[var(--color-primary)] mr-2" />
                <span className="text-4xl font-bold">15</span>
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ChefHat className="w-8 h-8 text-[var(--color-primary)] mr-2" />
                <span className="text-4xl font-bold">5★</span>
              </div>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Professional chef preparing food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-8">
                {/* <h2 className="text-sm font-semibold text-amber-600 tracking-wide uppercase mb-4">
                  About Whisked Root
                </h2> */}
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Crafting Memorable Experiences Through
                  <span className="text-[var(--color-primary)]">
                    {" "}
                    Exceptional Cuisine
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  For over 15 years, Whisked Root has been the premier choice
                  for discerning clients who demand nothing but the best. Our
                  passion for culinary excellence, combined with impeccable
                  service, has made us the trusted partner for weddings,
                  corporate events, and special celebrations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe that great food brings people together, and every
                  event is an opportunity to create lasting memories. From
                  farm-to-table ingredients to innovative presentation, we
                  elevate every occasion.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {<feature.icon />}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <h2 className="text-sm font-semibold text-amber-600 tracking-wide uppercase mb-4">
              Our Services
            </h2> */}
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored Catering Solutions for
              <span className="text-[var(--color-primary)]">
                {" "}
                Every Occasion
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide
              exceptional catering services that perfectly match your vision and
              exceed your expectations.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-16">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "text-gray-600 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {<category.icon />}
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                  {serviceCategories[activeTab].title}
                </h4>
                <p className="text-lg text-gray-600 mb-6">
                  {serviceCategories[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {serviceCategories[activeTab].features.map(
                    (feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <button className="mt-8 bg-[var(--color-primary)] hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <img
                  src={serviceCategories[activeTab].image}
                  alt={serviceCategories[activeTab].title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Menu Highlights */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Menu Highlights
              </h4>
              <p className="text-lg text-gray-600">
                A taste of what we offer - all menus are fully customizable to
                your preferences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuHighlights.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-[var(--color-primary)] mr-3">
                      {<category.icon />}
                    </div>
                    <h5 className="text-xl font-semibold text-gray-900">
                      {category.category}
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
