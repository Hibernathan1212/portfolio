"use client"

import { use, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  ChevronRight,
  ChevronDown,
  FolderIcon,
  FolderOpenIcon,
  FileIcon,
  ArrowLeft,
} from "lucide-react"
import { subjects } from "../../subjects-data"
import { motion } from "framer-motion"

export default function UnitPage({
  params,
}: {
  params: Promise<{ subject: string; unit: string }>
}) {
  // Unwrap the promise from params
  const { subject, unit } = use(params)

  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({})
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({})
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const currentSubject = subjects.find((s) => s.id === subject)
  const currentUnit = currentSubject?.units.find((u) => u.id === unit)

  useEffect(() => {
    const initialSubjects: Record<string, boolean> = {}
    subjects.forEach((subjectItem) => {
      initialSubjects[subjectItem.id] = subjectItem.id === subject
    })
    setExpandedSubjects(initialSubjects)

    const initialUnits: Record<string, boolean> = {}
    subjects.forEach((subjectItem) => {
      subjectItem.units.forEach((unitItem) => {
        initialUnits[`${subjectItem.id}-${unitItem.id}`] =
          subjectItem.id === subject && unitItem.id === unit
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

  if (!currentSubject || !currentUnit) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Unit not found</h1>
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
          className={`file-explorer h-full overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-0"
          }`}
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
              {subjects.map((subjectItem) => (
                <div key={subjectItem.id}>
                  <button
                    onClick={() => toggleSubject(subjectItem.id)}
                    onDoubleClick={() => handleSubjectDoubleClick(subjectItem.id)}
                    className={`w-full file-explorer-item ${
                      expandedSubjects[subjectItem.id] ? "text-white" : "text-zinc-400"
                    } ${subjectItem.id === subject ? "bg-zinc-800/30" : ""}`}
                  >
                    {expandedSubjects[subjectItem.id] ? (
                      <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    )}
                    {expandedSubjects[subjectItem.id] ? (
                      <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                    ) : (
                      <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                    )}
                    <span className="truncate">{subjectItem.name}</span>
                  </button>

                  {expandedSubjects[subjectItem.id] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {subjectItem.units.map((unitItem) => (
                        <div key={unitItem.id}>
                          <button
                            onClick={() => toggleUnit(subjectItem.id, unitItem.id)}
                            onDoubleClick={() =>
                              handleUnitDoubleClick(subjectItem.id, unitItem.id)
                            }
                            className={`w-full file-explorer-item ${
                              expandedUnits[`${subjectItem.id}-${unitItem.id}`]
                                ? "text-white"
                                : "text-zinc-400"
                            } ${
                              subjectItem.id === subject && unitItem.id === unit
                                ? "bg-zinc-800/30"
                                : ""
                            }`}
                          >
                            {expandedUnits[`${subjectItem.id}-${unitItem.id}`] ? (
                              <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            )}
                            {expandedUnits[`${subjectItem.id}-${unitItem.id}`] ? (
                              <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                            ) : (
                              <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                            )}
                            <span className="truncate">{unitItem.name}</span>
                          </button>

                          {expandedUnits[`${subjectItem.id}-${unitItem.id}`] && (
                            <div className="ml-4 mt-1 space-y-1">
                              {unitItem.resources.map((resource) => (
                                <button
                                  key={resource.id}
                                  onClick={() =>
                                    selectResource(subjectItem.id, unitItem.id, resource.id)
                                  }
                                  className="w-full file-explorer-item text-zinc-400"
                                >
                                  <FileIcon className="h-4 w-4 mr-2 text-zinc-400" />
                                  <span className="truncate">{resource.title}</span>
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
          <ChevronRight
            className={`h-4 w-4 transition-transform duration-300 ${
              sidebarOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto p-6"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="breadcrumb"
            >
              <Link href="/notes">Notes</Link>
              <span className="breadcrumb-separator">/</span>
              <Link href={`/notes/${subject}`}>{currentSubject.name}</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="text-white">{currentUnit.name}</span>
            </motion.div>

            <div className="flex items-center mb-4">
              {/* Uncomment and update the following if you want to display an icon:
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentSubject.color} flex items-center justify-center mr-4`}
                  >
                    {currentSubject.icon}
                  </div>
              */}
              <div>
                <h1 className="text-3xl font-light">{currentUnit.name}</h1>
              </div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentUnit.resources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/notes/${subject}/${unit}/${resource.id}`}
                  className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <FileIcon className="h-5 w-5 mr-2 text-zinc-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <h3 className="text-lg font-light group-hover:text-purple-300 transition-colors duration-300">
                      {resource.title}
                    </h3>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      View Note <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="mt-16 text-center"
            >
              <Link
                href={`/notes/${subject}`}
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {currentSubject.name}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
