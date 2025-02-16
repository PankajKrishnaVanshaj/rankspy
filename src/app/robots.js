export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/dashboard/*",
        },
      ],
      sitemap: "https://rankspy.pankri.com/sitemap.xml",
    };
  }
  