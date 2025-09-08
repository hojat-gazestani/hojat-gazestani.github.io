import Link from "next/link";
import { FaHome, FaArrowLeft, FaFolder } from "react-icons/fa";

type BlogNavProps = {
  showBlogsLink?: boolean;
  category?: string;
};

export function BlogNav({
  showBlogsLink = true,
  category,
}: BlogNavProps) {
  return (
    <div className="flex flex-row items-center gap-4 mb-6 flex-wrap">
      <Link
        href="/"
        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>

      {category && (
        <Link
          href={`/blogs/category/${category}`}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
        >
          <FaFolder className="mr-2" />
          Back to {category}
        </Link>
      )}

      {showBlogsLink && !category && (
        <Link
          href="/blogs"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blogs
        </Link>
      )}
    </div>
  );
}
