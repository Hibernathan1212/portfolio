"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import {
  Search,
  ChevronRight,
  ChevronDown,
  FolderIcon,
  FolderOpenIcon,
  FileIcon,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { subjects } from "../../../subjects-data"
import { motion } from "framer-motion"

export default function NotePage({ params }: { params: Promise<{ subject: string; unit: string; resource: string }> }) {
  // Unwrap the promise for params
  const { subject, unit, resource } = React.use(params)

  const [isBookmarked, setIsBookmarked] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({})
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Get the current subject, unit, and resource
  const currentSubject = subjects.find((s) => s.id === subject)
  const currentUnit = currentSubject?.units.find((u) => u.id === unit)
  const currentResource = currentUnit?.resources.find((r) => r.id === resource)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const initialSubjects: Record<string, boolean> = {}
    subjects.forEach((subjectObj) => {
      initialSubjects[subjectObj.id] = subjectObj.id === subject
    })
    setExpandedSubjects(initialSubjects)

    const initialUnits: Record<string, boolean> = {}
    subjects.forEach((subjectObj) => {
      subjectObj.units.forEach((unitObj) => {
        initialUnits[`${subjectObj.id}-${unitObj.id}`] = subjectObj.id === subject && unitObj.id === unit
      })
    })
    setExpandedUnits(initialUnits)
  }, [subject, unit])

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }))
  }

  const toggleUnit = (subjectId: string, unitId: string) => {
    const key = `${subjectId}-${unitId}`
    setExpandedUnits((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSubjectDoubleClick = (subjectId: string) => {
    router.push(`/notes/${subjectId}`)
  }

  const handleUnitDoubleClick = (subjectId: string, unitId: string) => {
    router.push(`/notes/${subjectId}/${unitId}`)
  }

  const selectResource = (subjectId: string, unitId: string, resourceId: string) => {
    router.push(`/notes/${subjectId}/${unitId}/${resourceId}`)
  }

  interface RelatedNote {
    id: string
    title: string
    subject: string
    subjectName: string
    unit: string
    unitName: string
  }

  const getRelatedNotes = (): RelatedNote[] => {
    if (!currentSubject || !currentUnit || !currentResource) return []

    const relatedNotes: RelatedNote[] = []

    currentUnit.resources.forEach((res) => {
      if (res.id !== resource) {
        relatedNotes.push({
          id: res.id,
          title: res.title,
          subject: currentSubject.id,
          subjectName: currentSubject.name,
          unit: currentUnit.id,
          unitName: currentUnit.name,
        })
      }
    })

    subjects.forEach((subjectObj) => {
      subjectObj.units.forEach((unitObj) => {
        if (subjectObj.id === subject && unitObj.id === unit) return

        const relatedResource = unitObj.resources[0]
        if (relatedResource) {
          relatedNotes.push({
            id: relatedResource.id,
            title: relatedResource.title,
            subject: subjectObj.id,
            subjectName: subjectObj.name,
            unit: unitObj.id,
            unitName: unitObj.name,
          })
        }
      })
    })

    return relatedNotes.slice(0, 5)
  }

  const relatedNotes = getRelatedNotes()

  const noteContent = currentResource
    ? currentResource.content
    : "<h2>Page not found<h2>"

  if (!currentSubject || !currentUnit || !currentResource) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Note not found</h1>
          <Link
            href="/notes"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Notes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex h-screen">
        <div
          className={`file-explorer h-full overflow-y-auto transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0"}`}
        >
          <div className="p-4 sticky top-0 bg-zinc-900/80 backdrop-blur-sm z-10 border-b border-zinc-800/50">
            <div className="relative">
            <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
              </Link>
            </div>
          </div>

          <div className="p-2">
            <div className="mt-2 space-y-1">
              {subjects.map((subjectObj) => (
                <div key={subjectObj.id}>
                  <button
                    onClick={() => toggleSubject(subjectObj.id)}
                    onDoubleClick={() => handleSubjectDoubleClick(subjectObj.id)}
                    className={`w-full file-explorer-item ${
                      expandedSubjects[subjectObj.id] ? "text-white" : "text-zinc-400"
                    } ${subjectObj.id === subject ? "bg-zinc-800/30" : ""}`}
                  >
                    {expandedSubjects[subjectObj.id] ? (
                      <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    )}
                    {expandedSubjects[subjectObj.id] ? (
                      <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                    ) : (
                      <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                    )}
                    <span className="truncate">{subjectObj.name}</span>
                  </button>

                  {expandedSubjects[subjectObj.id] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {subjectObj.units.map((unitObj) => (
                        <div key={unitObj.id}>
                          <button
                            onClick={() => toggleUnit(subjectObj.id, unitObj.id)}
                            onDoubleClick={() => handleUnitDoubleClick(subjectObj.id, unitObj.id)}
                            className={`w-full file-explorer-item ${
                              expandedUnits[`${subjectObj.id}-${unitObj.id}`] ? "text-white" : "text-zinc-400"
                            } ${subjectObj.id === subject && unitObj.id === unit ? "bg-zinc-800/30" : ""}`}
                          >
                            {expandedUnits[`${subjectObj.id}-${unitObj.id}`] ? (
                              <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            )}
                            {expandedUnits[`${subjectObj.id}-${unitObj.id}`] ? (
                              <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                            ) : (
                              <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                            )}
                            <span className="truncate">{unitObj.name}</span>
                          </button>

                          {expandedUnits[`${subjectObj.id}-${unitObj.id}`] && (
                            <div className="ml-4 mt-1 space-y-1">
                              {unitObj.resources.map((res) => (
                                <button
                                  key={res.id}
                                  onClick={() => selectResource(subjectObj.id, unitObj.id, res.id)}
                                  className={`w-full file-explorer-item ${
                                    subjectObj.id === subject &&
                                    unitObj.id === unit &&
                                    res.id === resource
                                      ? "bg-purple-900/20 text-purple-300"
                                      : "text-zinc-400"
                                  }`}
                                >
                                  <FileIcon className="h-4 w-4 mr-2 text-zinc-400" />
                                  <span className="truncate">{res.title}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-zinc-800/50 p-1.5 rounded-r-md text-zinc-400 hover:text-white transition-colors z-20"
          style={{ left: sidebarOpen ? "15.5rem" : "0" }}
        >
          <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${sidebarOpen ? "rotate-180" : ""}`} />
        </button>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
          staggerChildren: 0.2,
              },
            },
          }}
          className="flex-1 overflow-y-auto p-6"
        >
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="breadcrumb pt-6"
                >
                <Link href="/notes">Notes</Link>
                <span className="breadcrumb-separator">/</span>
                <Link href={`/notes/${subject}`}>{currentSubject.name}</Link>
                <span className="breadcrumb-separator">/</span>
                <Link href={`/notes/${subject}/${unit}`}>{currentUnit.name}</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="text-white">{currentResource.title}</span>
                </motion.div>

              <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="flex justify-between items-center mb-8"
              >
          <h1 className="text-3xl font-light">{currentResource.title}</h1>
              </motion.div>

              {/* <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="note-content"
          dangerouslySetInnerHTML={{ __html: noteContent }}
              /> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-invert prose-zinc max-w-none"
              >
                <div dangerouslySetInnerHTML={{ __html: noteContent }} />
              </motion.div>

              <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="mt-12"
              >
          <h2 className="text-xl font-light mb-4">Related Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedNotes.map((note) => (
              <Link
                key={note.id}
                href={`/notes/${note.subject}/${note.unit}/${note.id}`}
                className="related-note"
              >
                <h3 className="text-base font-light mb-1 hover:text-purple-300 transition-colors duration-300">
            {note.title}
                </h3>
                <p className="text-xs text-zinc-500">
            {note.subjectName} / {note.unitName}
                </p>
              </Link>
            ))}
          </div>
              </motion.div>

              <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="mt-12 text-center"
              >
          <Link
            href={`/notes/${subject}/${unit}`}
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {currentUnit.name}
          </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
