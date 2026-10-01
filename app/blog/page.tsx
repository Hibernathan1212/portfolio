"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { posts } from "./posts-data"

export default function BlogPage() {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "My Journey into Web Development",
  //     excerpt: "How I started coding and what I've learned along the way.",
  //     date: "May 15, 2023",
  //     category: "Coding",
  //   },
  //   {
  //     id: 2,
  //     title: "The Music That Inspires My Coding",
  //     excerpt: "Exploring the connection between music and programming productivity.",
  //     date: "April 22, 2023",
  //     category: "Music",
  //   },
  //   {
  //     id: 3,
  //     title: "Photography Tips for Beginners",
  //     excerpt: "Simple techniques I've learned to improve my photography skills.",
  //     date: "March 10, 2023",
  //     category: "Photography",
  //   },
  //   {
  //     id: 4,
  //     title: "My Experience as Student Council President",
  //     excerpt: "Leadership lessons and challenges from my role in student government.",
  //     date: "February 28, 2023",
  //     category: "School",
  //   },
  //   {
  //     id: 5,
  //     title: "Living in Chiang Mai as a Student",
  //     excerpt: "What it's like growing up and studying in this beautiful city.",
  //     date: "January 15, 2023",
  //     category: "Lifestyle",
  //   },
  // ]

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
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">THOUGHTS</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Blog</h1>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-zinc-400 leading-relaxed text-center">
              Updates about things that interest me, things I have built or am building, things I've learned, and anything that I feel people would benefit from.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16"
            >
                <Link href={`/blog/${post.title.replace(/\s+/g, "-")}`} className="block group">
                <div className="mb-4">
                  <span className="text-xs text-zinc-500">{post.date}</span>
                  <span className="mx-2 text-zinc-700">•</span>
                  <span className="text-xs text-purple-400">{post.category}</span>
                </div>
                <h2 className="text-2xl font-light tracking-wide mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                <div className="inline-flex items-center text-sm text-zinc-500 group-hover:text-purple-400 transition-colors duration-300">
                  Read More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

