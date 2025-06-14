import React, { useState } from "react";
import { Plus, Search, Edit, Trash2, Star, DollarSign } from "lucide-react";
import { menuItems, Menu_categories } from "../../data/content";

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6  w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Menu Management</h2>
        <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add New Item</span>
        </button>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {Menu_categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>Popular</span>
                </div>
              )}
              <div className="absolute top-2 right-2 flex space-x-1">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-sm transition-all">
                  <Edit className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-sm transition-all">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-1 text-green-600 font-semibold">
                  <DollarSign className="h-4 w-4" />
                  <span>{item.price}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Serves {item.servings}
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or category filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
