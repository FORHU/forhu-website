import { Brain, Zap, BookOpen, Microscope } from "lucide-react"

export default function ResearchSection() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Neural Architecture",
      description: "Pioneering work in advanced neural network design and optimization",
    },
    {
      icon: Zap,
      title: "Efficient Computing",
      description: "Developing scalable AI systems with minimal computational overhead",
    },
    {
      icon: BookOpen,
      title: "Knowledge Systems",
      description: "Building interpretable AI that understands and reasons about information",
    },
    {
      icon: Microscope,
      title: "Empirical Validation",
      description: "Rigorous testing and evaluation of novel AI methodologies",
    },
  ]

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Research Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on fundamental advances in AI science that push the boundaries of what's possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-lg border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-accent/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Publications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://philsci-archive.pitt.edu/26865/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/executable-epistemology-cognitive-architecture-ai.jpg"
                  alt="Executable Epistemology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Executable Epistemology
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The Structured Cognitive Loop as an Architecture of Intentional Understanding
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                  Philosophy Archive
                </span>
              </div>
            </a>

            <a
              href="https://arxiv.org/abs/2510.05107"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/arxiv-ai-research-paper-academic.jpg"
                  alt="arXiv Paper 2510.05107"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  AI Research Paper
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Latest advances in artificial intelligence and machine learning
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">arXiv</span>
              </div>
            </a>

            <a
              href="https://arxiv.org/abs/2507.16184"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/machine-learning-neural-networks-research.jpg"
                  alt="arXiv Paper 2507.16184"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Neural Networks Study
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Deep learning methodologies and architectural innovations
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">arXiv</span>
              </div>
            </a>

            <a
              href="https://osf.io/preprints/psyarxiv/x2c8p_v1"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/cognitive-science-psychology-preprint-research.jpg"
                  alt="PsyArXiv Preprint"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Cognitive Science Preprint
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Bridging cognitive psychology with artificial intelligence
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">PsyArXiv</span>
              </div>
            </a>

            <a
              href="https://osf.io/preprints/psyarxiv/q2c94_v1"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/academic-research-preprint-ai-psychology.jpg"
                  alt="PsyArXiv Preprint"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Mind & Intelligence Study
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Exploring the intersection of cognitive science and AI systems
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">PsyArXiv</span>
              </div>
            </a>

            <a
              href="https://osf.io/preprints/psyarxiv/j259k_v1"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/cognitive-architecture-understanding-ai-research.jpg"
                  alt="PsyArXiv Preprint"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Understanding Architecture
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fundamental principles of cognitive and AI system design
                </p>
                <span className="inline-block text-xs px-2 py-1 bg-accent/10 text-accent rounded">PsyArXiv</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
