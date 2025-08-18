import { getSortedArticlesData } from "@/lib/articles";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import type { ArticleMeta } from "@/lib/articles";

export function LatestArticles() {
  const latestArticles = getSortedArticlesData().slice(0, 3);

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Latest Articles
        </h2>
        <Link
          href="/articles"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          View All Articles
          <FaArrowRight className="ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        <Link
          href={`/articles/${article.id}`}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          {article.title}
        </Link>
      </h3>

      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
        <FaCalendarAlt className="mr-2" />
        <span>
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
        {article.summary}
      </p>

      <Link
        href={`/articles/${article.id}`}
        className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read more
      </Link>
    </div>
  );
}
