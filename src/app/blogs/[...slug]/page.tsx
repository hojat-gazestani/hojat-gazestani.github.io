import { getBlogData, getAllBlogSlugs } from "@/lib/blogs";
import { BlogContent } from "@/components/BlogContent";
import { BlogStructuredData } from "@/components/BlogStructuredData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogNav } from "@/components/BlogNav";

type Params = { slug: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogData(slug.join("/"));

  if (!blog) {
    return {
      title: "Blog Not Found - Hojat Gazestani",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: `${blog.title} - Hojat Gazestani`,
    description: blog.summary || blog.title,
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export default async function BlogPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = await getBlogData(slug.join("/"));

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogStructuredData blog={blog} />
      <div className="max-w-4xl mx-auto p-8 sm:p-20">
        <BlogNav category={blog.category} />
        <BlogContent blog={blog} />
      </div>
    </>
  );
}
