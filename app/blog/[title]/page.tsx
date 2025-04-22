"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import * as React from "react"
import { posts } from "../posts-data"

export default function BlogPostPage({ params }: { params: Promise<{ title: string }> }) {
  // Unwrap params with React.use()
  const resolvedParams = React.use(params)
  // const postId = Number.parseInt(resolvedParams.title)
  const postTitle = resolvedParams.title
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const decodedTitle = decodeURIComponent(postTitle).replace(/-/g, " ");
  const post = posts.find(p => p.title === decodedTitle) || posts[0]

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
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8">{post.title}</h1>
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
  )
}
