"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Compass, Eye, BookOpen, Brain, Heart } from "lucide-react"

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
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">ABOUT</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Nathan</h1>
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
                Hi, I'm Nathan, a 17-year-old based in Chiang Mai, Thailand. 
              </p>

              <p className="text-zinc-400 leading-relaxed mb-6">
                Ever since I was a kid, I've always loved learning about as much as possible. I've always strived to understand how the world worked, understanding systems, societies, technology, and more. 
              </p>

              <p className="text-zinc-400 leading-relaxed">
                I love math, programming, physics, swimming, and music. It's hard to find things I don't enjoy and that I'd say no to. 
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center mb-8">
              <Compass className="text-purple-400 mr-3 h-5 w-5" />
              <h2 className="text-2xl font-light tracking-wide">My Mission</h2>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8">
              <p className="text-zinc-300 leading-relaxed mb-6 text-center italic">
                Exploring technology, science, and art while creating solutions that make a meaningful impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-5 bg-white/5 rounded-xl">
                  <h3 className="text-lg font-light mb-3 text-purple-400">Learn</h3>
                  <p className="text-sm text-zinc-400">
                    Continuously expand my knowledge across all disciplines, finding connections between ideas and thoughts, developing a deeper understanding.
                  </p>
                </div>
                
                <div className="p-5 bg-white/5 rounded-xl">
                  <h3 className="text-lg font-light mb-3 text-purple-400">Build</h3>
                  <p className="text-sm text-zinc-400">
                    Create technology that solves real problems and enhances how we interact with the world. Experiment with new ideas practically
                  </p>
                </div>
                
                <div className="p-5 bg-white/5 rounded-xl">
                  <h3 className="text-lg font-light mb-3 text-purple-400">Repeat</h3>
                  <p className="text-sm text-zinc-400">
                    Consistently working to become better, to learn new things, to make new things.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center mb-8">
              <Eye className="text-purple-400 mr-3 h-5 w-5" />
              <h2 className="text-2xl font-light tracking-wide">My Vision</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl p-8">
            {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-8"> */}
              <p className="text-zinc-300 leading-relaxed mb-6 text-center">
                I envision a future where technology enhances human creativity and connection rather than replacing it.
              </p>
              
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
                >
                  <div className="p-5 bg-white/5 rounded-xl mb-4">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Empathic AI</h3>
                    <p className="text-zinc-400">
                      Improving AI understanding and intelligence through the use of improved reward models for training. Focusing machine learning models on reinforcement learning methods rather than more conventional methods. 
                    </p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl mb-4">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Improved Web Architecture</h3>
                    <p className="text-zinc-400">
                      Developing more efficient web architectures by optimizing the connection between frontend and backend systems. Focusing on real-time data synchronization, edge computing, and serverless architecture to create faster, more responsive applications that can scale for online VR and AR experiences.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-white/5 rounded-xl mb-4">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Improved Computational Architectures</h3>
                    <p className="text-zinc-400">
                      Developing modern computational systems with the introduction of nanophotonics, optical computing, quantum computing, and machine learning systems. Focusing on improvements for uses such as machine learning, high efficiency computation, communications, and networking
                    </p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl mb-4">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Realtime Physical Simulations</h3>
                    <p className="text-zinc-400">
                      I aspire to push the boundries and develop modern computational simulations, bringing together machine learning, improved algorithms, and improved computational components to better understand the world.
                    </p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl mb-4">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Realtime Photorealistic Rendering</h3>
                    <p className="text-zinc-400">
                      I aim to develop rendering techniques to achieve photorealistic real-time rendering of virtual environments. This will allow for enhanced simulated experiences, particularly benefiting individuals with disabilities by providing them with immersive and accessible virtual worlds.
                    </p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl">
                    <h3 className="text-lg font-light mb-3 text-purple-400">Exploring Musical Ideas</h3>
                    <p className="text-zinc-400">
                      Delving into musical traditions and cultures from around the world, while experimenting with innovative creative styles and techniques. Combining diverse influences to create unique and meaningful auditory experiences.
                    </p>
                  </div>
                </motion.div>
            </div>
          </motion.div>

          {/* Philosophy Section */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24"
            >
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="text-purple-400 mr-3 h-5 w-5" />
              <h2 className="text-2xl font-light tracking-wide">My Philosophy</h2>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed">
                I've always been driven by a curiosity about the fundamental nature of things. From an early age, I found myself constantly asking "why?" - not just once, but repeatedly until I reached the core of understanding. This pursuit of fundamental knowledge has shaped how I view the world and my place in it.
              </p>
              
              <p className="text-zinc-400 leading-relaxed">
                Through years of contemplation, I've arrived at a simple yet profound conclusion: the purpose of life is to maximize overall happiness. This isn't just about immediate gratification - it's about finding the right balance between present and future wellbeing. Every decision, every action should contribute either to current happiness or pave the way for future fulfillment.
              </p>
              
              <p className="text-zinc-400 leading-relaxed">
                I believe in the power of understanding systems - whether they're technological, social, or natural. By grasping how things work at their most fundamental level, we can better navigate and influence the world around us. This systems thinking approach helps me see connections that others might miss and find innovative solutions to complex problems.
              </p>
              
              <p className="text-zinc-400 leading-relaxed">
                Time is our most precious resource, and I'm committed to using it wisely. I strive to maintain a balance between learning, creating, and simply experiencing life. While I'm passionate about technology and science, I also recognize the importance of human connection, creativity, and personal growth. Everything I pursue must align with my core philosophy - if it doesn't contribute to happiness or growth, either now or in the future, it's not worth the time investment.
              </p>
              </div>
            </motion.div>

          {/* My Journey Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="flex items-center justify-center mb-8">
              <Brain className="text-purple-400 mr-3 h-5 w-5" />
              <h2 className="text-2xl font-light tracking-wide">My Journey</h2>
            </div>

            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                <div className="text-right md:border-r border-white/10 pr-8">
                  <span className="text-sm text-purple-400">2022 - Present</span>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">High School Student</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Currently in 11th grade, focusing on computer science, mathematics, and physics. Balancing academic
                    responsibilities with personal projects and extracurricular activities.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                <div className="text-right md:border-r border-white/10 pr-8">
                  <span className="text-sm text-purple-400">2019 - Present</span>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Self-taught Developer</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Learning programming through online courses, documentation, and building projects. Constantly
                    exploring new technologies and frameworks to expand my skill set.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                <div className="text-right md:border-r border-white/10 pr-8">
                  <span className="text-sm text-purple-400">2018 - Present</span>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Competitive Swimmer</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Training regularly and competing in regional swimming competitions. Developing discipline,
                    perseverance, and time management skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div> */}
          
        </div>
      </div>
    </div>
  )
}