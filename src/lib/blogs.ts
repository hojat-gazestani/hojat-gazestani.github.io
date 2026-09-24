import { remark } from "remark";
import html from "remark-html";
import { collectPosts, rewriteImageUrls, dateKey } from "./content.js";

export interface BlogMeta {
  id: string; // slug; multi-segment for notes (e.g. "machine-learning/01-.../01-what-is-ml")
  title: string;
  date?: string;
  summary?: string;
  tags: string[];
  category: string;
}

export interface BlogData extends BlogMeta {
  contentHtml: string;
}

interface Post {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  tags: string[];
  category: string;
  content: string;
}

function allPosts(): Post[] {
  return collectPosts() as Post[];
}

function toMeta(p: Post): BlogMeta {
  return {
    id: p.slug,
    title: p.title,
    date: p.date,
    summary: p.summary,
    tags: p.tags,
    category: p.category,
  };
}

function sortByDateDesc(list: BlogMeta[]): BlogMeta[] {
  return list.sort((a, b) => dateKey(b.date) - dateKey(a.date));
}

// All posts (existing + notes), newest dated posts first; undated notes after.
export function getSortedBlogsData(): BlogMeta[] {
  return sortByDateDesc(allPosts().map((p) => toMeta(p)));
}

export async function getBlogData(slug: string): Promise<BlogData | null> {
  try {
    const post = allPosts().find((p) => p.slug === slug);
    if (!post) return null;

    const processed = await remark()
      .use(html)
      .process(rewriteImageUrls(post.content));

    return { ...toMeta(post), contentHtml: processed.toString() };
  } catch (error) {
    console.error(`Error processing blog ${slug}:`, error);
    return null;
  }
}

// Slugs for the catch-all /blogs/[...slug] route.
export function getAllBlogSlugs(): { slug: string[] }[] {
  return allPosts().map((p) => ({ slug: p.slug.split("/") }));
}

export function getAllCategories(): string[] {
  return [...new Set(allPosts().map((p) => p.category))].sort();
}

export function getBlogsByCategory(category: string): BlogMeta[] {
  return sortByDateDesc(
    allPosts()
      .filter((p) => p.category === category)
      .map((p) => toMeta(p))
  );
}
