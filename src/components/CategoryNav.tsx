import Link from "next/link";
import { getAllCategories } from "@/lib/articles";

export async function CategoryNav() {
  const categories = getAllCategories();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/articles/category/${category}`}
            className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
