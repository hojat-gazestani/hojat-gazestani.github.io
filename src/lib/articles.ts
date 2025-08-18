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
}

export interface ArticleData extends ArticleMeta {
  contentHtml: string;
}

export function getSortedArticlesData(): ArticleMeta[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticlesData = fileNames.map((fileName) => {
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

export async function getArticleData(id: string): Promise<ArticleData> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
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
}

export async function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  });
}