"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Mail,
  Music,
  Camera,
  BookOpen,
  Award,
  type LucideIcon,
} from "lucide-react";
import NavMenu from "@/components/nav-menu";
import ParallaxText from "@/components/parallax-text";
import FeaturedProject from "@/components/featured-project";
import TimelineItem from "@/components/timeline-item";
import { projects } from "./projects/projects-data";

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const NAME = "NATHAN NEWTON THURBER";

type SkillCategory =
  | "Programming"
  | "Libraries"
  | "Electronics"
  | "Music"
  | "Other";

type SkillFilter = "All" | SkillCategory;

type Skill = {
  name: string;
  category: SkillCategory;
  logo: string;
  url: string;
};

const SKILL_FILTERS: SkillFilter[] = [
  "All",
  "Programming",
  "Libraries",
  "Electronics",
  "Music",
  "Other",
];

const skills: Skill[] = [
  // Programming Languages
  {
    name: "C++",
    category: "Programming",
    logo: "/logos/cpp.svg",
    url: "https://isocpp.org",
  },
  {
    name: "C",
    category: "Programming",
    logo: "/logos/c.svg",
    url: "https://en.cppreference.com/w/c",
  },
  {
    name: "Python",
    category: "Programming",
    logo: "/logos/python.svg",
    url: "https://python.org",
  },
  {
    name: "Swift",
    category: "Programming",
    logo: "/logos/swift.svg",
    url: "https://swift.org",
  },
  {
    name: "x86 Assembly",
    category: "Programming",
    logo: "/logos/assembly.svg",
    url: "https://en.wikipedia.org/wiki/X86_assembly_language",
  },
  {
    name: "GLSL",
    category: "Programming",
    logo: "/logos/glsl.svg",
    url: "https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)",
  },
  {
    name: "TypeScript",
    category: "Programming",
    logo: "/logos/typescript.svg",
    url: "https://typescriptlang.org",
  },
  {
    name: "JavaScript",
    category: "Programming",
    logo: "/logos/javascript.svg",
    url: "https://javascript.com",
  },
  {
    name: "HTML",
    category: "Programming",
    logo: "/logos/html.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    category: "Programming",
    logo: "/logos/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  // Web / Graphics / Data libraries
  {
    name: "React",
    category: "Libraries",
    logo: "/logos/react.svg",
    url: "https://reactjs.org",
  },
  {
    name: "Next.js",
    category: "Libraries",
    logo: "/logos/nextjs.svg",
    url: "https://nextjs.org",
  },
  {
    name: "Vulkan",
    category: "Libraries",
    logo: "/logos/vulkan.svg",
    url: "https://vulkan.org",
  },
  {
    name: "OpenGL",
    category: "Libraries",
    logo: "/logos/opengl.svg",
    url: "https://opengl.org",
  },
  {
    name: "SwiftUI",
    category: "Libraries",
    logo: "/logos/swiftui.svg",
    url: "https://developer.apple.com/swiftui",
  },
  {
    name: "PyTorch",
    category: "Libraries",
    logo: "/logos/pytorch.svg",
    url: "https://pytorch.org",
  },
  {
    name: "NumPy",
    category: "Libraries",
    logo: "/logos/numpy.svg",
    url: "https://numpy.org",
  },
  {
    name: "Pandas",
    category: "Libraries",
    logo: "/logos/pandas.svg",
    url: "https://pandas.pydata.org",
  },
  {
    name: "Matplotlib",
    category: "Libraries",
    logo: "/logos/matplotlib.svg",
    url: "https://matplotlib.org",
  },
  {
    name: "SciPy",
    category: "Libraries",
    logo: "/logos/scipy.svg",
    url: "https://scipy.org",
  },
  {
    name: "Qiskit",
    category: "Libraries",
    logo: "/logos/qiskit.svg",
    url: "https://qiskit.org",
  },

  // Systems / Tools
  {
    name: "Vercel",
    category: "Other",
    logo: "/logos/vercel.svg",
    url: "https://vercel.com",
  },
  {
    name: "TrueNAS",
    category: "Other",
    logo: "/logos/truenas.svg",
    url: "https://truenas.com",
  },
  {
    name: "Proxmox",
    category: "Other",
    logo: "/logos/proxmox.svg",
    url: "https://proxmox.com",
  },
  {
    name: "Docker",
    category: "Other",
    logo: "/logos/docker.svg",
    url: "https://docker.com",
  },
  {
    name: "Wireshark",
    category: "Other",
    logo: "/logos/wireshark.png",
    url: "https://wireshark.org",
  },
  {
    name: "GitHub",
    category: "Other",
    logo: "/logos/github.svg",
    url: "https://github.com",
  },
  {
    name: "Ollama",
    category: "Other",
    logo: "/logos/ollama.svg",
    url: "https://ollama.ai",
  },
  {
    name: "Lightroom",
    category: "Other",
    logo: "/logos/lightroom.svg",
    url: "https://adobe.com/lightroom",
  },
  {
    name: "Final Cut Pro",
    category: "Other",
    logo: "/logos/finalcutpro.png",
    url: "https://www.apple.com/final-cut-pro/",
  },

  // Hardware
  {
    name: "Raspberry Pi",
    category: "Electronics",
    logo: "/logos/raspberrypi.svg",
    url: "https://raspberrypi.org",
  },
  {
    name: "Arduino",
    category: "Electronics",
    logo: "/logos/arduino.svg",
    url: "https://arduino.cc",
  },
  {
    name: "GQRX",
    category: "Electronics",
    logo: "/logos/gqrx.png",
    url: "https://gqrx.dk",
  },

  // Music
  {
    name: "Logic Pro X",
    category: "Music",
    logo: "/logos/logicprox.png",
    url: "https://www.apple.com/logic-pro/",
  },
  {
    name: "FL Studio",
    category: "Music",
    logo: "/logos/flstudio.png",
    url: "https://www.image-line.com/",
  },
  {
    name: "Ableton",
    category: "Music",
    logo: "/logos/ableton.svg",
    url: "https://www.ableton.com/",
  },
];

const timeline = [
  {
    year: "September 2026 - Present",
    title: "Stage Technician · Swarthmore College",
    description:
      "Operating and maintaining lighting and audio systems at the Lang Performing Arts Center, with a developing specialization in audio engineering. Supporting load-in, rigging, set changes, and strike for campus and visiting productions, and troubleshooting technical issues during live performances.",
  },
  {
    year: "Expected May 2030",
    title: "B.A., Math & Computer Science (Intended) · Swarthmore College",
    description:
      "Pursuing a double intended major in Math and Computer Science at Swarthmore College. Relevant coursework includes Data Structures & Algorithms, proof-based Linear Algebra, and Introduction to Optics & Quantum Theory.",
  },
  {
    year: "May 2025 - Present",
    title: "Mobile App Developer · Breathe Easy TPP",
    description:
      "Leading React Native mobile app development for a clean-tech startup commercializing positive-pressure air pollution mitigation systems. Built the user onboarding pipeline and collaborate directly with the CEO, CTO, UX designers, and marketing team to align engineering with product and business goals.",
  },
  {
    year: "2025 - 2026",
    title: "Freelance Software Developer",
    description:
      "Designed, built, and deployed the official website for a school Model United Nations conference serving hundreds of delegates, and a psychological-assessment platform for research into the effects of seasonal air pollution on student mental health. Managed requirements, design, development, deployment, and ongoing client support independently.",
  },
  {
    year: "February 2025 - February 2026",
    title: "Student Council President · Prem Tinsulanonda International School",
    description:
      "Elected to co-lead a student council of over 15 members, representing students and advising school administration. Restructured the council into Events, Multimedia, and Student Wellbeing committees, and directed community events with over 100 attendees.",
  },
  {
    year: "November 2024 - May 2026",
    title: "Robotics Club Lead & Instructor",
    description:
      "Led my school's robotics club and co-led an outreach program teaching programming and robotics to younger students, filling a gap left by the absence of a formal computer science course. Designed hands-on lessons in coding, electronics, and mechanical design, and mentored teams building autonomous vehicles and devices for the school and local community.",
  },
  {
    year: "August 2024 - May 2025",
    title: "Co-Lead Curriculum Designer & Instructor · DANA Education",
    description:
      "Co-created and taught a computer literacy curriculum for Myanmar refugee children in Northern Thailand. Designed practical, age-appropriate lessons for students ages 5–12, introducing essential digital skills and productivity tools including Microsoft Word and Canva.",
  },
  {
    year: "June - July 2024",
    title: "Environmental Research Intern · Chiang Mai University",
    description:
      "Selected as the first high school research intern at the Environmental Science Research Center, Northern Thailand's primary air pollution monitoring institution. Researched PM2.5 toxicity profiles, evaluated regional mitigation approaches including biofuel alternatives, worked with lung tissue analysis, and helped collect and process live AQI and particulate matter datasets.",
  },
  {
    year: "August 2023 - May 2026",
    title: "Fundraising Events Organizer · Music For Change",
    description:
      "Organized two benefit concerts featuring eight bands and musical acts, raising over 15,000 THB for local student-led charities and regional arts education programs. Managed coordination, marketing, and audiovisual production for both events.",
  },
];

const currentProjects = [
  {
    title: "This Website",
    progress: 50,
    description:
      "My portfolio website that aims to showcase all of my skills, interests, and personality.",
    tags: ["React", "Next.js", "Vercel"],
  },
  {
    title: "8-bit Breadboard Computer",
    progress: 10,
    description:
      "A fully functional 8-bit computer made from scratch using breadboards and logic gates. Made with reference to Ben Eater's 8-bit computer.",
    tags: ["Circuits", "Breadboards", "Logic", "CPU Architecture"],
  },
];

const awards = [
  {
    title: "Coding Competition",
    subtitle: "Apple Swift Student Challenge • 2025",
    description:
      "Winner of Apple's Swift Student Challenge in 2025, creating an iOS app to help users track their impact on the environment.",
  },
  {
    title: "Swimming Championship",
    subtitle: "Regional Records • 2023",
    description:
      "Broke 4 all-time records in my region's International School athletics conference (CMAC) — one of them being my own previous all-time record.",
  },
  {
    title: "Academic Excellence",
    subtitle: "Honor Roll • 2019-2025",
    description:
      "Consistently maintained a position on the school's honor roll for academic excellence, which requires an IBDP grade average of over 5.75.",
  },
  {
    title: "Athletic Excellence",
    subtitle: "Swimming MVP • 2022-2025",
    description:
      "Recognition as the top-performing swimmer at my school. Awarded to one student per year for the entire school.",
  },
  {
    title: "Global Citizen Recognition",
    subtitle: "Global Citizen Award • 2024",
    description:
      "Demonstrated awareness and understanding of global issues and my role in the world community. Awarded to one student per grade each year.",
  },
  {
    title: "Musical Excellence",
    subtitle: "Arts Award • 2022-2024",
    description:
      "Consistently demonstrated engagement in the arts by exploring different musical cultures and areas. Awarded to one student per grade each year.",
  },
];

const exploreLinks: {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    href: "/music",
    title: "Music",
    description:
      "Explore my compositions, what I'm currently listening to, and some of my favorites.",
    icon: Music,
  },
  {
    href: "/",
    title: "Photography",
    description:
      "View my collection of photographs from Chiang Mai and beyond.",
    icon: Camera,
  },
  {
    href: "/blog",
    title: "Blog",
    description:
      "Read my thoughts on coding, music, school, and life in general.",
    icon: BookOpen,
  },
];

