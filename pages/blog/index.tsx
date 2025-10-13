import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, PostMeta } from "../../lib/posts";
import { Libre_Baskerville } from "next/font/google";
import Page from "@/components/layout/Page";
import { generateMetaTags } from "@/lib/meta";

const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

type Props = { posts: PostMeta[] };

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      {generateMetaTags({
        title: 'USDvt Blog | Insights on Digital Finance and Stablecoins',
        description: 'Explore the latest insights on digital finance, stablecoins, and blockchain technology from the USDvt team. Stay updated with industry trends and technical developments.',
        keywords: 'USDvt blog, digital finance, stablecoin insights, blockchain technology, fintech blog, cryptocurrency news',
        canonicalUrl: "https://usdvt.com/blog"
      })}
      <Page>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <p className="text-xs text-blue-600 font-medium tracking-wider uppercase mb-4">
            | USDVT BLOG |
          </p>
          <h1 className={`text-4xl md:text-6xl font-medium ${libreBaskerville.className}`}>
            Explore Our Insights
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mt-6">
            Dive into the latest trends, tutorials, and updates from USDvt.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border"
            >
              {post.featuredImage && (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <p className="text-xs text-blue-600 font-medium uppercase tracking-wider mb-2">
                  {post.tags.length > 0 ? post.tags.join(" | ") : "No Tags"}
                </p>
                <h2 className="text-xl font-medium text-gray-900 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  <span>{post.date}</span> • <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};