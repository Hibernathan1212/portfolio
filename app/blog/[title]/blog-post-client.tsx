"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import * as React from "react";

interface PostType {
  title: string;
  date: string;
  category: string;
  content: string;
}

export default function BlogPostClient({ post }: { post: PostType }) {
  // Scroll to top on page load safely inside the client
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="mb-6">
              <span className="text-sm text-zinc-500">{post.date}</span>
              <span className="mx-2 text-zinc-700">•</span>
              <span className="text-sm text-purple-400">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-zinc max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
