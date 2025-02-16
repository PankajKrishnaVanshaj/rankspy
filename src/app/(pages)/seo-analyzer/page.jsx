export async function generateMetadata({ params }) {
  return {
    title: "SEO Analyzer - SEO Tools",
    description:
      "Gain actionable insights into your blog’s SEO and receive optimization recommendations for better rankings.",
    keywords: [
      "SEO Analyzer",
      "SEO Tools",
      "SEO Insights",
      "SEO Optimization",
      "Search Engine Rankings",
      "Blog SEO",
      "pk rankspy",
      "pk rankspy SEO Analyzer",
      "pankri rankspy",
      "pankri rankspy SEO Analyzer",
    ],
  };
}

const SEOAnalyzer = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-2xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
        SEO Analyzer
      </h1>
      <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
        Gain actionable insights into your blog’s SEO and receive optimization
        recommendations for better rankings.
      </p>

      {/* URL Input Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enter URL to Analyze</h2>
        <input
          type="text"
          placeholder="Enter your blog URL..."
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Analyze
        </button>
      </div>

      {/* SEO Results Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">SEO Results</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Title Length:</span> 60 characters
            (Optimal)
          </li>
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Meta Description:</span> Missing (Needs
            improvement)
          </li>
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Image Alt Text:</span> 2 images missing
            alt text
          </li>
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Keyword Density:</span> 2.5% (Good)
          </li>
        </ul>
      </div>

      {/* Optimization Tips Section */}
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Optimization Tips</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Ensure all images have descriptive alt text for better accessibility
            and SEO.
          </li>
          <li>Add a meta description that includes your target keywords.</li>
          <li>
            Use internal and external links to improve link-building strategies.
          </li>
          <li>Include structured data for rich results on search engines.</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOAnalyzer;
