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

// Deterministic, content-derived lastmod values (no build-time timestamps),
// so the generated file is stable across builds and consistent in CI.
const asTime = (value) => {
  const t = new Date(value).getTime();
  return Number.isNaN(t) ? null : t;
};
const isoDate = (time) =>
  time ? new Date(time).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
const newestTime = (dates) =>
  dates.map(asTime).filter(Boolean).reduce((max, t) => Math.max(max, t), 0);

const newestBlogTime = newestTime(blogs.map((blog) => blog.date));
const categories = [...new Set(blogs.map((blog) => blog.category))].sort();

const url = (loc, lastmod, changefreq, priority) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;

const xmlUrls = [
  url(`${BASE_URL}/`, isoDate(newestBlogTime), "monthly", "1.00"),
  url(`${BASE_URL}/blogs/`, isoDate(newestBlogTime), "weekly", "0.90"),

  ...categories.map((cat) => {
    const catTime = newestTime(
      blogs.filter((blog) => blog.category === cat).map((blog) => blog.date)
    );
    return url(`${BASE_URL}/blogs/category/${cat}/`, isoDate(catTime), "weekly", "0.70");
  }),

  ...blogs.map((blog) =>
    url(`${BASE_URL}/blogs/${blog.id}/`, isoDate(asTime(blog.date)), "yearly", "0.80")
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
