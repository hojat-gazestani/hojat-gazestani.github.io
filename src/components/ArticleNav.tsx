import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export function ArticleNav({
  showArticlesLink = true,
}: {
  showArticlesLink?: boolean;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <Link
        href="/"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>

      {showArticlesLink && (
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
