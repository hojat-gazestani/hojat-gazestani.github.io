import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'src/blogs');

export interface BlogMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category: string;
  readTime?: string;
}

export interface BlogData extends BlogMeta {
  contentHtml: string;
}

export function getSortedBlogsData(): BlogMeta[] {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const allBlogsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data as Omit<BlogMeta, 'id'>
      };
    });

  // Sort blogs by date
  return allBlogsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export async function getBlogData(id: string): Promise<BlogData | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${id}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data as Omit<BlogMeta, 'id'>
    };
  } catch (error) {
    console.error(`Error processing blog ${id}:`, error);
    return null;
  }
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => ({
      id: fileName.replace(/\.md$/, '')
    }));
}

export function getAllCategories(): string[] {
  const blogs = getSortedBlogsData();
  const categories = new Set(blogs.map(blog => blog.category));
  return Array.from(categories).sort();
}

export function getBlogsByCategory(category: string): BlogMeta[] {
  return getSortedBlogsData().filter(blog => blog.category === category);
}

