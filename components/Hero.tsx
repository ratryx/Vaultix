'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, MessageCircle, Zap } from 'lucide-react'

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let offset = 0
    const animate = () => {
      offset = (offset + 0.3) % 40
      if (gridRef.current) {
        gridRef.current.style.backgroundPosition = `0 ${offset}px`
      }
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid animado */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-60"
      />

      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-green/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge flutuante */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-green text-xs font-mono mb-8 animate-float">
          <Zap size={12} className="fill-current" />
          Entrega instantânea — 100% digital
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-800 leading-[1.05] tracking-tight mb-6">
          Automatize.{' '}
          <span className="text-accent-green glow-green-text">Escale.</span>
          <br />
          Lucre.
        </h1>

        {/* Subtítulo */}
        <p className="font-body text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Planilhas, bots, scripts e prompts prontos pra usar —{' '}
          <span className="text-white/80">sem mensalidade, use para sempre.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#produtos"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-green text-black font-display font-700 text-sm hover:bg-accent-green-dim transition-all duration-200 hover:scale-105 active:scale-95 glow-green"
          >
            Ver catálogo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://discord.gg/seu-servidor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1f1f1f] text-white/70 font-body text-sm hover:border-white/20 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <MessageCircle size={16} />
            Falar no Discord
          </a>
        </div>

        {/* Trust indicators pequenos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-14 text-xs text-white/30 font-mono">
          <span>+500 clientes</span>
          <span className="text-white/10">·</span>
          <span>Pix &amp; cartão</span>
          <span className="text-white/10">·</span>
          <span>Suporte no Discord</span>
          <span className="text-white/10">·</span>
          <span>Acesso vitalício</span>
        </div>
      </div>
    </section>
  )
}
