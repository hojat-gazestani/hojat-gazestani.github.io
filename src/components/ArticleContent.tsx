import Link from "next/link";
import { ArticleData } from "@/lib/articles";
import { FaCalendarAlt, FaTags, FaArrowLeft } from "react-icons/fa";

export function ArticleContent({ article }: { article: ArticleData }) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/articles"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back to Articles
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 text-sm">
          <FaCalendarAlt className="mr-2" />
          <span>
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaTags className="mr-3 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
