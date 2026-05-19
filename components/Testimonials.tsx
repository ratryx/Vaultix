'use client'

import { TESTIMONIALS } from '@/lib/products'
import { useReveal } from '@/lib/useReveal'

export default function Testimonials() {
  const titleRef = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-12">
          <p className="text-xs font-mono text-accent-green mb-3 tracking-widest">DEPOIMENTOS</p>
          <h2 className="font-display text-3xl sm:text-4xl font-700 text-white">
            Quem comprou, aprovou
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => {
            const ref = useReveal<HTMLDivElement>(i * 100)
            return (
              <div
                key={t.name}
                ref={ref}
                className="reveal bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex text-accent-green text-sm">★★★★★</div>
                <p className="text-white/60 font-body text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-700 flex-shrink-0 ${
                      t.color === 'green'
                        ? 'bg-accent-green/10 text-accent-green'
                        : 'bg-accent-purple/10 text-accent-purple'
                    }`}
                  >
                    {t.initials}
                  </div>
                  <span className="text-sm font-display font-600 text-white">{t.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
