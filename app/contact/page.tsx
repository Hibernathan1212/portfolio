"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, Instagram, Mail, Send } from "lucide-react"

export default function ContactPage() {
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
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">CONNECT</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Get In Touch</h1>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-light tracking-wide mb-6">Say Hello</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out anytime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-400 mr-3" />
                  <Link 
                    href="mailto:nnthurber@icloud.com" 
                    className="text-zinc-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    nnthurber@icloud.com
                  </Link>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-purple-400 mr-3" />
                  <Link
                    href="https://github.com/hibernathan1212"
                    className="text-zinc-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    github.com/hibernathan1212
                  </Link>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-purple-400 mr-3" />
                  <Link
                    href="https://www.instagram.com/nathant_1212/"
                    className="text-zinc-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    @nathant_1212
                  </Link>
                </div>
              </div>

              <p className="text-zinc-500 text-sm">Currently based in Chiang Mai, Thailand</p>
            </motion.div>  
          </div>
        </div>
      </div>
    </div>
  )
}

