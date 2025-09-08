import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import type { BlogMeta } from "@/lib/blogs";

export function LatestBlogs() {
  const latestBlogs = getSortedBlogsData().slice(0, 3);

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Latest Blogs
        </h2>
        <Link
          href="/blogs"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          View All Blogs
          <FaArrowRight className="ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: BlogMeta }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        <Link
          href={`/blogs/${blog.id}`}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          {blog.title}
        </Link>
      </h3>

      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
        <FaCalendarAlt className="mr-2" />
        <span>
          {new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
        {blog.summary}
      </p>

      <Link
        href={`/blogs/${blog.id}`}
        className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read more
      </Link>
    </div>
  );
}
