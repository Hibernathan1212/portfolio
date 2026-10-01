import Image from "next/image"

export default function JourneySection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">My Journey</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Nathan's portrait" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-zinc-300">
              Hi, I'm Nathan, a 17-year-old student developer based in Chiang Mai, Thailand. I'm passionate about
              creating digital experiences that are both functional and beautiful.
            </p>

            <p className="text-zinc-400">
              My journey in technology began when I was 13, tinkering with HTML and CSS to build simple websites. Since
              then, I've expanded my skills to include JavaScript, React, Node.js, and Python, allowing me to build
              full-stack applications.
            </p>

            <p className="text-zinc-400">
              Beyond coding, I'm deeply interested in music production and photography. These creative outlets help me
              approach problem-solving from different angles and inspire my technical work.
            </p>

            <p className="text-zinc-400">
              Currently in 11th grade, I balance my academic responsibilities with personal projects and continuous
              learning. I'm particularly excited about the intersection of technology and creativity, and how they can
              be used to solve real-world problems.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">What Drives Me</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Building technology that makes a positive impact
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Continuous learning and exploring new technologies
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Combining technical skills with creative expression
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Sharing knowledge and helping others learn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

