"use client"

import { motion } from "framer-motion"

interface QuoteCardProps {
  quote: string
  author: string
  title: string
}

export default function QuoteCard({ quote, author, title }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500"
    >
      <div className="text-4xl text-purple-500/30 mb-4">"</div>
      <p className="text-zinc-300 italic mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div>
          <p className="font-light">{author}</p>
          <p className="text-sm text-zinc-500">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

