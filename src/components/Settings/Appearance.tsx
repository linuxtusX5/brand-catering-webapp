export default function Appearance() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">Theme</h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="theme"
              defaultChecked
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Light</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="theme"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Dark</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="theme"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">System</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">Language</h4>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Display Options
        </h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Show sidebar labels</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Compact view</span>
          </label>
        </div>
      </div>
    </div>
  );
}
