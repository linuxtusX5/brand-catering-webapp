import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
  const [activeTab, setActiveTab] = React.useState("home");
  const [menuExpanded, setMenuExpanded] = React.useState(false);
  const tabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    // { label: "Catering", path: "/catering" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <header className="shadow-md" style={{ backgroundColor: "#F4EFE3" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Gourmet Catering Co. Logo"
              className="h-20 w-auto mb-2 text-center"
            />
            <span className="text-2xl font-bold text-[var(--color-secondary)]">
              Whisked
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 font-bold">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                // onClick={() => setActiveTab(tab.label)}
                className={`${
                  activeTab === tab.label
                    ? "text-yellow-600 font-medium"
                    : "text-gray-600 hover:text-yellow-600"
                } capitalize transition duration-300`}
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuExpanded(!menuExpanded)}
          >
            {menuExpanded ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuExpanded && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                onClick={() => {
                  setActiveTab(tab.label);
                  setMenuExpanded(false);
                }}
                className={`${
                  activeTab === tab.label
                    ? "text-yellow-600 font-medium"
                    : "text-gray-600 "
                } capitalize text-left py-2 transition duration-300`}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
