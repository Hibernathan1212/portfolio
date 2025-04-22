import type React from "react"
import "./notes.css"

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#0a0a0a] text-white">{children}</div>
}
