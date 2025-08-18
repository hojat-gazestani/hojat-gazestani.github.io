import { ArticleList } from "@/components/ArticleList";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const metadata = {
  title: "Articles - Hojat Gazestani",
  description:
    "Technical articles about DevOps, Cloud Engineering, and Kubernetes",
};

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold">My Articles</h1>
        <Link
          href="/"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
      <ArticleList />
    </div>
  );
}
