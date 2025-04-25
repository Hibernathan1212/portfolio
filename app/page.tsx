"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mail, Music, Camera, BookOpen, Award } from "lucide-react"
import NavMenu from "@/components/nav-menu"
import ParallaxText from "@/components/parallax-text"
import FeaturedProject from "@/components/featured-project"
import SkillOrb from "@/components/skill-orb"
import TimelineItem from "@/components/timeline-item"
import QuoteCard from "@/components/quote-card"
import { projects } from "./projects/projects-data"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    // Programming Languages
    { name: "C++", category: "Programming", logo: "/logos/cpp.svg", url: "https://isocpp.org" },
    { name: "C", category: "Programming", logo: "/logos/c.svg", url: "https://en.cppreference.com/w/c" },
    { name: "Python", category: "Programming", logo: "/logos/python.svg", url: "https://python.org" },
    { name: "Swift", category: "Programming", logo: "/logos/swift.svg", url: "https://swift.org" },
    { name: "x86 Assembly", category: "Programming", logo: "/logos/assembly.svg", url: "https://en.wikipedia.org/wiki/X86_assembly_language" },
    { name: "GLSL", category: "Programming", logo: "/logos/glsl.svg", url: "https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)" },

    // Web Development
    { name: "React", category: "Libraries", logo: "/logos/react.svg", url: "https://reactjs.org" },
    { name: "Next.js", category: "Libraries", logo: "/logos/nextjs.svg", url: "https://nextjs.org" },
    { name: "TypeScript", category: "Programming", logo: "/logos/typescript.svg", url: "https://typescriptlang.org" },
    { name: "JavaScript", category: "Programming", logo: "/logos/javascript.svg", url: "https://javascript.com" },
    { name: "HTML", category: "Programming", logo: "/logos/html.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", category: "Programming", logo: "/logos/css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Vercel", category: "Other", logo: "/logos/vercel.svg", url: "https://vercel.com" },

    // Graphics & GPU
    { name: "Vulkan", category: "Libraries", logo: "/logos/vulkan.svg", url: "https://vulkan.org" },
    { name: "OpenGL", category: "Libraries", logo: "/logos/opengl.svg", url: "https://opengl.org" },
    { name: "SwiftUI", category: "Libraries", logo: "/logos/swiftui.svg", url: "https://developer.apple.com/swiftui" },

    // Data Science & ML
    { name: "PyTorch", category: "Libraries", logo: "/logos/pytorch.svg", url: "https://pytorch.org" },
    { name: "NumPy", category: "Libraries", logo: "/logos/numpy.svg", url: "https://numpy.org" },
    { name: "Pandas", category: "Libraries", logo: "/logos/pandas.svg", url: "https://pandas.pydata.org" },
    { name: "Matplotlib", category: "Libraries", logo: "/logos/matplotlib.svg", url: "https://matplotlib.org" },
    { name: "SciPy", category: "Libraries", logo: "/logos/scipy.svg", url: "https://scipy.org" },
    { name: "Qiskit", category: "Libraries", logo: "/logos/qiskit.svg", url: "https://qiskit.org" },

    // System Administration
    { name: "TrueNAS", category: "Other", logo: "/logos/truenas.svg", url: "https://truenas.com" },
    { name: "Proxmox", category: "Other", logo: "/logos/proxmox.svg", url: "https://proxmox.com" },
    { name: "Docker", category: "Other", logo: "/logos/docker.svg", url: "https://docker.com" },
    { name: "Wireshark", category: "Other", logo: "/logos/wireshark.png", url: "https://wireshark.org" },
    { name: "GitHub", category: "Other", logo: "/logos/github.svg", url: "https://github.com" },
    { name: "Ollama", category: "Other", logo: "/logos/ollama.svg", url: "https://ollama.ai" },

    // Hardware
    { name: "Raspberry Pi", category: "Electronics", logo: "/logos/raspberrypi.svg", url: "https://raspberrypi.org" },
    { name: "Arduino", category: "Electronics", logo: "/logos/arduino.svg", url: "https://arduino.cc" },
    { name: "GQRX", category: "Electronics", logo: "/logos/gqrx.png", url: "https://gqrx.dk" },

    // Media Software
    { name: "Logic Pro X", category: "Music", logo: "/logos/logicprox.png", url: "https://www.apple.com/logic-pro/" },
    { name: "FL Studio", category: "Music", logo: "/logos/flstudio.png", url: "https://www.image-line.com/" },
    { name: "Ableton", category: "Music", logo: "/logos/ableton.svg", url: "https://www.ableton.com/" },
    { name: "Lightroom", category: "Other", logo: "/logos/lightroom.svg", url: "https://adobe.com/lightroom" },
    { name: "Final Cut Pro", category: "Other", logo: "/logos/finalcutpro.png", url: "https://www.apple.com/th/final-cut-pro/" }
  ]

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    const nameElement = document.querySelector(".name-animation");
    
    if (nameElement) {
      let originalText = nameElement.textContent || "";
      let iteration = 0;
      
      clearInterval(interval as unknown as number);
      
      interval = setInterval(() => {
        nameElement.textContent = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(interval as number);
        }
        
        iteration += 1 / 3;
      }, 30) as unknown as number;
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white overflow-hidden">      
      {/* Custom cursor blur */}
      <motion.div
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        // transition={{ type: "spring", damping: 50, stiffness: 800 }}
        className="fixed w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block transition-transform duration-100"
      />
      {/* Navigation */}
      <NavMenu />

      {/* Hero Section */}
      <section className="h-screen bg-[#080808] flex items-center justify-center">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,80vw)] h-[min(800px,80vw)] rounded-full bg-purple-500/10 blur-[150px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-10 px-4 mx-auto text-center"
        >

          <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="name-animation text-4xl md:text-8xl font- tracking-widest mb-4 md:mb-12"
          >
            NATHAN NEWTON THURBER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center space-y-8"
          >
            <p className="text-md md:text-xl text-zinc-400 max-w-md">
              Developer • Musician • Swimmer
              <br />
              Based in Chiang Mai
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/projects"
                className="group relative overflow-hidden px-6 py-3 border border-white/10 rounded-full hover:border-white/30 transition-colors duration-300"
              >
                <span className="relative z-10 text-sm font-light tracking-wider flex items-center">
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>

              <Link
                href="/about"
                className="group relative overflow-hidden px-6 py-3 border border-white/10 rounded-full hover:border-white/30 transition-colors duration-300"
              >
                <span className="relative z-10 text-sm font-light tracking-wider">About Me</span>
                <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <p className="text-sm md:text-lg text-zinc-400 ">This website is still a work in progress</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center">
        <span className="text-s text-zinc-500 mb-2 tracking-widest">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0">
          <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        className="w-full h-4 bg-white/30"
          />
        </div>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-[#080808]">
        <ParallaxText baseVelocity={-2}>DEVELOPER • MUSICIAN • STUDENT • SWIMMER • LEARNER • RESEARCHER • LEADER • STUDENT COUNCIL PRESIDENT • MAKER • CLUB PRESIDENT • DESIGNER • </ParallaxText>
      </section>

      {/* About Preview Section */}
      <section className="py-64 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">ABOUT</span>
              <h2 className="text-5xl md:text-5xl font-light tracking-wide mb-8">Student Developer from Chiang Mai</h2>
                <p className="text-zinc-400 leading-relaxed">
                  I'm a 17-year-old student with a passion for technology, science, swimming, and music. From teaching myself 
                  mathematics and physics to diving into computer science and programming, I've always 
                  been driven by curiosity and the desire to create and learn. Beyond coding, I enjoy listening to and composing music, 
                  as well as compete as a regional swimmer in Thailand. 
                </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="/about"
                className="group relative overflow-hidden px-6 py-3 border border-white/10 rounded-full hover:border-white/30 transition-colors duration-300"
              >
                <span className="relative z-10 text-sm font-light tracking-wider flex items-center">
                  More About Me{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">SELECTED WORK</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Projects</h2>
          </motion.div>

          <div className="space-y-32">
            <FeaturedProject
              number="01"
              title={projects[0].title}
              description={projects[0].overview}
              tags={projects[0].technologies}
              image={projects[0].image}
              link={"/projects/" + projects[0].title.replace(/\s+/g, "-")}
              direction="right"
            />

            <FeaturedProject
              number="02"
              title={projects[1].title}
              description={projects[1].overview}
              tags={projects[1].technologies}
              image={projects[1].image}
              link={"/projects/" + projects[1].title.replace(/\s+/g, "-")}
              direction="left"
            />

            <FeaturedProject
              number="03"
              title={projects[2].title}
              description={projects[2].overview}
              tags={projects[2].technologies}
              image={projects[2].image}
              link={"/projects/" + projects[2].title.replace(/\s+/g, "-")}
              direction="right"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 bg-[#080808]">

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
          >
        <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">EXPERTISE</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8">Skills & Technologies</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Programming", "Libraries", "Electronics", "Music", "Other"].map((category) => (
            <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-6 py-2 text-sm border rounded-full transition-colors duration-300 focus:outline-none
            ${activeFilter === category 
              ? 'border-purple-500 text-purple-400' 
              : 'border-white/10 hover:border-white/30'}`}
            >
          {category}
            </button>
          ))}
        </div>
          </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills
            .filter(skill => activeFilter === "All" || skill.category === activeFilter)
            .map((skill) => (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-white/10 rounded-lg hover:border-white/30 
                  transition-colors duration-300 flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 p-2 group-hover:bg-white/10 transition-colors duration-300">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-light tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-zinc-500">{skill.category}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-400 
                  transition-all duration-300 transform group-hover:translate-x-1" />
              </motion.a>
            ))}
        </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
          >
        <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">EXPERIENCE</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-wide">My Experiences</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0">
          <TimelineItem
            year="2025 - Present"
            title="Student Council President"
            description="Representing my highschool's student voice for my school's administration in shaping future policy, working alongside the parent's commitee, and hosting events for the school for students and teachers."
          />

          <TimelineItem
            year="2024"
            title="Research Intership"
            description="Conducted research on air pollution, focusing on pm toxicity. "
          />

          <TimelineItem
            year="2024 - Present"
            title="Robotics and Computer Science Club lead"
            description="Leading the Robotics and Computer Science Club, fostering a community of innovation and learning in robotics, programming, and technology."
          />

          <TimelineItem
            year="2024 - Present"
            title="Hosting Fundraising Concert"
            description="Organizing and hosting a fundraising concert to support local charities and community initiatives."
          />

          <TimelineItem
            year="2018 - Present"
            title="Semi-professional swimmer"
            description="Competing as a regional swimmer in Thailand, training and competing in multiple events."
          />

        </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">WORK IN PROGRESS</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Current Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden rounded-lg relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center justify-between">
                    <span className="text-s text-purple-400">In Development</span>
                    <span className="text-s text-zinc-400">50% Complete</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2 group-hover:text-purple-300 transition-colors duration-300">
                This Website
              </h3>
              <p className="text-zinc-400 mb-4">
                My website portfolio that aims to showcase all of my skills, interests, and personality. 
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">NextJS</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">Vercel</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden rounded-lg relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center justify-between">
                    <span className="text-s text-purple-400">In Development</span>
                    <span className="text-s text-zinc-400">10% Complete</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                    <div className="h-full w-[10%] bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2 group-hover:text-purple-300 transition-colors duration-300">
                8-bit Breadboard Computer
              </h3>
              <p className="text-zinc-400 mb-4">
                A fully functional 8-bit computer made from scratch using breadboards and logic gates. Made with reference to Ben Eater's 8-bit computer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">Circuits</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">Breadboards</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">Logic</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-s">CPU Architecture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials/Quotes Section
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">What People Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuoteCard
              quote="Nathan has shown exceptional leadership skills as Student Council President. His ability to listen to student concerns and work collaboratively with faculty has made a real difference in our school community."
              author="Ms. Johnson"
              title="School Principal"
            />

            <QuoteCard
              quote="Working with Nathan on our group coding project was a great experience. His technical skills and creative problem-solving approach helped us overcome several challenges and deliver an outstanding final product."
              author="Alex Chen"
              title="Classmate & Project Partner"
            />

            <QuoteCard
              quote="Nathan's dedication to swimming is impressive. He consistently puts in the extra effort during training and has shown remarkable improvement in his technique and times over the past year."
              author="Coach Williams"
              title="Swimming Coach"
            />

            <QuoteCard
              quote="I've been amazed by Nathan's ability to balance his academic responsibilities with his extracurricular activities. His time management skills and work ethic are truly commendable."
              author="Dr. Martinez"
              title="Computer Science Teacher"
            />
          </div>
        </div>
      </section> */}

      {/* Awards & Achievements */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">RECOGNITION</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Awards & Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Coding Competition</h3>
              <p className="text-zinc-500 mb-4">Apple Swift Developer Challenge • 2025</p>
              <p className="text-zinc-400">
                Winner of Apple's Swift Developer Challenge in 2025, creating an IOS app to help users track their impact on the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Swimming Championship</h3>
              <p className="text-zinc-500 mb-4">Regional Records • 2023</p>
              <p className="text-zinc-400">
                Broke 4 all-time records in my regions International School athletics conference (CMAC) (one record being my own all-time record).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Academic Excellence</h3>
              <p className="text-zinc-500 mb-4">Honor Roll • 2019-2025</p>
              <p className="text-zinc-400">
                Consistently maintained a high level of academic excellence, maintaining a position on the school's honor roll for academic excellence. Requires an IBDP grade of over 5.75.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Athletic Excellence</h3>
              <p className="text-zinc-500 mb-4">Swimming MVP • 2022-2025</p>
              <p className="text-zinc-400">
                Recognition for top performing swimmer at my school. Awarded to one student per year for the entire school. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Global Citizen Recognition</h3>
              <p className="text-zinc-500 mb-4">Global Citizen Award • 2024</p>
              <p className="text-zinc-400">
                Demonstrated awareness and understanding of global issues and my role in the world community. Awarded to one student each year for each grade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">Musical Excellence</h3>
              <p className="text-zinc-500 mb-4">Arts Award • 2022-2024</p>
              <p className="text-zinc-400">
                Consistently demonstrated engagement in the arts by exploring different musical cultures and areas. Awarded to one student each year for each grade.  
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">EXPLORE</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Discover More</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/music">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <Music className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">Music</h3>
                <p className="text-zinc-400 mb-6">Explore my compositions, what I'm currently listening to, and some of my favorites.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/photography">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <Camera className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">Photography</h3>
                <p className="text-zinc-400 mb-6">View my collection of photographs from Chiang Mai and beyond.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/blog">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <BookOpen className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">Blog</h3>
                <p className="text-zinc-400 mb-6">Read my thoughts on coding, music, school, and life in general.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/extracurriculars">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">Extracurriculars</h3>
                <p className="text-zinc-400 mb-6">Learn about what I'm doing outside of my IBDP coursework.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/notes">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <BookOpen className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">School Notes</h3>
                <p className="text-zinc-400 mb-6">Access my compiled notes and resources from my classes.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group relative aspect-[1.6] overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
              <Link href="/contact">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <Mail className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-light tracking-wide mb-2 duration-300 group-hover:text-purple-400">Contact</h3>
                <p className="text-zinc-400 mb-6">Get in touch to discuss projects, ideas, or opportunities.</p>
                <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                Discover{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      {/* <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">MY PHILOSOPHY</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Values & Principles</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-2xl font-light tracking-wide mb-6">What I Believe</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  I believe that technology should be used to solve real problems and improve people's lives. My
                  approach to development is centered around creating intuitive, accessible, and meaningful experiences.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  I'm passionate about the intersection of technology and creativity, finding ways to blend logical
                  problem-solving with artistic expression. This balance is what drives my work across coding, music,
                  and photography.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-light tracking-wide mb-6">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">01</span>
                    <div>
                      <h4 className="font-light mb-1">Continuous Learning</h4>
                      <p className="text-zinc-400">
                        Embracing new challenges and constantly expanding my knowledge and skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">02</span>
                    <div>
                      <h4 className="font-light mb-1">Creative Problem-Solving</h4>
                      <p className="text-zinc-400">
                        Finding innovative solutions by approaching problems from multiple perspectives.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">03</span>
                    <div>
                      <h4 className="font-light mb-1">Attention to Detail</h4>
                      <p className="text-zinc-400">
                        Focusing on the small details that make a big difference in the final result.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">04</span>
                    <div>
                      <h4 className="font-light mb-1">Collaboration</h4>
                      <p className="text-zinc-400">
                        Working effectively with others to achieve shared goals and create better outcomes.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Future Goals Section
      <section className="py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">LOOKING AHEAD</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Future Goals</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500"
              >
                <h3 className="text-xl font-light tracking-wide mb-4">Short-Term</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Complete current web development projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Improve swimming times for upcoming competitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Learn a new programming language (Rust)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Expand photography portfolio
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500"
              >
                <h3 className="text-xl font-light tracking-wide mb-4">Mid-Term</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Attend a prestigious university for Computer Science
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Develop a mobile app with 1,000+ users
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Participate in national swimming competitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Release an EP of original music compositions
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-all duration-500"
              >
                <h3 className="text-xl font-light tracking-wide mb-4">Long-Term</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Found a tech startup focused on education
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Contribute to open-source projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Mentor young developers and students
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Create technology that makes a positive social impact
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
            >
            <span className="inline-block text-s tracking-widest text-zinc-500 mb-4">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-4xl font-light tracking-wide mb-8">Contact</h2>
            <p className="text-zinc-400 mb-12 leading-relaxed">
              I'm open to working on and discussing new projects, contributing to your vision, and helping in anyway I can.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden px-8 py-4 border border-white/10 rounded-full hover:border-white/30 transition-colors duration-300 inline-flex items-center"
            >
              <span className="relative z-10 text-sm font-light tracking-wider flex items-center">
              Contact Me{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
            </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-s text-zinc-500">© {new Date().getFullYear()} • Nathan Thurber</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/hibernathan1212"
                className="text-s text-zinc-500 hover:text-white transition-colors duration-300"
              >
                GitHub
              </Link>
              <Link href="/contact" className="text-s text-zinc-500 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

