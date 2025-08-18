import { ArticleList } from "@/components/ArticleList";

export const metadata = {
  title: "Articles - Hojat Gazestani",
  description:
    "Technical articles about DevOps, Cloud Engineering, and Kubernetes",
};

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">My Articles</h1>
      <ArticleList />
    </div>
  );
}
