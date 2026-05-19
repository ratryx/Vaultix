'use client'

import { Zap } from 'lucide-react'
import { Product } from '@/lib/products'
import { useReveal } from '@/lib/useReveal'
import clsx from 'clsx'

const categoryLabels: Record<string, string> = {
  planilha: 'PLANILHA',
  prompt: 'PROMPT',
  bot: 'BOT',
  script: 'SCRIPT',
}

const badgeClass: Record<string, string> = {
  'MAIS VENDIDO': 'badge-green',
  'NOVO': 'badge-purple',
  'OFERTA': 'badge-amber',
}

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const ref = useReveal<HTMLDivElement>(delay)

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div
      ref={ref}
      className="reveal group relative bg-bg-card border border-bg-border rounded-2xl p-5 flex flex-col gap-4 hover:border-accent-green/30 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Badge de destaque */}
      {product.badge && (
        <span className={clsx('absolute -top-2.5 left-4 text-[10px] font-mono px-2 py-0.5 rounded-full', badgeClass[product.badge])}>
          {product.badge}
        </span>
      )}

      {/* Header do card */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{product.emoji}</span>
          <span className="text-[10px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded">
            {categoryLabels[product.category]}
          </span>
        </div>
        {discount && (
          <span className="text-[10px] font-mono text-accent-green bg-accent-green/10 px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-display font-600 text-white text-base leading-snug">{product.name}</h3>
        <p className="text-xs text-white/40 font-body leading-relaxed">{product.description}</p>
      </div>

      {/* Preço */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          {product.originalPrice && (
            <span className="text-xs text-white/25 line-through font-mono">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="text-xl font-display font-700 text-accent-green">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* CTA */}
        <a
          href={product.checkoutUrl}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-green text-black text-xs font-display font-700 hover:bg-accent-green-dim transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Zap size={12} className="fill-black" />
          Comprar
        </a>
      </div>
    </div>
  )
}
