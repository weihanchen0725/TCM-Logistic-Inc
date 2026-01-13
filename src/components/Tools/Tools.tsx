const Tools = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Tools</h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          Explore the innovative tools we use to enhance our logistics services.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Tracking System
            </h3>
            <p className="mt-2 text-gray-600">
              Advanced tracking system to monitor your shipments in real-time.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Inventory Management
            </h3>
            <p className="mt-2 text-gray-600">
              Efficient inventory management tools to keep your stock organized.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Route Optimization
            </h3>
            <p className="mt-2 text-gray-600">
              Smart route optimization tools to ensure timely deliveries.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tools;
