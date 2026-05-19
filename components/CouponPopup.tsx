'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Copy, Check } from 'lucide-react'

const COUPON = 'PRIMEIRA10'
const TIMER_MINUTES = 10

export default function CouponPopup() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [seconds, setSeconds] = useState(TIMER_MINUTES * 60)
  const [dismissed, setDismissed] = useState(false)

  // Mostra após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('coupon-dismissed')) {
        setVisible(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Exit intent
  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed && !sessionStorage.getItem('coupon-dismissed')) {
        setVisible(true)
      }
    }
    document.addEventListener('mouseleave', onMouseLeave)
    return () => document.removeEventListener('mouseleave', onMouseLeave)
  }, [dismissed])

  // Timer regressivo
  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [visible])

  const dismiss = useCallback(() => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem('coupon-dismissed', '1')
  }, [])

  const copy = useCallback(() => {
    navigator.clipboard.writeText(COUPON)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 shadow-2xl">
        {/* Fechar */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        {/* Emoji */}
        <div className="text-3xl mb-3">🎁</div>

        {/* Texto */}
        <h3 className="font-display font-700 text-white text-lg mb-1">
          Desconto exclusivo pra você
        </h3>
        <p className="text-white/40 text-sm font-body mb-5">
          Use o código abaixo e ganhe <span className="text-accent-green font-600">10% off</span> na sua primeira compra.
        </p>

        {/* Código */}
        <button
          onClick={copy}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-dashed border-accent-green/40 bg-accent-green/5 hover:bg-accent-green/10 transition-colors mb-4 group"
        >
          <span className="font-mono font-700 text-accent-green tracking-widest text-sm">
            {COUPON}
          </span>
          <span className="text-white/30 group-hover:text-white/60 transition-colors">
            {copied ? <Check size={14} className="text-accent-green" /> : <Copy size={14} />}
          </span>
        </button>
        <p className="text-center text-xs text-white/30 font-body mb-4">
          {copied ? 'Copiado! ✓' : 'Clique para copiar'}
        </p>

        {/* Timer */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-white/30 font-body">Expira em</span>
          <span className="font-mono text-sm font-700 text-white">
            {mins}:{secs}
          </span>
        </div>
      </div>
    </div>
  )
}
