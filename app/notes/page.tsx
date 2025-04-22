"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Music,
  Calculator,
  Atom,
  Globe,
  Languages,
  Search,
  FileText,
  ChevronRight,
  ChevronDown,
  FolderIcon,
  FolderOpenIcon,
  FileIcon,
  ArrowLeft,
} from "lucide-react"
import { motion } from "framer-motion"
import { subjects } from "./subjects-data"

// Subject data with IB classes
// const subjects = [
//   {
//     id: "math-hl",
//     name: "Mathematics HL",
//     icon: <Calculator className="h-5 w-5" />,
//     description: "Higher Level Mathematics including calculus, algebra, and statistics.",
//     color: "from-blue-600 to-blue-400",
//     units: [
//       {
//         id: "calculus",
//         name: "Calculus",
//         description: "Limits, derivatives, integrals, and applications.",
//         resources: [
//           {
//             id: "limits-notes",
//             type: "notes",
//             title: "Limits and Continuity",
//             date: "September 2023",
//             description: "Comprehensive notes on limits, continuity, and their applications.",
//           },
//           {
//             id: "derivatives-guide",
//             type: "assessment",
//             title: "Derivatives Assessment Guide",
//             date: "October 2023",
//             description:
//               "Study guide for the upcoming derivatives assessment, including practice problems and solutions.",
//           },
//           {
//             id: "calculus-formulas",
//             type: "reference",
//             title: "Calculus Formula Sheet",
//             date: "August 2023",
//             description: "A comprehensive reference sheet with all important calculus formulas and theorems.",
//           },
//         ],
//       },
//       {
//         id: "vectors",
//         name: "Vectors",
//         description: "Vector operations, dot product, cross product, and applications.",
//         resources: [
//           {
//             id: "vector-operations",
//             type: "notes",
//             title: "Vector Operations",
//             date: "November 2023",
//             description: "Notes on vector addition, subtraction, scalar multiplication, and properties.",
//           },
//           {
//             id: "vector-products",
//             type: "notes",
//             title: "Dot and Cross Products",
//             date: "December 2023",
//             description: "Detailed explanation of dot and cross products with geometric interpretations.",
//           },
//         ],
//       },
//       {
//         id: "statistics",
//         name: "Statistics & Probability",
//         description: "Descriptive statistics, probability distributions, and hypothesis testing.",
//         resources: [
//           {
//             id: "probability-basics",
//             type: "notes",
//             title: "Probability Fundamentals",
//             date: "January 2024",
//             description: "Notes on probability concepts, conditional probability, and Bayes' theorem.",
//           },
//           {
//             id: "distributions",
//             type: "notes",
//             title: "Probability Distributions",
//             date: "February 2024",
//             description: "Overview of common probability distributions and their applications.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "physics-hl",
//     name: "Physics HL",
//     icon: <Atom className="h-5 w-5" />,
//     description: "Higher Level Physics covering mechanics, electricity, and modern physics.",
//     color: "from-green-600 to-green-400",
//     units: [
//       {
//         id: "mechanics",
//         name: "Mechanics",
//         description: "Kinematics, dynamics, energy, and circular motion.",
//         resources: [
//           {
//             id: "newtons-laws",
//             type: "notes",
//             title: "Newton's Laws of Motion",
//             date: "September 2023",
//             description: "Comprehensive notes on Newton's three laws of motion with examples.",
//           },
//           {
//             id: "projectile-motion",
//             type: "lab",
//             title: "Projectile Motion Lab Report",
//             date: "October 2023",
//             description: "Lab report analyzing projectile motion with experimental data and conclusions.",
//           },
//         ],
//       },
//       {
//         id: "electricity",
//         name: "Electricity & Magnetism",
//         description: "Electric fields, circuits, and magnetic phenomena.",
//         resources: [
//           {
//             id: "electric-fields",
//             type: "notes",
//             title: "Electric Fields and Forces",
//             date: "November 2023",
//             description: "Notes on electric fields, Coulomb's law, and electric potential.",
//           },
//           {
//             id: "circuits-lab",
//             type: "lab",
//             title: "Circuit Analysis Lab",
//             date: "December 2023",
//             description: "Lab report on series and parallel circuits with measurements and analysis.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "music-hl",
//     name: "Music HL",
//     icon: <Music className="h-5 w-5" />,
//     description: "Higher Level Music covering theory, history, and performance.",
//     color: "from-purple-600 to-purple-400",
//     units: [
//       {
//         id: "theory",
//         name: "Music Theory",
//         description: "Harmony, composition, and musical analysis.",
//         resources: [
//           {
//             id: "chord-progressions",
//             type: "notes",
//             title: "Chord Progressions",
//             date: "September 2023",
//             description: "Notes on common chord progressions, voice leading, and harmonic analysis.",
//           },
//           {
//             id: "composition-project",
//             type: "project",
//             title: "Composition Project",
//             date: "October 2023",
//             description: "Guidelines for the original composition project with examples and resources.",
//           },
//         ],
//       },
//       {
//         id: "history",
//         name: "Music History",
//         description: "Western classical tradition and world music.",
//         resources: [
//           {
//             id: "baroque-period",
//             type: "notes",
//             title: "The Baroque Period",
//             date: "November 2023",
//             description: "Overview of Baroque music, composers, and stylistic features.",
//           },
//           {
//             id: "classical-period",
//             type: "notes",
//             title: "The Classical Period",
//             date: "December 2023",
//             description: "Study of Classical era music, forms, and significant composers.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "english-hl",
//     name: "English HL",
//     icon: <BookOpen className="h-5 w-5" />,
//     description: "Higher Level English Literature and Language.",
//     color: "from-red-600 to-red-400",
//     units: [
//       {
//         id: "literature",
//         name: "Literature",
//         description: "Literary analysis, critical reading, and essay writing.",
//         resources: [
//           {
//             id: "shakespeare-analysis",
//             type: "notes",
//             title: "Shakespeare's Macbeth Analysis",
//             date: "September 2023",
//             description: "Literary analysis of themes, characters, and symbolism in Macbeth.",
//           },
//           {
//             id: "essay-writing",
//             type: "assessment",
//             title: "Essay Writing Guide",
//             date: "October 2023",
//             description: "Guidelines for analytical essay writing with rubric and examples.",
//           },
//         ],
//       },
//       {
//         id: "language",
//         name: "Language",
//         description: "Textual analysis, rhetoric, and stylistics.",
//         resources: [
//           {
//             id: "rhetorical-devices",
//             type: "notes",
//             title: "Rhetorical Devices",
//             date: "November 2023",
//             description: "Comprehensive guide to rhetorical devices and their effects.",
//           },
//           {
//             id: "media-analysis",
//             type: "project",
//             title: "Media Analysis Project",
//             date: "December 2023",
//             description: "Framework for analyzing media texts and their linguistic features.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "global-politics-sl",
//     name: "Global Politics SL",
//     icon: <Globe className="h-5 w-5" />,
//     description: "Standard Level Global Politics covering international relations and political theories.",
//     color: "from-yellow-600 to-yellow-400",
//     units: [
//       {
//         id: "power",
//         name: "Power, Sovereignty & International Relations",
//         description: "Concepts of power, state sovereignty, and international organizations.",
//         resources: [
//           {
//             id: "power-concepts",
//             type: "notes",
//             title: "Concepts of Power",
//             date: "January 2024",
//             description: "Notes on different forms of power in politics and international relations.",
//           },
//           {
//             id: "un-case-study",
//             type: "assessment",
//             title: "United Nations Case Study",
//             date: "February 2024",
//             description: "Analysis of the UN's structure, functions, and effectiveness.",
//           },
//         ],
//       },
//       {
//         id: "human-rights",
//         name: "Human Rights",
//         description: "Human rights frameworks, violations, and protection.",
//         resources: [
//           {
//             id: "rights-frameworks",
//             type: "notes",
//             title: "Human Rights Frameworks",
//             date: "March 2024",
//             description: "Overview of international human rights documents and institutions.",
//           },
//           {
//             id: "rights-case-study",
//             type: "project",
//             title: "Human Rights Case Study",
//             date: "April 2024",
//             description: "Guidelines for analyzing a specific human rights situation.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "thai-sl",
//     name: "Thai SL",
//     icon: <Languages className="h-5 w-5" />,
//     description: "Standard Level Thai language and literature.",
//     color: "from-pink-600 to-pink-400",
//     units: [
//       {
//         id: "language",
//         name: "Language",
//         description: "Thai grammar, vocabulary, and writing.",
//         resources: [
//           {
//             id: "formal-writing",
//             type: "notes",
//             title: "Thai Formal Writing",
//             date: "November 2023",
//             description: "Notes on formal Thai writing styles and vocabulary for academic contexts.",
//           },
//           {
//             id: "grammar-review",
//             type: "notes",
//             title: "Grammar Review",
//             date: "December 2023",
//             description: "Comprehensive review of Thai grammar rules and exceptions.",
//           },
//         ],
//       },
//       {
//         id: "literature",
//         name: "Literature",
//         description: "Thai literary works and analysis.",
//         resources: [
//           {
//             id: "thai-poetry",
//             type: "notes",
//             title: "Thai Poetry Forms",
//             date: "January 2024",
//             description: "Overview of traditional Thai poetry forms and techniques.",
//           },
//           {
//             id: "modern-literature",
//             type: "project",
//             title: "Modern Thai Literature Analysis",
//             date: "February 2024",
//             description: "Framework for analyzing contemporary Thai literary works.",
//           },
//         ],
//       },
//     ],
//   },
// ]

