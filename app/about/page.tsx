"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Eye, BookOpen, Brain, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-24">
      <div className="container px-4 mx-auto">
        {/* Navigation */}
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
          <div className="text-center">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
              ABOUT
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              Nathan
            </h1>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
          >
            <div className="aspect-square relative overflow-hidden rounded-3xl">
              <img
                src="/portrait.jpg"
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover "
              />
            </div>

            <div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Hi, I'm Nathan, a student at Swarthmore college looking to major
                in Mathematics, Computer Science, and/or Phyiscs.{" "}
              </p>

              <p className="text-zinc-400 leading-relaxed mb-6">
                Ever since I was a kid, I've always loved learning about as much
                as possible. I've always had a desire to understand how the
                world worked, understanding systems, societies, technology, and
                more.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                I love math, programming, physics, swimming, and music. It's
                hard to find things I don't enjoy and that I'd say no to.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
