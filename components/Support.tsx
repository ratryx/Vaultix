'use client'

import { MessageCircle, Clock } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

export default function Support() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="suporte" className="py-24 px-4 sm:px-6 bg-[#111111]/30">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={ref} className="reveal">
          <p className="text-xs font-mono text-accent-green mb-3 tracking-widest">SUPORTE</p>
          <h2 className="font-display text-3xl sm:text-4xl font-700 text-white mb-4">
            Ficou com dúvida?
          </h2>
          <p className="text-white/40 font-body text-base mb-10">
            A gente responde rápido. Sem ticket, sem espera — só manda mensagem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="https://discord.gg/seu-servidor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] text-white font-display font-700 text-sm hover:bg-[#4752C4] transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              Falar no Discord
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-display font-700 text-sm hover:bg-[#1da851] transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-white/25 font-mono">
            <Clock size={12} />
            Atendimento: Segunda a Sábado, das 9h às 22h
          </div>
        </div>
      </div>
    </section>
  )
}
