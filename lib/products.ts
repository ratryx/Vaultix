export type Category = 'planilha' | 'prompt' | 'bot' | 'script'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: Category
  badge?: 'MAIS VENDIDO' | 'NOVO' | 'OFERTA'
  checkoutUrl: string
  emoji: string
}

export const CATEGORIES = [
  { key: 'planilha' as Category, label: 'Planilhas', emoji: '📊', description: 'Organizadas, prontas pra usar' },
  { key: 'prompt' as Category, label: 'Prompts', emoji: '🤖', description: 'IA trabalhando por você' },
  { key: 'bot' as Category, label: 'Bots', emoji: '⚡', description: 'Automação sem código' },
  { key: 'script' as Category, label: 'Scripts', emoji: '🛠️', description: 'Ferramentas sob medida' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'planilha-financeiro-pro',
    name: 'Planilha Financeiro Pro',
    description: 'Controle total das suas finanças — entradas, saídas, metas e gráficos automáticos.',
    price: 17.90,
    originalPrice: 49.90,
    category: 'planilha',
    badge: 'MAIS VENDIDO',
    checkoutUrl: '#',
    emoji: '📊',
  },
  {
    id: 'pack-prompts-whatsapp',
    name: 'Pack 50 Prompts WhatsApp',
    description: '50 prompts testados para fechar mais vendas no WhatsApp com IA.',
    price: 14.90,
    originalPrice: 39.90,
    category: 'prompt',
    badge: 'NOVO',
    checkoutUrl: '#',
    emoji: '💬',
  },
  {
    id: 'bot-instagram',
    name: 'Bot Respostas Instagram',
    description: 'Responde DMs automaticamente e captura leads enquanto você dorme.',
    price: 29.90,
    originalPrice: 79.90,
    category: 'bot',
    checkoutUrl: '#',
    emoji: '📱',
  },
  {
    id: 'script-google-sheets',
    name: 'Script Google Sheets Pro',
    description: 'Automatiza tarefas repetitivas no Sheets com um clique.',
    price: 19.90,
    originalPrice: 49.90,
    category: 'script',
    checkoutUrl: '#',
    emoji: '⚙️',
  },
  {
    id: 'planilha-crm',
    name: 'CRM Simples (Planilha)',
    description: 'Gerencie clientes, follow-ups e pipeline de vendas sem pagar mensalidade.',
    price: 22.90,
    originalPrice: 59.90,
    category: 'planilha',
    badge: 'OFERTA',
    checkoutUrl: '#',
    emoji: '👥',
  },
  {
    id: 'pack-prompts-conteudo',
    name: 'Pack Prompts Conteúdo',
    description: 'Crie posts, legendas e roteiros em massa com IA — sem travar na tela em branco.',
    price: 12.90,
    originalPrice: 34.90,
    category: 'prompt',
    checkoutUrl: '#',
    emoji: '✍️',
  },
]

export const TESTIMONIALS = [
  {
    initials: 'MR',
    name: 'Marcos R.',
    color: 'green' as const,
    text: 'Comprei o pack de prompts e já usei no mesmo dia. Fechei 3 vendas a mais na semana. Vale muito o preço.',
  },
  {
    initials: 'JL',
    name: 'Juliana L.',
    color: 'purple' as const,
    text: 'A planilha de CRM é absurda pra quem não quer pagar Salesforce. Simples, rápida e funciona de verdade.',
  },
  {
    initials: 'FT',
    name: 'Felipe T.',
    color: 'green' as const,
    text: 'Bot do Instagram ativado às 23h, acordei com 12 leads novos. Entrega instantânea, suporte top.',
  },
]
