import React from "react";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { metrics, revenueData, topItems } from "../../data/content";

const Analytics: React.FC = () => {
  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          const trendColor =
            metric.trend === "up" ? "text-green-600" : "text-red-600";
          const bgColor = metric.trend === "up" ? "bg-green-50" : "bg-red-50";

          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {metric.value}
                  </p>
                  <div
                    className={`flex items-center space-x-1 mt-2 ${trendColor}`}
                  >
                    <TrendIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">{metric.change}</span>
                  </div>
                </div>
                <div className={`${bgColor} p-3 rounded-lg`}>
                  <Icon
                    className={`h-6 w-6 ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Revenue Trend
        </h3>
        <div className="h-80">
          <div className="flex items-end justify-between h-64 space-x-2">
            {revenueData.map((data, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center space-y-2"
              >
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <div
                    className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      ${(data.revenue / 1000).toFixed(1)}k
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Items */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Items
          </h3>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${item.revenue}</p>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(item.revenue / 2100) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Order Status Distribution
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Completed
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "68%" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  In Progress
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">18%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "18%" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Pending
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "10%" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700">
                  Cancelled
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">4%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "4%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
