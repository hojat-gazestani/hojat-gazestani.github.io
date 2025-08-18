// page.tsx
import { getArticleData, getAllArticleIds } from "@/lib/articles";
import { ArticleContent } from "@/components/ArticleContent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/ArticleNav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleData(id);
  return {
    title: `${article.title} - Hojat Gazestani`,
    description: article.summary,
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticleIds();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleData(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <ArticleNav />
      <ArticleContent article={article} />
    </div>
  );
}
