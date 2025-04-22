"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 relative"
    >
      <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full border-2 border-purple-500 bg-black"></div>
      <div className="mb-2 text-purple-400">{year}</div>
      <h3 className="text-xl font-light mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  )
}

