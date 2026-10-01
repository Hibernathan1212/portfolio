"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface FeaturedProjectProps {
  number: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  direction: "left" | "right"
}

export default function FeaturedProject({
  number,
  title,
  description,
  tags,
  image,
  link,
  direction,
}: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
          direction === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className={direction === "left" ? "md:order-2" : "md:order-1"}>
          <Link href={link} className="block relative aspect-video overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-500 z-0" />
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover opacity-80"
            />
          </Link>
        </div>

        <div className={direction === "left" ? "md:order-1" : "md:order-2"}>
          <span className="text-sm text-purple-400 mb-2 block">{number}</span>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-400 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300"
          >
            View Project{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