const projectSlug = (title: string) => title.replace(/\s+/g, "-");

/* -------------------------------------------------------------------------- */
/*                              Small UI helpers                              */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
} as const;

function SectionHeading({
  eyebrow,
  title,
  className = "mb-24",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-light tracking-wide">{title}</h2>
    </motion.div>
  );
}

function OutlineLink({
  href,
  children,
  arrow = true,
  className = "px-6 py-3",
}: {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center overflow-hidden border border-white/10 rounded-full hover:border-white/30 transition-colors duration-300 ${className}`}
    >
      <span className="relative z-10 text-sm font-light tracking-wider flex items-center">
        {children}
        {arrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // null = not yet measured (SSR / first render) — avoids hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");

  /* ---------------------------- Cursor glow ----------------------------- */
  // Motion values instead of state: no page re-render on every mousemove
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const glowX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const glowY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  /* --------------------------- Mobile detection -------------------------- */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* --------------------------- Hero scroll fade -------------------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  /* -------------------------- Name scramble effect ----------------------- */
  useEffect(() => {
    // Only run on desktop, and only once we actually know we're on desktop
    if (isMobile !== false) return;
    const el = nameRef.current;
    if (!el) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;

    const id = window.setInterval(() => {
      el.textContent = NAME.split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return char;
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= NAME.length) window.clearInterval(id);
      iteration += 1 / 3;
    }, 30);

    return () => {
      window.clearInterval(id);
      el.textContent = NAME;
    };
  }, [isMobile]);

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Cursor glow (desktop only) */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block"
      />

      <NavMenu />

      {/* ------------------------------ Hero ------------------------------ */}
      <section
        ref={heroRef}
        className="relative h-screen bg-[#080808] flex items-center justify-center"
      >
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,80vw)] h-[min(800px,80vw)] rounded-full bg-purple-500/10 blur-[150px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-10 px-4 mx-auto text-center"
        >
          <motion.h1
            ref={nameRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-4xl md:text-7xl tracking-widest mb-4 md:mb-12"
          >
            {NAME}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center space-y-8"
          >
            <p className="text-base md:text-xl text-zinc-400 max-w-md">
              Developer • Musician • Swimmer
              <br />
              Math & CS @ Swarthmore College, PA
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <OutlineLink href="/projects">View Projects</OutlineLink>
              <OutlineLink href="/about" arrow={false}>
                About Me
              </OutlineLink>
            </div>

            <p className="text-sm md:text-lg text-zinc-400">
              This website is still a work in progress
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-zinc-500 mb-2 tracking-widest">
              SCROLL
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0">
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="w-full h-4 bg-white/30"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------- Marquee ----------------------------- */}
      {isMobile === false && (
        <section className="bg-[#080808]">
          <ParallaxText baseVelocity={-2}>
            DEVELOPER • MUSICIAN • STUDENT • SWIMMER • LEARNER • RESEARCHER •
            LEADER • STUDENT COUNCIL PRESIDENT • MAKER • CLUB PRESIDENT •
            DESIGNER •{" "}
          </ParallaxText>
        </section>
      )}

      {/* ------------------------- About preview -------------------------- */}
      <section className="py-48 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
                ABOUT
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8">
                Student Developer from Chiang Mai
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m an undergrad student with a passion for technology,
                science, swimming, and music. From teaching myself mathematics
                and physics to diving into computer science and programming,
                I&apos;ve always been driven by curiosity and the desire to
                create and learn, and to understand how things work at a
                fundamental level. Beyond coding, I enjoy listening to and
                composing music, as well as previously competing as a regional
                swimmer in Thailand.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <OutlineLink href="/about">More About Me</OutlineLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------------- Featured projects ------------------------ */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects" />

          <div className="space-y-32">
            {projects.slice(0, 3).map((project, i) => (
              <FeaturedProject
                key={project.title}
                number={String(i + 1).padStart(2, "0")}
                title={project.title}
                description={project.overview}
                tags={project.technologies}
                image={project.image}
                link={`/projects/${projectSlug(project.title)}`}
                direction={i % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
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

      {/* ------------------------------ Skills ---------------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
              EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8">
              Skills &amp; Technologies
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {SKILL_FILTERS.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 text-sm border rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 ${
                    activeFilter === category
                      ? "border-purple-500 text-purple-400"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {filteredSkills.map((skill) => (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group p-4 border border-white/10 rounded-lg hover:border-white/30 transition-colors duration-300 flex items-center space-x-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 p-2 group-hover:bg-white/10 transition-colors duration-300">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-light tracking-wide truncate group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-zinc-500">
                    {skill.category}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- Experience -------------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <SectionHeading eyebrow="EXPERIENCE" title="My Experiences" />

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0">
              {timeline.map((item) => (
                <TimelineItem
                  key={`${item.year}-${item.title}`}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Current projects ----------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <SectionHeading eyebrow="WORK IN PROGRESS" title="Current Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.1 * (i + 1) }}
                className="group"
              >
                <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-purple-400">In Development</span>
                      <span className="text-zinc-400">
                        {project.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-[width] duration-700"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wide mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------- Awards & Achievements --------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <SectionHeading eyebrow="RECOGNITION" title="Awards & Achievements" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.1 * ((i % 3) + 1) }}
                className="p-8 border border-white/5 rounded-lg hover:border-white/20 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-light tracking-wide mb-2">
                  {award.title}
                </h3>
                <p className="text-zinc-500 mb-4">{award.subtitle}</p>
                <p className="text-zinc-400">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Explore --------------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <SectionHeading eyebrow="EXPLORE" title="Discover More" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreLinks.map(({ href, title, description, icon: Icon }, i) => (
              <motion.div
                key={href}
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.1 * ((i % 3) + 1) }}
              >
                <Link
                  href={href}
                  className="group relative block aspect-[1.6] overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                >
                  <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <Icon className="h-8 w-8 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-light tracking-wide mb-2 transition-colors duration-300 group-hover:text-purple-400">
                      {title}
                    </h3>
                    <p className="text-zinc-400 mb-6">{description}</p>
                    <div className="inline-flex items-center text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                      Discover{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- Contact CTA ------------------------- */}
      <section className="py-32 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl font-light tracking-wide mb-8">Contact</h2>
            <p className="text-zinc-400 mb-12 leading-relaxed">
              I&apos;m open to working on and discussing new projects,
              contributing to your vision, and helping in any way I can.
            </p>
            <OutlineLink href="/contact" className="px-8 py-4">
              Contact Me
            </OutlineLink>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------ Footer ---------------------------- */}
      <footer className="py-12 border-t border-white/5 bg-[#080808]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-zinc-500 mb-6 md:mb-0">
              © 2026 • Nathan Thurber
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/hibernathan1212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <Link
                href="/contact"
                className="text-xs text-zinc-500 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
