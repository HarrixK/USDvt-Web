import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPosts, PostMeta } from "../../lib/posts";
// MDXRemoteSerializeResult is not used in next-mdx-remote@4.x or later 
// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from "../../lib/mdx";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import { useRouter } from "next/router";
import Page from "@/components/layout/Page";

// Utility to strip HTML tags (simple regex-based solution)
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostMeta;
  prevPost?: PostMeta;
  nextPost?: PostMeta;
  relatedPosts: PostMeta[];
};

export default function BlogPost({ source, frontMatter, prevPost, nextPost, relatedPosts }: Props) {
  const [readingTime, setReadingTime] = useState(0);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const router = useRouter();

  // Sanitize the title to ensure it's a plain string
  const sanitizedTitle = stripHtml(frontMatter.title);

  useEffect(() => {
    // Calculate reading time (200 words per minute)
    const words = source.compiledSource ? source.compiledSource.split(/\s+/).length : 0;
    setReadingTime(Math.ceil(words / 200));

    // Extract table of contents from headings
    const headings = document.querySelectorAll("h2, h3");
    const tocItems = Array.from(headings).map((h) => {
      const text = h.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace all non-alphanumeric chars with a single hyphen
        .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
      h.id = id || `heading-${Math.random().toString(36).substr(2, 9)}`; // Fallback unique ID if text is empty
      return {
        id: h.id,
        text,
        level: parseInt(h.tagName.replace("H", "")),
      };
    });
    setToc(tocItems);

    // Reading progress bar
    const handleScroll = () => {
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [source]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // Create toast element
    const toast = document.createElement("div");
    toast.textContent = "Code copied to clipboard!";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#10B981"; // Green background
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    toast.style.zIndex = "1000";
    toast.style.transition = "opacity 0.3s ease-in-out";
    toast.style.opacity = "1";

    // Append toast to body
    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300); // Wait for fade-out transition
    }, 3000);
  };

  return (
    <Page>
      <Head>
        <title>{`${sanitizedTitle} | USDvt Blog`}</title>
        <meta name="description" content={frontMatter.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={sanitizedTitle} />
        <meta property="og:description" content={frontMatter.excerpt} />
        <meta property="og:image" content={frontMatter.featuredImage || "/og-default.jpg"} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: sanitizedTitle,
            description: frontMatter.excerpt,
            author: { "@type": "Person", name: frontMatter.author },
            datePublished: frontMatter.date,
            image: frontMatter.featuredImage || null,
          })}
        </script>
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="fixed sm:top-[72px] top-[69px] left-0 h-1 bg-blue-600 z-50" id="progress-bar" style={{ width: "0%" }} />
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> &gt;
          <Link href="/blog" className="hover:text-blue-600"> Blog</Link> &gt;
          <span className="text-gray-900">{frontMatter.title}</span>
        </nav>

        {/* Hero Section */}
        {frontMatter.featuredImage && (
          <section className="mb-12">
            <Image
              src={frontMatter.featuredImage}
              alt={frontMatter.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg"
              priority
            />
            <div className="text-center mt-6">
              <p className="text-xs text-blue-600 font-medium tracking-wider uppercase">
                | {frontMatter.tags.length > 0 ? frontMatter.tags.join(" | ") : "No Tags"} |
              </p>
              <h1 className={`text-4xl md:text-6xl font-medium ${libreBaskerville.className}`}>
                {frontMatter.title}
              </h1>
              <div className="text-sm text-gray-600 mt-4">
                <span>{frontMatter.date}</span> • <span>{frontMatter.author}</span> •{" "}
                <span>{readingTime} min read</span>
              </div>
            </div>
          </section>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 lg:max-h-screen hidden md:block">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id} className={`text-sm ${item.level === 3 ? "pl-4" : ""}`}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${item.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none lg:w-3/4 md:max-w-full">
            {source ? (
              <MDXRemote
                {...source}
                components={{
                  Image,
                  code: ({ children, className }) => {
                    const codeString = Array.isArray(children) ? children.join("") : String(children);
                    return (
                      <div className="relative group mb-2">
                        <button
                          className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => copyToClipboard(codeString)}
                        >
                          Copy
                        </button>
                        <pre className={`${className || ""} bg-gray-900 text-white p-4 rounded-lg`}>
                          <code>{children}</code>
                        </pre>
                      </div>
                    );
                  },
                  details: ({ children }) => (
                    <details className="border border-gray-200 p-4 rounded-lg mb-4">
                      {children}
                    </details>
                  ),
                }}
              />
            ) : (
              <p>Failed to load MDX content. Check console for details.</p>
            )}
          </article>
        </div>

        {/* Social Share & Engagement */}
        <section className="mt-12 border-t pt-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-blue-600">👍 Like</button>
              <button className="text-gray-600 hover:text-blue-600">❤️ Love</button>
              <button className="text-gray-600 hover:text-blue-600">😂 Haha</button>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `${router.basePath}${router.asPath}`
                )}&text=${encodeURIComponent(frontMatter.title)}`}
                className="text-gray-600 hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `${router.basePath}${router.asPath}`
                )}`}
                className="text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Comments (Giscus) */}
        {/* <section className="mt-12">
          <div id="giscus-comments"></div>
          <script
            src="https://giscus.app/client.js"
            data-repo="[YOUR-REPO]"
            data-repo-id="[YOUR-REPO-ID]"
            data-category="Comments"
            data-category-id="[YOUR-CATEGORY-ID]"
            data-mapping="pathname"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-theme="light"
            crossOrigin="anonymous"
            async
          ></script>
        </section> */}

        {/* Newsletter */}
        <section className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-medium mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest posts delivered to your inbox.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-64"
            />
            <button className="bg-gray-900 text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </section>

        {/* Previous/Next Navigation */}
        <nav className="mt-12 flex justify-between">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="flex items-center gap-4">
              <Image
                src={prevPost.featuredImage || "/placeholder.jpg"}
                alt={prevPost.title}
                width={80}
                height={80}
                className="rounded"
              />
              <div>
                <p className="text-sm text-gray-600">Previous</p>
                <p className="text-blue-600 hover:underline">{prevPost.title}</p>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="flex items-center gap-4 text-right">
              <div>
                <p className="text-sm text-gray-600">Next</p>
                <p className="text-blue-600 hover:underline">{nextPost.title}</p>
              </div>
              <Image
                src={nextPost.featuredImage || "/placeholder.jpg"}
                alt={nextPost.title}
                width={80}
                height={80}
                className="rounded"
              />
            </Link>
          )}
        </nav>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-medium mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                  <Image
                    src={p.featuredImage || "/placeholder.jpg"}
                    alt={p.title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { loadMdx } = await import("../../lib/mdx-server");
  const { frontMatter, source } = await loadMdx(params!.slug as string);
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === params?.slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const relatedPosts = posts
    .filter((p) => p.slug !== params?.slug && p.tags.some((t) => frontMatter.tags.includes(t)))
    .slice(0, 3);

  return {
    props: {
      source,
      frontMatter,
      prevPost,
      nextPost,
      relatedPosts,
    },
  };
};