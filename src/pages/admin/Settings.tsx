import React, { useState } from "react";
import {
  Save,
  Bell,
  Lock,
  User,
  MapPin,
  CreditCard,
  Palette,
} from "lucide-react";
import General from "../../components/Settings/General";
import Business from "../../components/Settings/Business";
import Notifications from "../../components/Settings/Notifications";
import Security from "../../components/Settings/Security";
import Billing from "../../components/Settings/Billing";
import Appearance from "../../components/Settings/Appearance";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: User },
    { id: "business", label: "Business", icon: MapPin },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  const TabIcon = tabs.find((tab) => tab.id === activeTab)?.icon || User;

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600 mt-1">
          Manage your account and application preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <TabIcon className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                {tabs.find((tab) => tab.id === activeTab)?.label} Settings
              </h3>
            </div>

            {/* General Settings */}
            {activeTab === "general" && <General />}

            {/* Business Settings */}
            {activeTab === "business" && <Business />}

            {/* Notifications Settings */}
            {activeTab === "notifications" && <Notifications />}

            {/* Security Settings */}
            {activeTab === "security" && <Security />}

            {/* Billing Settings */}
            {activeTab === "billing" && <Billing />}

            {/* Appearance Settings */}
            {activeTab === "appearance" && <Appearance />}

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
