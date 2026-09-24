const fs = require("fs");
const path = require("path");
const { collectPosts, dateKey } = require("../src/lib/content.js");

const BASE_URL = "https://hojat-gazestani.github.io";
const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");

const posts = collectPosts();

// Deterministic, content-derived lastmod (no build-time timestamps).
const newestTime = posts.map((p) => dateKey(p.date)).reduce((m, t) => Math.max(m, t), 0);
const isoDate = (time) =>
  time ? new Date(time).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
const isoForPost = (date) => isoDate(dateKey(date) || newestTime);

const categories = [...new Set(posts.map((p) => p.category))].sort();
const categoryTime = (cat) =>
  posts.filter((p) => p.category === cat).map((p) => dateKey(p.date)).reduce((m, t) => Math.max(m, t), 0);

const url = (loc, lastmod, changefreq, priority) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;

const xmlUrls = [
  url(`${BASE_URL}/`, isoDate(newestTime), "monthly", "1.00"),
  url(`${BASE_URL}/blogs/`, isoDate(newestTime), "weekly", "0.90"),

  ...categories.map((cat) =>
    url(`${BASE_URL}/blogs/category/${cat}/`, isoDate(categoryTime(cat)), "weekly", "0.70")
  ),

  ...posts.map((p) => url(`${BASE_URL}/blogs/${p.slug}/`, isoForPost(p.date), "yearly", "0.80")),
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
console.log(`Sitemap generated with ${posts.length} posts and ${categories.length} categories`);
