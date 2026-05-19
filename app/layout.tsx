import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaultix — Ferramentas que trabalham por você',
  description: 'Planilhas, prompts, bots e scripts prontos para usar. Entrega instantânea, preço justo, sem enrolação.',
  keywords: 'planilhas digitais, prompts IA, automação, bots, scripts, ferramentas digitais',
  openGraph: {
    title: 'Vaultix — Ferramentas que trabalham por você',
    description: 'Produtos digitais low ticket. Entrega na hora.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
