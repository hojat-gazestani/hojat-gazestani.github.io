import { getArticleData, getAllArticleIds } from "@/lib/articles";
import { ArticleContent } from "@/components/ArticleContent";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = await getArticleData(params.id);
  return {
    title: `${article.title} - Hojat Gazestani`,
    description: article.summary,
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticleIds();
  return articles;
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticleData(params.id);

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <ArticleContent article={article} />
    </div>
  );
}
