'use client'

import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import ProductCard from './ProductCard'
import clsx from 'clsx'

export default function Products() {
  const [active, setActive] = useState<string>('all')

  const filtered = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === active)

  return (
    <section id="produtos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-accent-green mb-3 tracking-widest">CATÁLOGO</p>
          <h2 className="font-display text-3xl sm:text-4xl font-700 text-white mb-4">
            Ferramentas prontas pra usar
          </h2>
          <p className="text-white/40 font-body text-base max-w-md mx-auto">
            Compre, receba o link na hora e comece a usar em minutos. Sem enrolação.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActive('all')}
            className={clsx(
              'px-4 py-2 rounded-xl text-sm font-mono transition-all duration-200',
              active === 'all'
                ? 'bg-accent-green text-black'
                : 'border border-[#1f1f1f] text-white/40 hover:text-white hover:border-white/20'
            )}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={clsx(
                'px-4 py-2 rounded-xl text-sm font-mono transition-all duration-200 flex items-center gap-1.5',
                active === cat.key
                  ? 'bg-accent-green text-black'
                  : 'border border-[#1f1f1f] text-white/40 hover:text-white hover:border-white/20'
              )}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
