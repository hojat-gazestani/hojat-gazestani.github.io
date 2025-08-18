import Link from "next/link";
import { FaHome, FaArrowLeft, FaFolder } from "react-icons/fa";

type ArticleNavProps = {
  showArticlesLink?: boolean;
  category?: string;
};

export function ArticleNav({
  showArticlesLink = true,
  category,
}: ArticleNavProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Link
        href="/"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>

      {category && (
        <Link
          href={`/articles/category/${category}`}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FaFolder className="mr-2" />
          Back to {category}
        </Link>
      )}

      {showArticlesLink && !category && (
        <Link
          href="/articles"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back to Articles
        </Link>
      )}
    </div>
  );
}
