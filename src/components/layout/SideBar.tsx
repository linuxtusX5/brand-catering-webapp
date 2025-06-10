import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Menu,
  Users,
  BarChart3,
  UserCheck,
  Package,
  Settings,
  ChefHat,
} from "lucide-react";

const Sidebar: React.FC = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  const [activeSection, setActiveSection] = React.useState("/admin");
  const menuItems = [
    { id: "dashboard", path: "/admin", label: "Dashboard", icon: Home },
    { id: "orders", path: "orders", label: "Orders", icon: ShoppingCart },
    { id: "admin-menu", path: "admin-menu", label: "Menu", icon: Menu },
    { id: "customers", path: "customers", label: "Customers", icon: Users },
    { id: "analytics", path: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "staff", path: "staff", label: "Staff", icon: UserCheck },
    { id: "inventory", path: "inventory", label: "Inventory", icon: Package },
    { id: "settings", path: "settings", label: "Settings", icon: Settings },
  ];
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <ChefHat className="h-8 w-8 text-blue-400" />
          <h1 className="text-xl font-bold">Whisked Root</h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // const isActive = currentPath === item.path;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setActiveSection(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeSection === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
