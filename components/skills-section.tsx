export default function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 70 },
  ]

  const otherSkills = [
    { name: "UI/UX Design", level: 75 },
    { name: "Music Composition", level: 85 },
    { name: "Photography", level: 65 },
    { name: "Content Writing", level: 80 },
  ]

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Skills & Interests</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Other Skills & Interests</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Web Development",
                  "AI & Machine Learning",
                  "Music Production",
                  "Photography",
                  "Reading",
                  "Travel",
                  "Chess",
                ].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

