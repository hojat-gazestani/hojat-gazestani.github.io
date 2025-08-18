import Link from "next/link";
import { getSortedArticlesData } from "@/lib/articles";

export async function ArticleList() {
  const articles = await getSortedArticlesData();

  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <article key={article.id} className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <Link
              href={`/articles/${article.id}`}
              className="hover:text-blue-600"
            >
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-500 text-sm mb-2">{article.date}</p>
          <p className="text-gray-700 mb-3">{article.summary}</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 px-2 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
