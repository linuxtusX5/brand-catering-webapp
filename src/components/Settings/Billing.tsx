export default function Billing() {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-800">
            Pro Plan - Active
          </span>
        </div>
        <p className="text-sm text-green-700 mt-1">
          $49/month • Next billing: February 16, 2025
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Payment Method
        </h4>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-5 bg-blue-600 rounded"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  •••• •••• •••• 4242
                </p>
                <p className="text-xs text-gray-500">Expires 12/26</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Update
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-4">
          Billing Address
        </h4>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Street Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
