"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface ProjectType {
  id: string | number;
  title: string;
  category: string;
  year: string | number;
  image?: string;
  description: string;
  technologies: string[];
  source?: string;
  demoLink?: string;
  additionalImages?: string[];
}

export default function ProjectClientPage({
  project,
}: {
  project: ProjectType;
}) {
  // Scroll to top safely inside the client browser environment
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mb-16">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
              PROJECT {String(project.id).padStart(2, "0")}
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          {project.image && (
            <div className="aspect-video mb-16 relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-xl font-light tracking-wide mb-6">
                About the Project
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide mb-6">
                Technologies
              </h2>
              <ul className="space-y-2 text-zinc-400">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                )}
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {project.additionalImages && project.additionalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl font-light tracking-wide mb-12 text-center">
              More Screenshots
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.additionalImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className="aspect-video bg-zinc-900 relative overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
