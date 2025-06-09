import React from "react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
  eventDate: string;
  guestCount: string;
};
export default function Contact() {
  const [contactForm, setContactForm] = React.useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
    eventDate: "",
    guestCount: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      eventDate: "",
      guestCount: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Ready to plan your next event? Fill out the form and our team will
            get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactForm.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-gray-700 mb-1">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={contactForm.eventDate}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="guestCount" className="block text-gray-700 mb-1">
                Number of Guests
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={contactForm.guestCount}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Address</h3>
              <p className="text-gray-600">123 Culinary Avenue</p>
              <p className="text-gray-600">Foodville, CA 90210</p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Contact</h3>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Email: info@exquisitecatering.com</p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>

            <div className="pt-4">
              <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
