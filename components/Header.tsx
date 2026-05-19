'use client'

import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Suporte', href: '#suporte' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent-green flex items-center justify-center">
            <Zap size={16} className="text-black fill-black" />
          </div>
          <span className="font-display font-800 text-xl tracking-tight">
            Vault<span className="text-accent-green">ix</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#produtos"
            className="px-4 py-2 rounded-lg bg-accent-green text-black text-sm font-display font-700 hover:bg-accent-green-dim transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Ver produtos
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#1f1f1f] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#produtos"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-lg bg-accent-green text-black text-sm font-display font-700 text-center"
          >
            Ver produtos
          </a>
        </div>
      )}
    </header>
  )
}
