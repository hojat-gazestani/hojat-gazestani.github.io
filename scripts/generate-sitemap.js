const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE_URL = "https://hojat-gazestani.github.io";
const blogsDirectory = path.join(process.cwd(), "src/blogs");
const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");

const fileNames = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".md"));

const blogs = fileNames.map((fileName) => {
  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return { id, ...data };
});

const categories = [...new Set(blogs.map((blog) => blog.category))].sort();

const xmlUrls = [
  `<url>
  <loc>${BASE_URL}/</loc>
  <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.00</priority>
</url>
<url>
  <loc>${BASE_URL}/blogs/</loc>
  <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.90</priority>
</url>`,

  ...categories.map(
    (cat) => `<url>
  <loc>${BASE_URL}/blogs/category/${cat}/</loc>
  <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.70</priority>
</url>`
  ),

  ...blogs.map(
    (blog) => {
      const date = new Date(blog.date);
      const lastmod = isNaN(date.getTime())
        ? new Date().toISOString().split("T")[0]
        : date.toISOString().split("T")[0];
      return `<url>
  <loc>${BASE_URL}/blogs/${blog.id}/</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.80</priority>
</url>`;
    }
  ),
].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${xmlUrls}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Sitemap generated with ${blogs.length} blogs and ${categories.length} categories`);
