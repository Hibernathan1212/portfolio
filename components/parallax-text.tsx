"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"

interface ParallaxProps {
  children: string
  baseVelocity: number
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    const isMobile = window.innerWidth <= 768 // You can adjust the breakpoint as needed

    if (!isMobile) {
      if (velocityFactor.get() < 0) {
      directionFactor.current = -2
      } else if (velocityFactor.get() > 0) {
      directionFactor.current = 2
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get() / 4
    }

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0 py-6">
      <motion.div
        className="text-3xl md:text-7xl font-light tracking-widest text-white/15 flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
      </motion.div>
    </div>
  )
}