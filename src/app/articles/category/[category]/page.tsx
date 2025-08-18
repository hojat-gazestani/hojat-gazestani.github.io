import { getArticlesByCategory, getAllCategories } from "@/lib/articles";
import { ArticleList } from "@/components/ArticleList";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/ArticleNav";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category: category.toString() }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const articles = getArticlesByCategory(decodeURIComponent(category));

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Articles in: {category}</h1>
      <ArticleNav showArticlesLink={true} />
      <ArticleList articles={articles} />
    </div>
  );
}
