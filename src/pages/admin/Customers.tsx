import { useState, useMemo } from "react";
import type { ChangeEvent } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
};

type SortConfig = {
  key: keyof Customer;
  direction: "ascending" | "descending";
};

export default function Customers() {
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
      orders: 5,
      totalSpent: 450.75,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-987-6543",
      orders: 3,
      totalSpent: 275.5,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-555-5555",
      orders: 8,
      totalSpent: 920.25,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "555-111-2222",
      orders: 2,
      totalSpent: 180.0,
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      phone: "555-333-4444",
      orders: 6,
      totalSpent: 650.5,
    },
    {
      id: 6,
      name: "Diana Miller",
      email: "diana@example.com",
      phone: "555-777-8888",
      orders: 1,
      totalSpent: 125.75,
    },
    {
      id: 7,
      name: "Edward Davis",
      email: "edward@example.com",
      phone: "555-999-0000",
      orders: 4,
      totalSpent: 375.25,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "id",
    direction: "ascending",
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  const requestSort = (key: keyof Customer) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedCustomers = useMemo(() => {
    const sortableCustomers = [...filteredCustomers];
    sortableCustomers.sort((a, b) => {
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];

      if (typeof valA === "number" && typeof valB === "number") {
        return sortConfig.direction === "ascending" ? valA - valB : valB - valA;
      }

      if (typeof valA === "string" && typeof valB === "string") {
        return sortConfig.direction === "ascending"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return 0;
    });
    return sortableCustomers;
  }, [filteredCustomers, sortConfig]);

  // your JSX remains unchanged below this
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <input
        type="text"
        placeholder="Search customers..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {["id", "name", "email", "phone", "orders", "totalSpent"].map(
              (key) => (
                <th
                  key={key}
                  className="py-2 px-4 border-b cursor-pointer"
                  onClick={() => requestSort(key as keyof Customer)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedCustomers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{customer.id}</td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.phone}</td>
              <td className="py-2 px-4 border-b">{customer.orders}</td>
              <td className="py-2 px-4 border-b">
                ${customer.totalSpent.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
