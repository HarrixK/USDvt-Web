import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string | null;
  author: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

const blogDirectory = path.join(process.cwd(), "blog");

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(blogDirectory)
    .filter((p) => p.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        featuredImage: data.featuredImage || null,
        author: data.author || "Development Team",
        tags: data.tags || [],
      } as PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || "",
    featuredImage: data.featuredImage || null,
    author: data.author || "Development Team",
    tags: data.tags || [],
    content,
  };
}