// Resource type icons
const resourceTypeIcons = {
  notes: <FileText className="h-4 w-4" />,
  assessment: <FileText className="h-4 w-4" />,
  reference: <FileText className="h-4 w-4" />,
  lab: <FileText className="h-4 w-4" />,
  project: <FileText className="h-4 w-4" />,
}

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({})
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({})
  const [selectedResource, setSelectedResource] = useState<{
    subject: string
    unit: string
    resource: string
  } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const router = useRouter()

  // Initialize expanded state
  useEffect(() => {
    const initialSubjects: Record<string, boolean> = {}
    subjects.forEach((subject) => {
      initialSubjects[subject.id] = false
    })
    setExpandedSubjects(initialSubjects)

    const initialUnits: Record<string, boolean> = {}
    subjects.forEach((subject) => {
      subject.units.forEach((unit) => {
        initialUnits[`${subject.id}-${unit.id}`] = false
      })
    })
    setExpandedUnits(initialUnits)
  }, [])

  // Toggle subject expansion
  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }))
  }

  // Toggle unit expansion
  const toggleUnit = (subjectId: string, unitId: string) => {
    const key = `${subjectId}-${unitId}`
    setExpandedUnits((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Navigate to subject page on double click
  const handleSubjectDoubleClick = (subjectId: string) => {
    router.push(`/notes/${subjectId}`)
  }

  // Navigate to unit page on double click
  const handleUnitDoubleClick = (subjectId: string, unitId: string) => {
    router.push(`/notes/${subjectId}/${unitId}`)
  }

  // Select a resource
  const selectResource = (subjectId: string, unitId: string, resourceId: string) => {
    router.push(`/notes/${subjectId}/${unitId}/${resourceId}`)
  }

  // Filter subjects and resources based on search query
  const filteredSubjects = subjects.filter((subject) => {
    if (!searchQuery) return true

    const matchesSubject =
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) // ||
      // subject.description.toLowerCase().includes(searchQuery.toLowerCase())

    if (matchesSubject) return true

    // Check if any unit or resource matches the search query
    const hasMatchingUnit = subject.units.some((unit) => {
      const matchesUnit =
        unit.name.toLowerCase().includes(searchQuery.toLowerCase())// ||
        // unit.description.toLowerCase().includes(searchQuery.toLowerCase())

      if (matchesUnit) return true

      // Check if any resource matches the search query
      return unit.resources.some(
        (resource) =>
          resource.title.toLowerCase().includes(searchQuery.toLowerCase())// ||
          // resource.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    })

    return hasMatchingUnit
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex h-screen">
        {/* Sidebar - Obsidian-like file explorer */}
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
              {filteredSubjects.map((subject) => (
                <div key={subject.id}>
                  <button
                    onClick={() => toggleSubject(subject.id)}
                    onDoubleClick={() => handleSubjectDoubleClick(subject.id)}
                    className={`w-full file-explorer-item ${expandedSubjects[subject.id] ? "text-white" : "text-zinc-400"}`}
                  >
                    {expandedSubjects[subject.id] ? (
                      <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    )}
                    {expandedSubjects[subject.id] ? (
                      <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                    ) : (
                      <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                    )}
                    <span className="truncate">{subject.name}</span>
                  </button>

                  {expandedSubjects[subject.id] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {subject.units.map((unit) => (
                        <div key={unit.id}>
                          <button
                            onClick={() => toggleUnit(subject.id, unit.id)}
                            onDoubleClick={() => handleUnitDoubleClick(subject.id, unit.id)}
                            className={`w-full file-explorer-item ${
                              expandedUnits[`${subject.id}-${unit.id}`] ? "text-white" : "text-zinc-400"
                            }`}
                          >
                            {expandedUnits[`${subject.id}-${unit.id}`] ? (
                              <ChevronDown className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            )}
                            {expandedUnits[`${subject.id}-${unit.id}`] ? (
                              <FolderOpenIcon className="h-4 w-4 mr-2 text-zinc-300" />
                            ) : (
                              <FolderIcon className="h-4 w-4 mr-2 text-zinc-400" />
                            )}
                            <span className="truncate">{unit.name}</span>
                          </button>

                          {expandedUnits[`${subject.id}-${unit.id}`] && (
                            <div className="ml-4 mt-1 space-y-1">
                              {unit.resources.map((resource) => (
                                <button
                                  key={resource.id}
                                  onClick={() => selectResource(subject.id, unit.id, resource.id)}
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

        {/* Toggle sidebar button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-zinc-800/50 p-1.5 rounded-r-md text-zinc-400 hover:text-white transition-colors z-20"
          style={{ left: sidebarOpen ? "15.5rem" : "0" }}
        >
          <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${sidebarOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Main content area */}
        <motion.div 
          className="flex-1 overflow-y-auto p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-light mb-4">Notes</h1>
              <p className="text-zinc-400">
              A compilation of notes over the 2 years of IBDP. Feel free to use and refer to them (but I wouldn't recommend using them for anything more than just reference). Hope this helps.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {subjects.map((subject, index) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <Link
              href={`/notes/${subject.id}`}
              className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 group block"
            >
              <div className="flex items-center mb-4">
                {/* <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 opacity-80 group-hover:opacity-100 transition-opacity`}
                > */}
            {/* {subject.icon} */}
                {/* </div> */}
                <h3 className="text-xl font-light group-hover:text-purple-300 transition-colors duration-300">
            {subject.name}
                </h3>
              </div>
              {/* <p className="text-zinc-400 text-sm mb-4">{subject.description}</p> */}
              <div className="flex justify-between items-center text-xs text-zinc-500">
                <span>{subject.units.length} units</span>
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center">
            Explore <ChevronRight className="h-3 w-3 ml-1" />
                </span>
              </div>
            </Link>
          </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
