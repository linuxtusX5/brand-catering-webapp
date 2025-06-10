export default function Business() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Name
        </label>
        <input
          type="text"
          defaultValue="Catering Pro"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Address
        </label>
        <input
          type="text"
          defaultValue="123 Culinary Street, Food City, FC 12345"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Phone
          </label>
          <input
            type="tel"
            defaultValue="+1 (555) 987-6543"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Email
          </label>
          <input
            type="email"
            defaultValue="info@cateringpro.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Hours
        </label>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <span className="w-20 text-sm text-gray-600">Monday</span>
            <input
              type="time"
              defaultValue="08:00"
              className="px-3 py-2 border border-gray-300 rounded-lg"
            />
            <span className="text-gray-500">to</span>
            <input
              type="time"
              defaultValue="18:00"
              className="px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-20 text-sm text-gray-600">Tuesday</span>
            <input
              type="time"
              defaultValue="08:00"
              className="px-3 py-2 border border-gray-300 rounded-lg"
            />
            <span className="text-gray-500">to</span>
            <input
              type="time"
              defaultValue="18:00"
              className="px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
