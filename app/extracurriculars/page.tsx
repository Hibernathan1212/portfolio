"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Award, BookOpen, Piano, Users } from "lucide-react"
import { useState } from "react"

const CollapsibleSection = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      <div className="max-w-4xl mx-auto">
      <motion.button
        className="flex items-center justify-between w-full mb-6 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
        <motion.div
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 transition-colors duration-300"
        >
          <Icon className="h-6 w-6 text-purple-400" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-light tracking-wide group-hover:text-purple-400 transition-colors duration-300">
          {title}
          </h2>
        </div>
        </div>
        <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-6 text-zinc-400 group-hover:text-purple-400"
        >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        </motion.div>
      </motion.button>
      <div className="h-px bg-gradient-to-r from-purple-400/20 via-zinc-700 to-transparent"></div>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-8">{children}</div>
      </motion.div>
      </div>
    </motion.section>
  )
}

export default function ExtracurricularsPage() {
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
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">ACTIVITIES</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Extracurriculars</h1>
          </div>
        </motion.div>

        <CollapsibleSection title="Music" icon={Piano}>
          <div className="max-w-4xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8">
                <div className="border-l-2 border-purple-400 pl-4 ">
                  <h3 className="text-lg font-light mb-2">Musical Journey</h3>
                  <p className="text-zinc-400 text-sm mb-2">Piano (age 6), Guitar (age 10), Trumpet (age 12)</p>
                  <p className="text-zinc-400 text-sm mb-2">Regular performances at school events and festivals</p>
                  <p className="text-zinc-400 text-sm mb-2">Composer of classical, electronic, rock, and more</p>
                </div>

                <div className="border-l-2 border-purple-400 pl-4">
                  <h3 className="text-lg font-light mb-2">Notable Collaborations</h3>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>• Performed with Grammy-nominee Claron McFadden</li>
                    <li>• Electronic music exploration with Prof. Myriam Ayari</li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-400 pl-4">
                  <h3 className="text-lg font-light mb-2">Bands</h3>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>• Jazz Band</li>
                    <li>• School's Symphonic Band</li>
                    <li>• Rock Band "Moonshine"</li>
                    <li>• (upcoming) Jazz Fusion Band</li>
                  </ul>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    My Music <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 ">
                <div className="aspect-video mx-auto bg-zinc-900 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                    <span className="text-sm tracking-widest">MUSIC PERFORMANCE PHOTO</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 text-center">
                  Recent performance at the Summer Festival with Moonshine
                </p>
                <div className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                    <span className="text-sm tracking-widest">MUSIC PERFORMANCE PHOTO</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 text-center">
                  Recent performance at the Summer Festival with Moonshine
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Self Study" icon={BookOpen}>
          <div className="grid gap-8">
            {/* Computer Science */}
            <div className="p-6 border border-white/5 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-purple-400">Computer Science</h3>
              <p className="text-zinc-400 mb-6">
                Started with building a redstone computer in Minecraft, learning CPU architecture and digital logic.
                Progressed through Python for mathematical applications, to C++ for systems programming and graphics.
                Currently focused on graphics programming, machine learning, and systems development.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm text-zinc-300 mb-2">Mastered</h4>
                  <div className="flex flex-wrap gap-2">
                    {["CPU Architecture", "Python", "C++", "OpenGL", "Vulkan", "Compilers"].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-300 mb-2">Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Metal", "Web Dev", "Networking"].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                View CS Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Mathematics */}
            <div className="p-6 border border-white/5 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-purple-400">Mathematics</h3>
              <p className="text-zinc-400 mb-6">
                Self-taught through online resources and academic literature. Following advanced courses in complex
                analysis, abstract algebra, and topology. Regular viewer of mathematical content creators and online
                lectures.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-zinc-300 mb-2">Mastered</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Linear Algebra", "Complex Analysis", "Abstract Algebra", "Lie Algebras"].map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-300 mb-2">Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Algebraic Topology", "Differential Geometry", "Real Analysis"].map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Physics */}
            <div className="p-6 border border-white/5 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-purple-400">Physics</h3>
              <p className="text-zinc-400 mb-6">
                Focus on computational physics and quantum mechanics. Study includes differential systems in classical
                physics, fluid dynamics, and various formulations of quantum mechanics through literature and online
                resources.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Quantum Mechanics", "Path Integrals", "Fluid Dynamics", "Computational Physics"].map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Swimming" icon={Award}>
          <p className="text-zinc-400 leading-relaxed mb-8">
            I've been swimming competitively since I was 10 years old. It's taught me discipline, perseverance, and
            the importance of consistent practice. Below are my personal best times across different strokes and
            distances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                <span className="text-sm tracking-widest">SWIMMING COMPETITION PHOTO</span>
              </div>
            </div>
            <div className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                <span className="text-sm tracking-widest">TRAINING SESSION PHOTO</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-normal text-zinc-400">Stroke</th>
                  <th className="text-right py-3 px-4 text-sm font-normal text-zinc-400">25m</th>
                  <th className="text-right py-3 px-4 text-sm font-normal text-zinc-400">50m</th>
                  <th className="text-right py-3 px-4 text-sm font-normal text-zinc-400">100m</th>
                  <th className="text-right py-3 px-4 text-sm font-normal text-zinc-400">200m</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Butterfly", "~13s", "29s", "-", "-"],
                  ["Backstroke", "~14s", "32s", "-", "-"],
                  ["Breaststroke", "~15s", "34s", "1m 18s", "~2m 40s"],
                  ["Freestyle", "~12s", "26s", "58s", "2m 15s"],
                  ["I.M.", "-", "-", "1m 15s", "~2m 40s"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm">{row[0]}</td>
                    <td className="py-3 px-4 text-sm text-right font-mono text-purple-400">{row[1]}</td>
                    <td className="py-3 px-4 text-sm text-right font-mono text-purple-400">{row[2]}</td>
                    <td className="py-3 px-4 text-sm text-right font-mono text-purple-400">{row[3]}</td>
                    <td className="py-3 px-4 text-sm text-right font-mono text-purple-400">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Student Council President" icon={Users}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                <span className="text-sm tracking-widest">STUDENT COUNCIL PHOTO</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-zinc-400 leading-relaxed mb-6">
                As Student Council President for the 2025-2026 academic year, I've had the opportunity to develop
                leadership skills while representing student interests to the administration.
              </p>

              <h3 className="text-lg font-light mb-4">Key Responsibilities:</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Organizing school events and activities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Leading weekly council meetings
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Representing student concerns to faculty
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Managing council budget and resources
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Coordinating volunteer initiatives
                </li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Air Pollution Research"
          icon={() => (
            <svg
              className="h-6 w-6 text-purple-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="border-l-2 border-purple-400 pl-4">
                <h3 className="text-lg font-light mb-2">CMU Internship</h3>
                <ul className="text-zinc-400 text-sm space-y-2">
                  <li>• Research on PM toxicity and trajectories</li>
                  <li>• Analysis of biofuel usage and plant operations</li>
                  <li>• Study of PM 2.5 effects on lung tissue</li>
                  <li>• Development of data collection tools using Air4Thai API</li>
                  <li>• Collaboration with Taiwanese researchers on vertical testing</li>
                </ul>
              </div>

              <div className="border-l-2 border-purple-400 pl-4">
                <h3 className="text-lg font-light mb-2">Weather Balloon Project</h3>
                <ul className="text-zinc-400 text-sm space-y-2">
                  <li>• Launched weather balloons to measure particulate matter</li>
                  <li>• Collaborated with NARIT and meteorological center</li>
                  <li>• Studied atmospheric inversion layers in Chiang Mai</li>
                  <li>• Analyzed impact of mountain geography on pollution</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                  <span className="text-sm tracking-widest">RESEARCH LAB PHOTO</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Working at the Environmental Science Research Center
              </p>
              <div className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                  <span className="text-sm tracking-widest">WEATHER BALLOON LAUNCH</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Weather balloon launch with NARIT team
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* <CollapsibleSection title="Other Activities" icon={() => null}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-white/5 rounded-lg hover:border-white/20 transition-colors duration-500">
              <h3 className="text-xl font-light mb-4">Debate Club</h3>
              <p className="text-zinc-400">
                Active member of the school's debate team, participating in regional competitions and developing
                public speaking skills.
              </p>
            </div>

            <div className="p-6 border border-white/5 rounded-lg hover:border-white/20 transition-colors duration-500">
              <h3 className="text-xl font-light mb-4">Coding Club</h3>
              <p className="text-zinc-400">
                Founder and leader of the school's coding club, organizing workshops and hackathons for students
                interested in programming.
              </p>
            </div>

            <div className="p-6 border border-white/5 rounded-lg hover:border-white/20 transition-colors duration-500">
              <h3 className="text-xl font-light mb-4">Community Service</h3>
              <p className="text-zinc-400">
                Regular volunteer at local community centers, participating in environmental cleanup initiatives and
                tutoring programs.
              </p>
            </div>

            <div className="p-6 border border-white/5 rounded-lg hover:border-white/20 transition-colors duration-500">
              <h3 className="text-xl font-light mb-4">Music Ensemble</h3>
              <p className="text-zinc-400">
                Member of the school's music ensemble, playing piano and guitar for school events and local
                performances.
              </p>
            </div>
          </div>
        </CollapsibleSection> */}
      </div>
    </div>
  )
}
