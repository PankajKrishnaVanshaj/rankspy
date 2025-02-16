import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PK RankSpy | Ultimate SEO Solution for Bloggers & Content Creators",
  description:
    "Boost your blog's rankings with PK RankSpy, the ultimate tool for bloggers and content creators. Analyze high-performing keywords, optimize content, and grow your audience effortlessly.",
  keywords: [
    "SEO tools",
    "blog SEO",
    "keyword analysis",
    "content optimization",
    "SEO strategy",
    "PK RankSpy",
    "pankri RankSpy",
    "RankSpy pk",
    "RankSpy pankri",
    "SEO analytics",
    "content marketing",
    "blog traffic growth",
    "SEO insights",
    "ranking tools",
    "SEO tips for bloggers",
    "website traffic analytics",
    "on-page SEO",
    "SEO competitor analysis",
    "organic traffic growth",
    "backlink analysis",
    "SEO ranking tracker",
    "search engine ranking",
    "content-driven SEO",
  ],
  author: "PanKri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
