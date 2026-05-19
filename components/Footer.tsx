'use client'

import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent-green flex items-center justify-center">
            <Zap size={13} className="text-black fill-black" />
          </div>
          <span className="font-display font-800 text-lg tracking-tight">
            Vault<span className="text-accent-green">ix</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-white/30 font-body">
          <a href="/termos" className="hover:text-white transition-colors">Termos de uso</a>
          <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center gap-4 text-white/30 text-xs font-mono">
          <a href="https://instagram.com/vaultix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://discord.gg/seu-servidor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
          <a href="https://youtube.com/@vaultix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-[#1f1f1f] text-center text-xs text-white/20 font-mono">
        © 2025 Vaultix — Todos os direitos reservados
      </div>
    </footer>
  )
}
