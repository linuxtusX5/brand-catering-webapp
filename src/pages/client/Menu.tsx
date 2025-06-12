import { menuItems } from "../../data/content"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-40">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We use only the freshest ingredients to create memorable dining
        experiences. Our menu can be customized to meet your specific needs and
        preferences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-medium mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-yellow-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Need a custom menu for your event?</p>
        <Link
          to="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
