import React from "react";
import { contactInfo } from "../../data/content";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 pt-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Plan Your Perfect
            <span className="text-[var(--color-primary)]"> Event Together</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create an unforgettable culinary experience? Contact us
            today for a free consultation and custom quote tailored to your
            event needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private-party">Private Party</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                    placeholder="50"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your vision, dietary requirements, or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Quote Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h4>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-[var(--color-primary)] mr-4 mt-1">
                      {<item.icon />}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-gray-700 font-medium mb-1">
                        {item.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="mb-6 opacity-90">
                We offer complimentary consultations and tastings for events
                with 50+ guests. Let's discuss how we can make your event
                extraordinary.
              </p>
              <button className="bg-white text-[var(--color-primary)] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Tasting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
