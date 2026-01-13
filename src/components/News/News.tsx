const News = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold text-gray-900">Latest News</h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          Stay updated with the latest news and updates from our company.
        </p>
        {/* Add news articles here */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              News Article 1
            </h3>
            <p className="mt-2 text-gray-600">
              Summary of the first news article.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              News Article 2
            </h3>
            <p className="mt-2 text-gray-600">
              Summary of the second news article.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900">
              News Article 3
            </h3>
            <p className="mt-2 text-gray-600">
              Summary of the third news article.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
