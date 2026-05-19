'use client'

import { useReveal } from '@/lib/useReveal'

const steps = [
  {
    number: '01',
    title: 'Escolha o produto',
    desc: 'Navegue pelo catálogo e escolha a ferramenta que você precisa. Filtro por categoria pra encontrar rápido.',
    emoji: '🎯',
  },
  {
    number: '02',
    title: 'Pague com Pix ou cartão',
    desc: 'Checkout seguro, aprovação em segundos. Pix cai na hora, cartão em até 1 minuto.',
    emoji: '💳',
  },
  {
    number: '03',
    title: 'Receba o link na hora',
    desc: 'Assim que o pagamento é confirmado, o link de acesso chega no seu e-mail automaticamente.',
    emoji: '⚡',
  },
]

export default function HowItWorks() {
  const titleRef = useReveal<HTMLDivElement>()

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 bg-[#111111]/30">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="text-xs font-mono text-accent-green mb-3 tracking-widest">COMO FUNCIONA</p>
          <h2 className="font-display text-3xl sm:text-4xl font-700 text-white">
            Simples do começo ao fim
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Linha conectora desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-gradient-to-r from-accent-green/20 via-accent-green/40 to-accent-green/20" />

          {steps.map((step, i) => {
            const ref = useReveal<HTMLDivElement>(i * 120)
            return (
              <div key={step.number} ref={ref} className="reveal flex flex-col items-center text-center gap-4">
                {/* Círculo numerado */}
                <div className="relative w-20 h-20 rounded-full border border-accent-green/30 bg-accent-green/5 flex items-center justify-center z-10">
                  <span className="text-3xl">{step.emoji}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-green text-black text-[10px] font-mono font-700 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-600 text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
