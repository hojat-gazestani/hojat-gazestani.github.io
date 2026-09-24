const fs = require("fs");
const path = require("path");
const { collectPosts, dateKey } = require("../src/lib/content.js");

const BASE_URL = "https://hojat-gazestani.github.io";
const outPath = path.join(process.cwd(), "public/llms.txt");

const posts = collectPosts()
  .slice()
  .sort((a, b) => dateKey(b.date) - dateKey(a.date));

const line = (p) =>
  `- [${p.title}](${BASE_URL}/blogs/${p.slug}/)` + (p.summary ? ` — ${p.summary}` : "");

const postLines = posts.map(line).join("\n");

const content = `# Hojat Gazestani

> Cloud Engineer & DevOps Specialist. Technical blog covering Linux, Kubernetes, AWS/OpenStack cloud, DevOps, and Machine Learning — 10+ years of hands-on experience.

## About
- Resume (PDF): ${BASE_URL}/resume.pdf
- GitHub: https://github.com/hojat-gazestani
- LinkedIn: https://www.linkedin.com/in/hojat-gazestani/

## Posts (${posts.length})
${postLines}
`;

fs.writeFileSync(outPath, content);
console.log(`llms.txt generated with ${posts.length} posts`);
