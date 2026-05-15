"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ExternalLink, Brain, Scale, Users, Shield, Zap } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  connection: string
  tags: string[]
  icon: React.ReactNode
  image: string
  color?: string
  link?: string
}

const projects: Project[] = [
  {
    id: "chumme",
    title: "Chumme",
    description: "A revolutionary social ecosystem for artists and creators, utilizing SCL architecture to foster authentic community engagement and creative autonomy.",
    connection: "Demonstrates SCL's ability to detect and correct complex social dynamics and emotions, while maintaining human-centric values.",
    tags: ["Social Tech", "Artist Platform", "SCL Integration"],
    icon: <Users className="w-6 h-6" />,
    image: "/chumme.png",
    color: "from-[#4A154B] to-[#E06C75]"
  },
  {
    id: "ilovelawyer",
    title: "I Love Lawyer",
    description: "An intelligent legal research platform that applies recursive cognitive loops to analyze Philippine jurisprudence, providing unprecedented clarity to legal professionals.",
    connection: "Applies the Structured Cognitive Loop to complex, high-stakes decision-making in the legal domain.",
    tags: ["LegalTech", "Cognitive Analysis", "SCL"],
    icon: <Scale className="w-6 h-6" />,
    image: "/ilovelawyer.png",
    color: "from-blue-600 to-indigo-600",
    link: "https://ilovelawyer.com"
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center mb-32 sm:mb-48`}
    >
      {/* Project Image / Visual */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full lg:w-1/2 relative group block cursor-pointer"
      >
        <motion.div 
          style={{ y: index % 2 === 0 ? y : -y }}
          className={`relative aspect-video rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm ${project.id === 'ilovelawyer' ? 'bg-white' : 'bg-black/20'}`}
        >
          {/* Special Gradient for Chumme */}
          {project.id === "chumme" && (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
          )}
          
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-8 left-8 flex gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* External Link Icon Overlay on Hover */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-5 h-5" />
          </div>
        </motion.div>
        
        {/* Ambient Glow */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${project.color || 'from-accent to-accent-secondary'} rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000`} />
      </a>

      {/* Project Info */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        {/* Staggered Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color || 'from-accent/20 to-accent-secondary/20'} text-foreground mb-8 border border-white/5 shadow-2xl inline-block`}>
            {project.icon}
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {project.title}
          </h3>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-200px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl text-muted-foreground mb-10 leading-relaxed font-light"
        >
          {project.description}
        </motion.p>

        {/* FORHU Connection Card - Slides in last */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-300px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group/connection"
        >
          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color || 'from-accent to-accent-secondary'} opacity-[0.03] blur-3xl -mr-24 -mt-24 group-hover/connection:opacity-[0.08] transition-opacity duration-700`}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-1.5 h-6 bg-gradient-to-b ${project.color || 'from-accent to-accent-secondary'} rounded-full`}></div>
              <span className="text-xs font-black text-foreground/60 uppercase tracking-[0.2em]">The SCL Core Connection</span>
            </div>
            <p className="text-lg text-foreground/90 font-medium leading-snug">
              {project.connection}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 sm:py-48 px-6 bg-background">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-accent-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-24 sm:mb-40">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent text-sm font-black uppercase tracking-[0.3em] block mb-6"
          >
            Proof of Concept
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter"
          >
            SCL in <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">Action.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed"
          >
            Witness the transformation of raw cognitive architecture into world-changing applications. From creative hubs to legal intelligence.
          </motion.p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
