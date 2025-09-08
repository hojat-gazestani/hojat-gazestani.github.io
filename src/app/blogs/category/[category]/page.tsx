import { getBlogsByCategory, getAllCategories } from "@/lib/blogs";
import { BlogList } from "@/components/BlogList";
import { notFound } from "next/navigation";
import { BlogNav } from "@/components/BlogNav";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category: category.toString() }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const blogs = getBlogsByCategory(decodeURIComponent(category));

  if (blogs.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Blogs in: {category}</h1>
      <BlogNav showBlogsLink={true} />
      <BlogList blogs={blogs} />
    </div>
  );
}
