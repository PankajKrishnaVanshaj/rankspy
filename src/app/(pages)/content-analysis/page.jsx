export async function generateMetadata({ params }) {
  return {
    title: "Content Analysis - SEO Tools",
    description:
      "Evaluate your content’s readability, structure, and SEO-friendliness to maximize engagement and performance.",
    keywords: [
      "Content Analysis",
      "SEO",
      "Readability",
      "Content Structure",
      "Engagement",
      "SEO Tools",
      "Content Performance",
      "pk rankspy",
      "pk rankspy Content Analysis",
      "pankri rankspy",
      "pankri rankspy Content Analysis",
    ],
  };
}

const ContentAnalysis = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-2xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
        Content Analysis
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Evaluate your content’s readability, structure, and SEO-friendliness to
        maximize engagement and performance.
      </p>

      {/* Content Input Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enter Your Content</h2>
        <textarea
          placeholder="Paste your content here..."
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400 h-40"
        ></textarea>
        <button className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">
          Analyze Content
        </button>
      </div>

      {/* Readability Analysis Section */}
      <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Readability Analysis</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Reading Level:</span> 8th Grade
          </li>
          <li className="mb-2">
            <span className="font-bold">Sentence Length:</span> Average of 12
            words per sentence
          </li>
          <li>
            <span className="font-bold">Passive Voice:</span> 15% of sentences
            use passive voice
          </li>
        </ul>
      </div>

      {/* SEO Suggestions Section */}
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">SEO Suggestions</h2>
        <p className="text-gray-700 mb-2">
          Consider the following recommendations to improve SEO:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Include the keyword "SEO tips" at least 3 times in the content.
          </li>
          <li>Use H2 and H3 headings for better content structure.</li>
          <li>Add a meta description that summarizes your content.</li>
          <li>Include alt text for all images.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentAnalysis;
