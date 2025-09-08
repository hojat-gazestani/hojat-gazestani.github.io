import Link from "next/link";
import { BlogData } from "@/lib/blogs";
import { FaCalendarAlt, FaTags, FaArrowLeft } from "react-icons/fa";

export function BlogContent({ blog }: { blog: BlogData }) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blogs
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {blog.title}
        </h1>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 text-sm">
          <FaCalendarAlt className="mr-2" />
          <span>
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaTags className="mr-3 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
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
