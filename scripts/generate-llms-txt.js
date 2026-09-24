const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE_URL = "https://hojat-gazestani.github.io";
const blogsDirectory = path.join(process.cwd(), "src/blogs");
const outPath = path.join(process.cwd(), "public/llms.txt");

const fileNames = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".md"));

const blogs = fileNames
  .map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const { data } = matter(
      fs.readFileSync(path.join(blogsDirectory, fileName), "utf8")
    );
    return { id, ...data };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const postLines = blogs
  .map((blog) => `- [${blog.title}](${BASE_URL}/blogs/${blog.id}/) — ${blog.summary}`)
  .join("\n");

const content = `# Hojat Gazestani

> Cloud Engineer & DevOps Specialist. Technical blog covering Linux internals, Kubernetes, AWS/OpenStack cloud, and DevOps — 10+ years of hands-on experience.

## About
- Resume (PDF): ${BASE_URL}/resume.pdf
- GitHub: https://github.com/hojat-gazestani
- LinkedIn: https://www.linkedin.com/in/hojat-gazestani/

## Posts (${blogs.length})
${postLines}
`;

fs.writeFileSync(outPath, content);
console.log(`llms.txt generated with ${blogs.length} posts`);
