# Vaultix — Loja Digital

Stack: **Next.js 14 + Tailwind CSS + TypeScript**

## Rodando localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## Deploy na Vercel (grátis, HTTPS automático)

```bash
npm install -g vercel
vercel
# Siga o wizard — em 2 minutos está no ar
```

---

## O que personalizar antes de publicar

### 1. Produtos (`lib/products.ts`)
Edite o array `PRODUCTS` — cada produto tem:
- `name`, `description`, `price`, `originalPrice`
- `category`: `'planilha' | 'prompt' | 'bot' | 'script'`
- `checkoutUrl`: cole aqui o link de checkout do Kirvano/Hotmart/Cakto
- `badge`: `'MAIS VENDIDO' | 'NOVO' | 'OFERTA'` (opcional)
- `emoji`: qualquer emoji que represente o produto

### 2. Links de suporte (`components/Support.tsx`)
- Troque `https://discord.gg/seu-servidor` pelo seu servidor Discord
- Troque `https://wa.me/5511999999999` pelo seu número no formato internacional

### 3. Redes sociais (`components/Footer.tsx` e `components/Header.tsx`)
- Atualize os links de Instagram, Discord e YouTube

### 4. Cupom (`components/CouponPopup.tsx`)
- `COUPON`: troque o código pelo seu
- `TIMER_MINUTES`: duração do timer (padrão: 10 min)
- Configure o cupom na plataforma de checkout também

### 5. SEO (`app/layout.tsx`)
- Atualize `title`, `description` e `keywords`

### 6. Cores (opcional — `tailwind.config.ts`)
- `accent.green: '#00ff88'` → cor principal
- `accent.purple: '#a259ff'` → cor alternativa
- Troque para qualquer cor que preferir

---

## Estrutura de arquivos

```
vaultix/
├── app/
│   ├── globals.css       # Estilos base, fontes, utilitários
│   ├── layout.tsx        # SEO, metadados
│   └── page.tsx          # Monta todas as seções
├── components/
│   ├── Header.tsx        # Navegação fixa com blur
│   ├── Hero.tsx          # Seção principal com grid animado
│   ├── TrustBar.tsx      # Barra de confiança
│   ├── Products.tsx      # Grid com filtro por categoria
│   ├── ProductCard.tsx   # Card individual de produto
│   ├── HowItWorks.tsx    # 3 passos
│   ├── Testimonials.tsx  # Depoimentos
│   ├── CouponPopup.tsx   # Popup com timer (exit intent)
│   ├── Support.tsx       # Discord + WhatsApp
│   └── Footer.tsx        # Rodapé
├── lib/
│   ├── products.ts       # ← DADOS DOS PRODUTOS (edite aqui)
│   └── useReveal.ts      # Hook de animação ao scroll
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Adicionando um produto novo

Abra `lib/products.ts` e adicione ao array `PRODUCTS`:

```ts
{
  id: 'meu-produto-novo',
  name: 'Nome do Produto',
  description: 'Descrição curta em uma linha.',
  price: 19.90,
  originalPrice: 49.90,   // opcional — cria preço riscado
  category: 'script',     // planilha | prompt | bot | script
  badge: 'NOVO',          // opcional
  checkoutUrl: 'https://pay.kirvano.com/seu-link',
  emoji: '🛠️',
},
```

Pronto. O produto aparece automaticamente no grid e no filtro de categoria.

---

## Integrações recomendadas para venda real

| Função | Ferramenta | Por quê |
|---|---|---|
| Checkout + pagamentos | Kirvano ou Cakto | Pix, cartão, antifraude, entrega automática |
| Hospedagem | Vercel | Gratuita, HTTPS, CDN global |
| Suporte | Discord | Padrão do nicho, cria comunidade |
| Analytics | Vercel Analytics | Gratuito, sem cookies |
| E-mail | Brevo (antigo Sendinblue) | Gratuito até 300 e-mails/dia |
