"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">ABOUT</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Nathan</h1>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
          >
            <div className="aspect-square bg-zinc-900 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                <span className="text-sm tracking-widest">PORTRAIT</span>
              </div>
            </div>

            <div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Hi, I'm Nathan, a 17-year-old student developer based in Chiang Mai, Thailand. I'm passionate about
                creating digital experiences that are both functional and beautiful.
              </p>

              <p className="text-zinc-400 leading-relaxed mb-6">
                My journey in technology began when I was 13, tinkering with HTML and CSS to build simple websites.
                Since then, I've expanded my skills to include JavaScript, React, Node.js, and Python, allowing me to
                build full-stack applications.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Beyond coding, I'm deeply interested in music production and photography. These creative outlets help me
                approach problem-solving from different angles and inspire my technical work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-light tracking-wide mb-8 text-center">My Journey</h2>

            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                <div className="text-right md:border-r border-white/10 pr-8">
                  <span className="text-sm text-purple-400">2020 - Present</span>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-8 text-center">Skills & Interests</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-light mb-6 text-purple-400">Technical Skills</h3>
                <div className="space-y-6">
                  {[
                    { name: "JavaScript", level: 90 },
                    { name: "React", level: 85 },
                    { name: "Node.js", level: 80 },
                    { name: "Python", level: 75 },
                    { name: "HTML/CSS", level: 95 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-[1px] bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 text-purple-400">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Development",
                    "AI & Machine Learning",
                    "Music Production",
                    "Photography",
                    "Swimming",
                    "Reading",
                    "Travel",
                    "Chess",
                    "Design",
                    "Mathematics",
                  ].map((interest) => (
                    <span key={interest} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-light mb-6 mt-12 text-purple-400">What Drives Me</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Building technology that makes a positive impact
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Continuous learning and exploring new technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Combining technical skills with creative expression
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Sharing knowledge and helping others learn
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

