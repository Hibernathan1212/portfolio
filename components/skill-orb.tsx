"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillOrbProps {
  skill: string
  index: number
  total: number
}

export default function SkillOrb({ skill, index, total }: SkillOrbProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(0.5)

  useLayoutEffect(() => {
    setSize(Math.random() * 0.5 + 0.5)
  }, [])

  useEffect(() => {
    // Calculate position based on index and total
    const angle = (index / total) * Math.PI * 2
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    setPosition({ x, y })
  }, [index, total])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: size,
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 1,
        delay: index * 0.1,
      }}
      whileHover={{ scale: size * 1.2 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
      style={{
        width: `${size * 120}px`,
        height: `${size * 120}px`,
      }}
    >
      <span className="text-sm md:text-base font-light">{skill}</span>
    </motion.div>
  )
}

