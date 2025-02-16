export async function generateMetadata({ params }) {
  return {
    title: "Keyword Analysis - SEO Tools",
    description:
      "Uncover high-performing keywords to boost your blog’s SEO and increase visibility on search engines.",
    keywords: [
      "Keyword Analysis",
      "SEO",
      "Keyword Research",
      "High-Performing Keywords",
      "SEO Visibility",
      "SEO Tools",
      "Content Performance",
      "pk rankspy",
      "pk rankspy Keyword Analysis",
      "pankri rankspy",
      "pankri rankspy Keyword Analysis",
    ],
  };
}

const KeywordAnalysis = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-2xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
        Keyword Analysis
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Uncover high-performing keywords to boost your blog’s SEO and increase
        visibility on search engines.
      </p>

      {/* Keyword Input Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enter Keywords</h2>
        <input
          type="text"
          placeholder="Enter keywords (comma-separated)..."
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Analyze
        </button>
      </div>

      {/* Analysis Results Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Keyword:</span> "SEO Tips"
            <br />
            <span className="font-bold">Search Volume:</span> 12,000
            <br />
            <span className="font-bold">Competition:</span> Medium
          </li>
          <li className="p-4 border rounded-lg bg-gray-100">
            <span className="font-bold">Keyword:</span> "Blog Optimization"
            <br />
            <span className="font-bold">Search Volume:</span> 8,500
            <br />
            <span className="font-bold">Competition:</span> Low
          </li>
          {/* Add more results as needed */}
        </ul>
      </div>

      {/* SEO Tips Section */}
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">SEO Tips</h2>
        <p className="text-gray-700">
          Consider targeting keywords with low to medium competition and
          moderate to high search volume for better chances of ranking on search
          engines.
        </p>
      </div>
    </div>
  );
};

export default KeywordAnalysis;
