import { getSortedBlogsData } from "@/lib/blogs";
import { BlogList } from "@/components/BlogList";
import { CategoryNav } from "@/components/CategoryNav";
import { BlogNav } from "@/components/BlogNav";

export default async function BlogsPage() {
  const blogs = await getSortedBlogsData();

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">My Blogs</h1>
      <BlogNav showBlogsLink={false} />
      <CategoryNav />
      <BlogList blogs={blogs} />
    </div>
  );
}
