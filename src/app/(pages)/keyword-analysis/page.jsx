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
      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Enter Keywords
        </h2>
        <div className="space-y-4 sm:flex sm:space-x-6 sm:space-y-0 sm:items-center">
          <input
            type="text"
            placeholder="Enter keywords (comma-separated)..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-text-gradient border border-primary text-white rounded-lg font-semibold transition-all hover:scale-105 duration-300">
            Analyze
          </button>
        </div>
      </section>

      {/* Analysis Results Section */}
      <section className="bg-white rounded-xl shadow-xl p-8 mb-12 hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Analysis Results
        </h2>
        <div className="space-y-6">
          <div className="p-6 border border-gray-300 rounded-xl shadow-sm bg-gray-50 hover:shadow-lg transition-all">
            <h3 className="font-bold text-xl text-gray-800">
              Keyword: "SEO Tips"
            </h3>
            <p className="text-gray-600">
              <strong>Search Volume:</strong> 12,000 |{" "}
              <strong>Competition:</strong> Medium | <strong>Trend:</strong>{" "}
              Stable | <strong>CPC:</strong> $2.50 |{" "}
              <strong>SEO Difficulty:</strong> High | <strong>CTR:</strong> 3.0%
              | <strong>Organic Search Position:</strong> 5 |{" "}
              <strong>Paid Search Position:</strong> 2 |{" "}
              <strong>Relevance to Content:</strong> High
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-xl shadow-sm bg-gray-50 hover:shadow-lg transition-all">
            <h3 className="font-bold text-xl text-gray-800">
              Keyword: "Blog Optimization"
            </h3>
            <p className="text-gray-600">
              <strong>Search Volume:</strong> 8,500 |{" "}
              <strong>Competition:</strong> Low | <strong>Trend:</strong>{" "}
              Increasing | <strong>CPC:</strong> $1.25 |{" "}
              <strong>SEO Difficulty:</strong> Medium | <strong>CTR:</strong>{" "}
              2.5% | <strong>Organic Search Position:</strong> 12 |{" "}
              <strong>Paid Search Position:</strong> 4 |{" "}
              <strong>Relevance to Content:</strong> Medium
            </p>
          </div>
          {/* Add more results as needed */}
        </div>
      </section>

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
