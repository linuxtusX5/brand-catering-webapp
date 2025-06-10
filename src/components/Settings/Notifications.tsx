export default function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Email Notifications
        </h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              New order notifications
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Order status updates</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Daily summary reports</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Low inventory alerts</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Push Notifications
        </h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Urgent order updates</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              Staff schedule changes
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
