// page.tsx
import { getBlogData, getAllBlogIds } from "@/lib/blogs";
import { BlogContent } from "@/components/BlogContent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogNav } from "@/components/BlogNav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogData(id);

  if (!blog) {
    return {
      title: "Blog Not Found - Hojat Gazestani",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: `${blog.title} - Hojat Gazestani`,
    description: blog.summary,
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogIds();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogData(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <BlogNav category={blog.category} />
      <BlogContent blog={blog} />
    </div>
  );
}
