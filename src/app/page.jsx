"use client";

import Link from "next/link";
import { useRef } from "react";

const Home = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto text-center py-16 md:py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your Blog SEO with{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            PK RankSpy
          </span>
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Take control of your blog’s SEO with PK RankSpy, the ultimate tool for
          bloggers and content creators. Analyze high-performing keywords,
          implement targeted SEO strategies, and effortlessly boost your
          rankings to drive more organic traffic and grow your audience.
        </p>
        <button
          onClick={scrollToFeatures}
          className="mt-8 md:mt-10 px-8 md:px-10 py-3 md:py-4 bg-text-gradient text-white font-semibold text-lg rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="bg-white py-12 md:py-20"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Key Features
          </h2>
          <p className="mb-8 md:mb-12 text-gray-700 text-base md:text-lg">
            Unlock your blog’s potential with our powerful SEO tools:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Keyword Analysis",
                description:
                  "Uncover high-performing keywords to boost your blog’s SEO and increase visibility on search engines.",
                slug: "keyword-analysis",
              },
              {
                title: "Content Analysis",
                description:
                  "Evaluate your content’s readability, structure, and SEO-friendliness to maximize engagement and performance.",
                slug: "content-analysis",
              },
              {
                title: "SEO Analyzer",
                description:
                  "Gain actionable insights into your blog’s SEO and receive optimization recommendations for better rankings.",
                slug: "seo-analyzer",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-secondary shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                  <Link href={`${feature.slug}`}>{feature.title}</Link>
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto py-16 md:py-24 px-6 text-center bg-gradient-to-b from-gray-100 to-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-gray-900">
          Why Choose PK RankSpy?
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          PK RankSpy is built for content creators of all skill levels—whether
          you’re just starting out or already have a seasoned SEO strategy. Our
          tool offers in-depth keyword insights, actionable recommendations, and
          easy-to-use analytics to help you stay ahead of the competition. With
          PK RankSpy, you can unlock new opportunities, increase your blog’s
          visibility, and connect with a larger audience.
        </p>
      </section>
    </div>
  );
};

export default Home;
