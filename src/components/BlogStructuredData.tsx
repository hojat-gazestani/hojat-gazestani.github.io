import type { BlogData } from "@/lib/blogs";

const BASE_URL = "https://hojat-gazestani.github.io";

const AUTHOR = {
  "@type": "Person",
  name: "Hojat Gazestani",
  url: `${BASE_URL}/`,
  image: `${BASE_URL}/me.png`,
  sameAs: [
    "https://github.com/hojat-gazestani",
    "https://www.linkedin.com/in/hojat-gazestani/",
    "https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA",
    "https://medium.com/@hojat_gazestani",
  ],
};

export function BlogStructuredData({ blog }: { blog: BlogData }) {
  const parsed = new Date(blog.date);
  const isoDate = Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.summary,
    image: `${BASE_URL}/me.png`,
    author: AUTHOR,
    publisher: {
      "@type": "Organization",
      name: "Hojat Gazestani",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/me.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blogs/${blog.id}/`,
    },
    url: `${BASE_URL}/blogs/${blog.id}/`,
    articleSection: blog.category,
  };

  if (isoDate) {
    jsonLd.datePublished = isoDate;
    jsonLd.dateModified = isoDate;
  }
  if (blog.tags && blog.tags.length > 0) {
    jsonLd.keywords = blog.tags.join(", ");
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
