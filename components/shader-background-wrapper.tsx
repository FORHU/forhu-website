"use client"

import dynamic from "next/dynamic"

const HeroShaderBg = dynamic(() => import("./hero-shader-bg"), { ssr: false })

export default function ShaderBackgroundWrapper() {
  return <HeroShaderBg />
}
