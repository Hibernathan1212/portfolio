// app/blog/[title]/page.tsx
import { posts } from "../posts-data";
import BlogPostClient from "./blog-post-client";
import { notFound } from "next/navigation";

// Statically prerender your slug variants cleanly on the server
export async function generateStaticParams() {
  return posts.map((post) => ({
    title: encodeURIComponent(post.title.replace(/\s+/g, "-")),
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const resolvedParams = await params;
  const postTitle = resolvedParams.title;

  const decodedTitle = decodeURIComponent(postTitle).replace(/-/g, " ");
  const post = posts.find((p) => p.title === decodedTitle) || posts[0];

  if (!post) {
    notFound();
  }

  // Pass down the pre-calculated post directly to the client layer
  return <BlogPostClient post={post} />;
}
