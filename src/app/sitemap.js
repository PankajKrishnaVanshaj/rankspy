export default function sitemap() {
  const baseUrl = "https://rankspy.pankri.com";

  const pages = ["/keyword-analysis", "/content-analysis", "/seo-analyzer"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
}
