/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS on purpose: shared by the Node build scripts and the Next bundle. */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = process.cwd();
const BLOGS_DIR = path.join(ROOT, 'src/blogs');
const NOTES_DIR = path.join(ROOT, process.env.NOTES_DIR || '_notes');
const NOTES_TOPICS = ['machine-learning'];

// Recursively list .md files under a directory (relative, '/'-separated).
// Returns [] if the directory does not exist (e.g. notes not checked out).
function walkMd(dir) {
  if (!fs.existsSync(dir)) return [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { recursive: true });
  } catch {
    return [];
  }
  return entries
    .map((e) => String(e).replace(/\\/g, '/'))
    .filter((e) => e.endsWith('.md') && path.basename(e) !== 'README.md');
}

function firstHeading(content) {
  const m = content.match(/^#[ \t]+(.+?)[ \t]*#*[ \t]*$/m);
  return m ? m[1].trim() : '';
}

function prettifyName(base) {
  return base.replace(/[-_]+/g, ' ').trim();
}

// Rewrite GitHub "blob" image URLs to "raw" so they load as images on a static site.
function rewriteImageUrls(md) {
  return md.replace(
    /https:\/\/github\.com\/([^/\s]+)\/([^/\s]+)\/blob\//g,
    'https://raw.githubusercontent.com/$1/$2/'
  );
}

// Stable numeric key for sorting by date; missing/invalid dates sort to the end.
function dateKey(date) {
  if (!date) return 0;
  const t = new Date(date).getTime();
  return Number.isNaN(t) ? 0 : t;
}

// Derive a normalized post record. Uses frontmatter when present, otherwise
// synthesizes it (title from the first H1, category from the source, etc.).
function deriveMeta(slug, filePath, fallbackCategory) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const data = parsed.data || {};
  const base = path.basename(filePath, '.md');
  const title = data.title || firstHeading(parsed.content) || prettifyName(base);
  const summary = data.summary || '';
  const category = data.category || fallbackCategory || 'general';
  const tags = Array.isArray(data.tags) && data.tags.length ? data.tags : [fallbackCategory || 'notes'];
  const date = data.date || undefined;
  return { slug, filePath, title, summary, category, tags, date, content: parsed.content };
}

let cache = null;
function collectPosts() {
  if (cache) return cache;
  const posts = [];

  // Existing posts: flat, have frontmatter. slug = filename.
  for (const rel of walkMd(BLOGS_DIR)) {
    const slug = rel.replace(/\.md$/, '');
    posts.push(deriveMeta(slug, path.join(BLOGS_DIR, rel), 'general'));
  }

  // Notes: nested, no frontmatter. slug = <topic>/<relative path>.
  for (const topic of NOTES_TOPICS) {
    const dir = path.join(NOTES_DIR, topic);
    for (const rel of walkMd(dir)) {
      const slug = `${topic}/${rel.replace(/\.md$/, '')}`;
      posts.push(deriveMeta(slug, path.join(dir, rel), topic));
    }
  }

  cache = posts;
  return posts;
}

module.exports = { collectPosts, rewriteImageUrls, dateKey };
