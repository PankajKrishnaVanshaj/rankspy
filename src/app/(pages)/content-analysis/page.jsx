"use client";
import { useState, useCallback } from "react";

const ContentAnalysis = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeContent = useCallback(async () => {
    if (!content.trim()) {
      alert("Please paste some content to analyze.");
      return;
    }

    setLoading(true);

    try {
      // Simulate the analysis process (Replace this with real logic when ready)
      alert("Coming soon! Stay tuned for updates.");
    } catch (error) {
      console.error("Error analyzing content:", error);
    } finally {
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="p-4 sm:p-6 lg:p-12 min-h-screen">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
        Content Analysis
      </h1>
      <p className="text-gray-700 text-base md:text-lg mb-8">
        Evaluate your content’s readability, structure, and SEO-friendliness to
        maximize engagement and performance.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        {/* Content Input Section */}
        <div className="p-6 col-span-1 lg:col-span-4 bg-white shadow-md shadow-secondary rounded-md">
          <h2 className="text-lg font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Paste Content
          </h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
            placeholder="Paste your content here..."
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="mt-4 w-full px-6 py-2 bg-text-gradient text-white font-semibold rounded-md transition border border-secondary hover:scale-105 shadow-md shadow-primary"
            onClick={analyzeContent}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Content"}
          </button>
        </div>

        {/* Readability Analysis Section */}
        <div className="p-6 col-span-1 lg:col-span-2 bg-white shadow-md shadow-secondary rounded-md">
          <h2 className="text-lg font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Content Classification
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-800">AI-generated</li>
            <li className="text-gray-800">AI-generated & AI-refined</li>
            <li className="text-gray-800">Human-written & AI-refined</li>
            <li className="text-gray-800">Human-written</li>
            <li className="text-gray-800">Plagiarized Content</li>
            <li className="text-gray-800">Unique Content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentAnalysis;
