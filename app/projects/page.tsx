"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { projects } from "./projects-data"

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Project One",
  //     category: "Web Development",
  //     year: "2023",
  //     description: "A brief description of your first project and what technologies you used.",
  //   },
  //   {
  //     id: 2,
  //     title: "Project Two",
  //     category: "Mobile App",
  //     year: "2023",
  //     description: "A brief description of your second project and what technologies you used.",
  //   },
  //   {
  //     id: 3,
  //     title: "Project Three",
  //     category: "UI/UX Design",
  //     year: "2022",
  //     description: "A brief description of your third project and what technologies you used.",
  //   },
  //   {
  //     id: 4,
  //     title: "Project Four",
  //     category: "Web Development",
  //     year: "2022",
  //     description: "A brief description of your fourth project and what technologies you used.",
  //   },
  //   {
  //     id: 5,
  //     title: "Project Five",
  //     category: "Machine Learning",
  //     year: "2021",
  //     description: "A brief description of your fifth project and what technologies you used.",
  //   },
  //   {
  //     id: 6,
  //     title: "Project Six",
  //     category: "Web Development",
  //     year: "2021",
  //     description: "A brief description of your sixth project and what technologies you used.",
  //   },
  // ]

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

          <div className="text-center mb-24">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">PORTFOLIO</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">Projects</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-1 border-t border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Link
                href={`/projects/${project.title.replace(/\s+/g, "-")}`}
                className="block py-8 border-b border-white/10 transition-colors</motion.div> duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-zinc-500 w-8">{String(project.id).padStart(2, "0")}</span>
                    <h2 className="text-xl md:text-2xl font-light tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center mt-4 md:mt-0 pl-8 md:pl-0">
                    <span className="text-sm text-zinc-500 mr-6">{project.category}</span>
                    <span className="text-sm text-zinc-500">{project.year}</span>
                  </div>
                </div>

                <div
                  className={`pl-8 mt-4 overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-zinc-400">{project.overview}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

