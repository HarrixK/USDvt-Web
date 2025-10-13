import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug } from "./posts";

export async function loadMdx(slug: string) {
  const post = getPostBySlug(slug);
  const source = await serialize(post.content);
  return {
    frontMatter: {
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage,
      author: post.author,
      tags: post.tags,
    },
    source,
  };
}