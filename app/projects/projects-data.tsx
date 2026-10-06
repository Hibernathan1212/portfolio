import {
  BookOpen,
  Music,
  Calculator,
  Atom,
  Globe,
  Languages,
} from "lucide-react";
import { JSX } from "react";

export const projects = [
  {
    id: 1,
    title: "Environmental Impact App · Apple Swift Student Challenge Winner",
    year: "February 2025",
    category: "iOS Development",
    overview:
      "An award-winning iOS app that helps users understand and track the environmental impact of their daily activities.",
    technologies: ["Swift", "SwiftUI"],
    description:
      "Designed and developed an interactive iOS application that enables users to quantify and track their environmental impact through everyday activities. Built intuitive animations, responsive layouts, and clear data visualizations to make environmental information easier to understand. Selected as a global winner of the 2025 Apple Swift Student Challenge, evaluated for technical excellence, design, and innovation.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 2,
    title: "Vulkan Pathtracer & Physics Simulator",
    year: "2025 - Present",
    category: "Graphics & Simulation",
    overview:
      "A physically based pathtracer and real-time rigid-body physics engine built from scratch in C++.",
    technologies: ["C++", "Vulkan"],
    description:
      "Engineering a physically based pathtracer using C++ and Vulkan to simulate global illumination, light transport, and material interactions. Built a real-time rigid-body physics engine with custom linear algebra and numerical integration frameworks for dynamics, collision detection, and collision resolution. Optimizing GPU compute and rendering pipelines, memory allocation, synchronization, and multithreading to improve frame rates and throughput.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 3,
    title: "GPT2 Reimplementation & Sequence Models",
    year: "2024 - Present",
    category: "Machine Learning",
    overview:
      "A paper-based reimplementation of GPT-2, alongside LSTM and transformer experiments for time-series forecasting.",
    technologies: ["Python", "PyTorch", "NumPy"],
    description:
      "Reimplemented the GPT-2 architecture from its original research paper to understand language models at the code level, including transformer decoder blocks, multi-head self-attention, positional encoding, and the tokenization pipeline. Also designed and trained LSTM- and transformer-based models for stock price forecasting, experimenting with feature engineering, sequence windowing, and evaluation against baseline strategies.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 4,
    title: "Neural Network from Scratch",
    year: "2025",
    category: "Machine Learning",
    overview:
      "A fully connected neural network written in pure C++, achieving over 85% accuracy on MNIST without external ML libraries.",
    technologies: ["C++"],
    description:
      "Implemented a fully connected neural network from first principles, including forward propagation, backpropagation, gradient descent, activation functions, and loss functions. Trained and evaluated it on the MNIST handwritten-digit dataset, achieving over 85% classification accuracy. Used the project to build a deeper understanding of matrix calculus, the chain rule, and optimization before applying those foundations to higher-level machine learning work.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 5,
    title: "Compiler from Scratch",
    year: "2025",
    category: "Systems Programming",
    overview:
      "A working compiler for a custom programming language that emits x86-64 assembly.",
    technologies: ["C++", "x86-64 Assembly"],
    description:
      "Designed a custom programming language and built its compiler in C++. Implemented lexical analysis, parsing, abstract syntax tree construction, and assembly generation. Explored language design, grammar specification, and the practical process of translating source code into executable instructions.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 6,
    title: "Homelab · Systems Administration & Networking",
    year: "2024 - Present",
    category: "Infrastructure & DevOps",
    overview:
      "A self-managed, virtualized server environment for hosting applications, private storage, and containerized services.",
    technologies: [
      "Linux",
      "Proxmox",
      "Kubernetes (k3s)",
      "Containers",
      "DNS",
      "Reverse Proxies",
    ],
    description:
      "Architected and secured a segmented local network with custom subnet routing, DNS, reverse proxies, and dedicated hardware switching. Provision and maintain virtualized servers on Proxmox to host multi-tier applications and private data storage. Automate deployments and horizontally scale containerized services with Kubernetes, while monitoring system health and performing diagnostics and performance tuning.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 7,
    title: "Personal Finance App",
    year: "2025 - Present",
    category: "iOS Development",
    overview:
      "An iOS finance tracker built around double-entry accounting and transparent financial insights.",
    technologies: ["Swift", "SwiftUI"],
    description:
      "Designing and building a personal finance app founded on double-entry accounting principles, with a rigorous model of income, expenses, assets, and liabilities. Developing visualizations and analytical insights that highlight spending patterns and help users make more informed, intentional financial decisions.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 8,
    title: "Custom PCB & Hardware Design",
    year: "2026 - Present",
    category: "Hardware & Electronics",
    overview:
      "Custom electronics projects, including a mechanical keyboard and DJ controller, developed from schematics to assembled devices.",
    technologies: ["KiCad", "CAD", "3D Printing", "Soldering"],
    description:
      "Design and fabricate custom printed circuit boards in KiCad, including a mechanical keyboard and a DJ controller. Work across schematic capture, board layout, routing, component sourcing, and assembly. Model and 3D-print enclosures and mechanical components, integrating electrical, firmware, and physical design into complete working devices.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 9,
    title: "Breathe Easy TPP Mobile App",
    year: "May 2025 - Present",
    category: "Mobile Development",
    overview:
      "Leading mobile app development for a clean-tech startup developing positive-pressure air pollution mitigation systems.",
    technologies: ["React Native", "Expo"],
    description:
      "Lead mobile application development for Breathe Easy TPP, working directly with the CEO, CTO, UX designers, and marketing team. Engineered the user onboarding pipeline to streamline acquisition and support product promotion and adoption. Balance technical implementation with product requirements and business priorities in a fast-moving startup environment.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 10,
    title: "Model United Nations Conference Website",
    year: "2025 - 2026",
    category: "Web Development",
    overview:
      "The official website for a school Model United Nations conference, serving hundreds of student delegates.",
    technologies: ["Astro", "Vercel"],
    description:
      "Independently designed, built, and deployed the conference's official website as a central platform for schedules, committee information, and updates throughout the multi-day event. Managed the full project lifecycle, from requirements gathering and design through development, deployment, and ongoing client support.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
  {
    id: 11,
    title: "Psychological Assessment Research Platform",
    year: "2025 - 2026",
    category: "Web Development",
    overview:
      "A custom web platform supporting research into the mental-health impacts of Chiang Mai's seasonal air pollution on students.",
    technologies: ["React", "NextJS", "Vercel"],
    description:
      "Developed a web platform that enabled a student researcher to administer psychological assessments to study participants. Supported research into the effects of seasonal air pollution on student mental health in Chiang Mai. Independently handled requirements, design, development, deployment, and ongoing client support.",
    image: "",
    source: "",
    demoLink: "",
    additionalImages: [],
  },
];
