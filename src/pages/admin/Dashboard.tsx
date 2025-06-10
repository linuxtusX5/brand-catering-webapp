import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { stats, recentOrders, upcomingEvents } from "../../data/content";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Revenue Overview
        </h3>
        <div className="h-64 flex items-end space-x-2">
          {[65, 45, 78, 52, 87, 66, 91, 73, 58, 84, 69, 92].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              ></div>
            )
          )}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.event}</p>
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Schedule
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-md text-sm">
                  <Clock className="h-3 w-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.client}</p>
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
