import { useState } from "react";
import type { ChangeEvent } from "react";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
};

type NewItem = {
  name: string;
  category: string;
  price: string;
  available: boolean;
};

export default function AdminMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Chicken Parmesan",
      category: "Main Course",
      price: 18.99,
      available: true,
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "Appetizer",
      price: 8.99,
      available: true,
    },
    {
      id: 3,
      name: "Chocolate Cake",
      category: "Dessert",
      price: 7.99,
      available: true,
    },
    {
      id: 4,
      name: "Garlic Bread",
      category: "Side",
      price: 4.99,
      available: false,
    },
    {
      id: 5,
      name: "Beef Wellington",
      category: "Main Course",
      price: 29.99,
      available: true,
    },
    {
      id: 6,
      name: "Tiramisu",
      category: "Dessert",
      price: 8.99,
      available: true,
    },
    {
      id: 7,
      name: "Bruschetta",
      category: "Appetizer",
      price: 6.99,
      available: true,
    },
    {
      id: 8,
      name: "Lobster Bisque",
      category: "Soup",
      price: 12.99,
      available: false,
    },
  ]);

  const [newItem, setNewItem] = useState<NewItem>({
    name: "",
    category: "",
    price: "",
    available: true,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.category && newItem.price) {
      const newMenuItem: MenuItem = {
        id: menuItems.length + 1,
        name: newItem.name,
        category: newItem.category,
        price: parseFloat(newItem.price),
        available: newItem.available,
      };
      setMenuItems([...menuItems, newMenuItem]);
      setNewItem({ name: "", category: "", price: "", available: true });
    }
  };

  const toggleAvailability = (id: number) => {
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Menu Management
      </h1>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
          <select
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
            className="border p-2 rounded"
          >
            <option value="">Select a category</option>
            <option value="main">Main Dish</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </select>

          <input
            type="text"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border p-2 rounded"
          />
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="available"
              checked={newItem.available}
              onChange={handleInputChange}
            />
            Available
          </label>
          <button
            onClick={handleAddItem}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Item
          </button>
        </div>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Available</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">${item.price.toFixed(2)}</td>
                <td className="border p-2">
                  <button onClick={() => toggleAvailability(item.id)}>
                    {item.available ? "✅" : "❌"}
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-600"
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
