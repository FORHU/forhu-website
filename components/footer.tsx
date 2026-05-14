import Link from "next/link"

const Linkedin = (props: { className?: string }) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348l-.021.033h.021v-.033c.42-.649 1.175-1.574 2.847-1.574 2.081 0 3.641 1.36 3.641 4.281v5.591zM5.337 6.694a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zm1.782 13.758H3.555v-9.646h3.564v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)



const Facebook = (props: { className?: string }) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const Instagram = (props: { className?: string }) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947C23.727 2.69 21.31.272 16.949.072 15.668.014 15.259 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const Tiktok = (props: { className?: string }) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.03-1.03-2.28-1.39-3.06-4.41-1.73-6.66.48-.82 1.2-1.49 2.05-1.94V13.5c-.11-.03-.21-.07-.32-.12-1.26-.64-1.66-2.26-.84-3.39.38-.56 1.05-.88 1.73-.83 1.08.06 1.84 1.05 1.73 2.12-.03.55-.29 1.03-.66 1.38V22.3c.12.01.24.01.36.01 1.46-.01 2.9-.5 4.05-1.39.85-.65 1.52-1.54 1.84-2.58.21-.73.28-1.49.26-2.25l.03-16.06z" />
  </svg>
)

const X = (props: { className?: string }) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
)



export default function Footer() {
  const footerLinks = {
    About: [
      { label: "Team", href: "#" },
      { label: "Mission", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-border/50 bg-background px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xs sm:text-sm font-light text-foreground mb-4 sm:mb-6 tracking-wide uppercase">forhu</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Building AI that thinks like humans. Trustworthy. Verifiable. Conscious of its limitations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs sm:text-sm font-light text-foreground mb-3 sm:mb-4 tracking-wide uppercase">{section}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-light">© 2025 FORHU. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://facebook.com/profile.php?id=61585471193562" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="FORHU Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/forhuai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="FORHU Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@forhu_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="FORHU TikTok">
                <Tiktok className="h-4 w-4" />
              </a>
              <a href="https://x.com/forhuai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="FORHU X">
                <X className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/forhu-ai-42484a3a3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="FORHU LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
