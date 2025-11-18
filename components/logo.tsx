"use client"

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src="/images/forhu-logo-3.png"
      alt="Forhu Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
