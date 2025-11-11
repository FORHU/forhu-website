import { ArrowUpRight } from "lucide-react"

export default function PublicationsSection() {
  const publications = [
    {
      title: "Transformers in Depth: Understanding Attention Mechanisms",
      authors: "Chen, L., Smith, J., et al.",
      venue: "Nature Machine Intelligence",
      year: 2024,
    },
    {
      title: "Efficient Neural Scaling Laws and Emergent Capabilities",
      authors: "Patel, R., Williams, K., et al.",
      venue: "ICML 2024",
      year: 2024,
    },
    {
      title: "Safety and Alignment in Large Language Models",
      authors: "Kumar, A., Thompson, M., et al.",
      venue: "ACL 2024",
      year: 2024,
    },
  ]

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Recent Publications</h2>
          <p className="text-muted-foreground">Peer-reviewed research from our world-class team</p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-lg border border-border bg-background hover:bg-card/50 transition-all duration-300 cursor-pointer hover:border-accent/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{pub.venue}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
