'use client'

import { Shield, Zap, MessageCircle, Users } from 'lucide-react'

const items = [
  { icon: Shield, label: 'Pagamento seguro', desc: 'Pix e cartão protegidos' },
  { icon: Zap, label: 'Entrega na hora', desc: 'Link gerado automaticamente' },
  { icon: MessageCircle, label: 'Suporte no Discord', desc: 'Resposta em minutos' },
  { icon: Users, label: '+500 clientes', desc: 'E crescendo todo dia' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-[#1f1f1f] bg-[#111111]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-green/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-accent-green" />
              </div>
              <div>
                <p className="text-sm font-display font-600 text-white leading-tight">{label}</p>
                <p className="text-xs text-white/40 font-body">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
