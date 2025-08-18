import { getSortedArticlesData } from "@/lib/articles";
import { ArticleList } from "@/components/ArticleList";
import { CategoryNav } from "@/components/CategoryNav";

export default async function ArticlesPage() {
  const articles = await getSortedArticlesData();

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">My Articles</h1>
      <CategoryNav />
      <ArticleList articles={articles} />
    </div>
  );
}
