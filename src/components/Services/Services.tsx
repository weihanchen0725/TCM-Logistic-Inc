const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          We offer a wide range of logistics solutions to meet your business
          needs.
        </p>
        {/* Add service details here */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Freight Shipping
            </h3>
            <p className="mt-2 text-gray-600">
              Reliable and efficient freight shipping services for all types of
              cargo.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">Warehousing</h3>
            <p className="mt-2 text-gray-600">
              Secure and strategically located warehouses to store your goods.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Supply Chain Management
            </h3>
            <p className="mt-2 text-gray-600">
              Comprehensive supply chain solutions to optimize your logistics
              operations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
