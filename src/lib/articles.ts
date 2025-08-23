import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src/articles');

export interface ArticleMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category: string;
  readTime?: string;
}

export interface ArticleData extends ArticleMeta {
  contentHtml: string;
}

export function getSortedArticlesData(): ArticleMeta[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data as Omit<ArticleMeta, 'id'>
      };
    });

  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export async function getArticleData(id: string): Promise<ArticleData | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    
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
      ...matterResult.data as Omit<ArticleMeta, 'id'>
    };
  } catch (error) {
    console.error(`Error processing article ${id}:`, error);
    return null;
  }
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => ({
      id: fileName.replace(/\.md$/, '')
    }));
}

export function getAllCategories(): string[] {
  const articles = getSortedArticlesData();
  const categories = new Set(articles.map(article => article.category));
  return Array.from(categories).sort();
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getSortedArticlesData().filter(article => article.category === category);
}

