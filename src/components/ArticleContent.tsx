import Link from "next/link";
import { ArticleData } from "@/lib/articles";

export function ArticleContent({ article }: { article: ArticleData }) {
  return (
    <article>
      <div className="mb-8">
        <Link href="/articles" className="text-blue-600 hover:underline">
          &larr; Back to Articles
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{article.date}</p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      <div className="mt-8 pt-4 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
