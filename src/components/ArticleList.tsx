import Link from "next/link";
import { getSortedArticlesData } from "@/lib/articles";
import { FaCalendarAlt, FaTags } from "react-icons/fa";

export async function ArticleList() {
  const articles = await getSortedArticlesData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500 flex flex-col"
        >
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

          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
            {article.summary}
          </p>

          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center mt-auto">
              <FaTags className="mr-2 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {article.tags.length > 2 && (
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded">
                    +{article.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
