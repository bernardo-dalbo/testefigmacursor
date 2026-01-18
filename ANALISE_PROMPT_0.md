# 📋 PROMPT 0: Análise e Planejamento Inicial — RELATÓRIO COMPLETO

## 🎯 Status: CONCLUÍDO

---

## 📐 1. MAPEAMENTO DE COMPONENTES VISUAIS

### 🖥️ Tela: Dashboard (Home)

#### **Estrutura Principal:**
- **Sidebar** (left: 300px) — Desktop only
- **Frame 211** (main content area: 1428px)
  - **Navbar** (top header)
  - **Frame 209** (cards section: 420px)
  - **Frame 210** (charts & tables: 596px)
  - **Frame 206** (detailed statement: 379px)

#### **Componentes Identificados:**

**A. Sidebar (42:3097)**
- Logo "Mycash+"
- Navigation items:
  - Home (ativo com fundo verde)
  - Cartões
- User profile section:
  - Avatar
  - Nome: "Lucas Marte"
  - Email: "lucasmarte@gmail.com"

**B. Navbar (42:3099)**
- Search bar ("Pesquisar")
- Filter icon
- Date selector ("01 Jan - 31 Jan 2026")
- User avatars (3)
- "+ Nova transação" button

**C. Expense Cards (42:3103-3106) — Frame 180**
- `cards/card-despesa` (4 instâncias)
  - Aluguel: 25%, R$ 4.000,00
  - Alimentação: 15%, R$ 2.000,00
  - Mercado: 5%, R$ 1.500,00
  - Academia: 3%, R$ 120,00

**D. Summary Cards (42:3108-3110) — Frame 187**
- `resumo-saldo` (3 instâncias)
  - Saldo total: R$ 2.000,00
  - Receitas: R$ 12.000,00
  - Despesas: R$ 10.000,00

**E. Cards & Accounts Widget (42:3111-3121)**
- Header com ícone + "Cards & contas" + add button
- `cards` components (3 instâncias):
  - Nubank: R$ 120,00, Vence dia 10
  - Inter: R$ 2.300,00, Vence dia 21
  - Picpay: R$ 17.000,00, Vence dia 12

**F. Financial Flow Chart (42:3122-3162)**
- Header: "Fluxo financeiro" + legend (Receitas/Despesas)
- Y-axis: R$ 0,00 a R$ 17.500 (incrementos de R$ 2.500)
- X-axis: JAN a DEZ (12 meses)
- Graph com áreas verde (receitas) e vermelha (despesas)

**G. Upcoming Expenses Widget (42:3163-3214)**
- Header: "Próximas despesas" + add button
- `cards` components (5 instâncias):
  - "Conta de Luz"
  - R$ 154,00
  - Vence dia 21/01
  - Check icon

**H. Detailed Statement Table (42:3215-3277)**
- Header: "Extrato detalhado" + search + filter dropdown
- Columns: Membro | Datas | Descrição | Categorias | Conta/cartão | Parcelas | Valor
- Rows: 17 registros (mostrando 1-5)
- Pagination: "Mostrando 1 a 5 de 17" + controls

---

### 📊 Hierarquia Visual dos Componentes

```
home-dashboard-responsive (1728x1631)
├── Sidebar (300x1631) [Desktop only]
│   ├── Logo
│   ├── Navigation items
│   └── User profile
│
└── Frame 211 (1428x1631) [Main content]
    ├── navbar (1364x48)
    │   ├── Search
    │   ├── Filters
    │   └── Actions
    │
    ├── Frame 209 (1364x420) [Top cards]
    │   ├── Frame 208 (794x420)
    │   │   ├── Frame 180 (794x184) — Expense cards [4 cards]
    │   │   └── Frame 187 (794x206) — Summary cards [3 cards]
    │   └── Frame 183 (538x420) — Cards & accounts [3 items]
    │
    ├── Frame 210 (1364x596) [Charts & expenses]
    │   ├── Frame 194 (794x596) — Financial flow chart
    │   └── Frame 195 (538x596) — Upcoming expenses [5 items]
    │
    └── Frame 206 (1346x379) [Statement table]
        ├── Header + filters
        ├── Table (1282x151)
        └── Pagination
```

---

## 🎨 2. DESIGN SYSTEM: VARIÁVEIS E TOKENS

### 🔵 **Variáveis SEMÂNTICAS (Prioridade 1)**

#### **Cores Semânticas:**
- `Colors/Primary/primary-500`: `#D7FF00` (verde limão/amarelo)
- `Colors/Secondary/secondary-900`: `#060A11` (preto/azul escuro)
- `Colors/Secondary/secondary-50`: `#E7E8EA` (cinza claro)
- `Colors/Surface/surface-500`: `#FFFFFF` (branco)
- `Colors/Background/background-400`: `#F5F6F8` (cinza muito claro)

#### **Cores por Contexto (Brand):**
- `color/brand/700`: `#c4e703` (verde brand mais escuro)

### 🟢 **Variáveis PRIMITIVAS (Prioridade 2)**

#### **Cores Neutras:**
- `color/neutral/0`: `#ffffff` (branco)
- `color/neutral/300`: `#e5e7eb` (cinza claro)
- `color/neutral/400`: `#d1d5db` (cinza médio)
- `color/neutral/500`: `#9ca3af` (cinza médio-escuro)
- `color/neutral/1100`: `#080b12` (quase preto)

#### **Cores por Família:**
- `color/blue/600`: `#2a89ef` (azul)
- `color/green/600`: `#15be78` (verde)
- `color/red/600`: `#e61e32` (vermelho)

### 📏 **Espaçamentos (Space Tokens)**

#### **Valores Primitivos:**
- `space/0`: `0`
- `space/8`: `8px`
- `space/12`: `12px`
- `space/16`: `16px`
- `space/20`: `20px`
- `space/24`: `24px`
- `space/32`: `32px`
- `space/56`: `56px`
- `space/72`: `72px`

### 🔤 **Tipografia (Typography Tokens)**

#### **Headings:**
- `Heading/X-Small`: Inter Bold 20px, line-height 28px, weight 700
- `Heading/Small`: Inter Bold 24px, line-height 32px, weight 700
- `Heading/Medium`: Inter Bold 28px, line-height 36px, weight 700

#### **Labels:**
- `Label/X-Small`: Inter Semi Bold 12px, line-height 16px, weight 600
- `Label/Small`: Inter Semi Bold 14px, line-height 16px, weight 600
- `Label/Medium`: Inter Semi Bold 16px, line-height 20px, weight 600
- `Label/Large`: Inter Semi Bold 18px, line-height 24px, weight 600

#### **Paragraphs:**
- `Paragraph/X-Small`: Inter Regular 12px, line-height 20px, weight 400
- `Paragraph/Small`: Inter Regular 14px, line-height 20px, weight 400
- `Paragraph/Large`: Inter Regular 18px, line-height 28px, weight 400

### 🔘 **Shape/Border Radius:**
- `shape/2`: `2px`
- `shape/20`: `20px`
- `shape/100`: `100px` (círculo)

---

## 🧭 3. ESTRUTURA DE NAVEGAÇÃO

### 📱 **Desktop (≥1280px)**

**Sidebar Expandida:**
- Largura: 300px (fixa quando expandida)
- Estados: **Expanded** (texto visível) / **Collapsed** (apenas ícones)
- Componentes:
  - Logo "Mycash+"
  - Menu items (Home, Cartões, Transações, Perfil)
  - User profile (avatar + nome + email)

**Header/Navbar:**
- Altura: 48px
- Conteúdo:
  - Search bar
  - Date selector
  - User avatars
  - Action buttons ("+ Nova transação")

**Layout:**
- Sidebar empurra conteúdo (NÃO sobrepõe)
- Main content: `width: calc(100% - 300px)` (expandida) ou `width: calc(100% - 80px)` (colapsada)

---

### 📱 **Mobile/Tablet (<1280px)**

**Header Mobile:**
- Altura: ~56px (estimado)
- Componentes:
  - Menu hamburger (abre drawer)
  - Logo/título
  - Action button ("+ Nova transação")

**Drawer/Navigation Menu:**
- Overlay do lado esquerdo
- Mesmo conteúdo da Sidebar desktop
- Fecha ao clicar fora ou em item

**Layout:**
- Sidebar **NÃO renderiza** (não existe no DOM)
- Main content: `width: 100%`

---

### 🔄 **Transições entre Seções**

**Rotas Identificadas:**
- `/` → Dashboard (Home)
- `/cards` → Cartões
- `/transactions` → Transações
- `/profile` → Perfil

**Comportamento:**
- Transições suaves (React Router)
- Estado da sidebar preservado entre rotas (desktop)
- Header mobile mantém ações principais

---

## 🏗️ 4. ARQUITETURA PROPOSTA

### 📁 **Estrutura de Pastas**

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar/          # Sidebar desktop (expand/collapse)
│   │   ├── Header/            # Header mobile (<1280px)
│   │   ├── Navbar/            # Top navigation bar (desktop)
│   │   └── Container/         # Wrapper principal responsivo
│   │
│   ├── dashboard/
│   │   ├── ExpenseCards/      # 4 cards de categorias (Aluguel, Alimentação...)
│   │   ├── BalanceSummary/    # 3 cards (Saldo, Receitas, Despesas)
│   │   ├── AccountsList/      # Widget "Cards & contas"
│   │   ├── RevenueChart/      # Gráfico "Fluxo financeiro"
│   │   ├── UpcomingExpenses/  # Widget "Próximas despesas"
│   │   └── TransactionsTable/ # Tabela "Extrato detalhado"
│   │
│   ├── cards/                 # Página de Cartões
│   │   ├── CardList/
│   │   └── CardItem/
│   │
│   ├── transactions/          # Página de Transações
│   │   ├── TransactionFilters/
│   │   └── TransactionTable/
│   │
│   ├── profile/               # Página de Perfil
│   │   └── ProfileForm/
│   │
│   └── shared/                # Componentes reutilizáveis
│       ├── Button/
│       ├── Card/
│       ├── Icon/
│       ├── Input/
│       └── Pagination/
│
├── pages/
│   ├── Dashboard.tsx          # Home (compõe componentes dashboard/)
│   ├── Cards.tsx              # Página de Cartões
│   ├── Transactions.tsx       # Página de Transações
│   └── Profile.tsx            # Página de Perfil
│
├── hooks/
│   ├── useSidebar.ts          # Estado expand/collapse sidebar
│   ├── useMediaQuery.ts       # Breakpoints
│   └── useResponsive.ts       # Helpers responsivos
│
├── styles/
│   ├── variables.css          # CSS Variables (tokens do design system)
│   ├── globals.css            # Reset + base styles
│   └── utilities.css          # Utility classes (Tailwind custom)
│
├── types/
│   ├── transaction.ts
│   ├── card.ts
│   └── user.ts
│
└── services/
    ├── api.ts                 # Supabase client
    ├── transactions.ts
    └── cards.ts
```

---

### 🧩 **Hierarquia de Componentes**

```
App
└── Router
    └── Layout (Container)
        ├── Sidebar (desktop ≥1280px) OU Header (mobile <1280px)
        └── Main Content
            ├── Navbar (desktop) OU (mobile já no Header)
            └── Page Content
                ├── Dashboard → ExpenseCards, BalanceSummary, AccountsList, RevenueChart, UpcomingExpenses, TransactionsTable
                ├── Cards → CardList → CardItem[]
                ├── Transactions → TransactionFilters + TransactionTable
                └── Profile → ProfileForm
```

---

### 🎯 **Estratégia de Componentização**

#### **1. Componentes Atômicos (shared/)**
- **Button**: Variantes (primary, secondary, ghost), tamanhos (sm, md, lg)
- **Card**: Container reutilizável com padding/background
- **Icon**: Wrapper para ícones SVG (usa assets/)
- **Input**: Text input com estados (focus, error, disabled)
- **Pagination**: Controles de paginação reutilizáveis

#### **2. Componentes Moleculares (dashboard/, cards/, etc.)**
- **ExpenseCards**: 4 cards de categorias (usa Card + Icon + Progress)
- **BalanceSummary**: 3 cards de resumo (usa Card + Icon + Typography)
- **AccountsList**: Lista de contas/cartões (usa Card[] + Button)
- **RevenueChart**: Gráfico de área (biblioteca externa: recharts/victory)
- **UpcomingExpenses**: Lista de despesas futuras (usa Card[] + CheckIcon)
- **TransactionsTable**: Tabela completa (usa shared/Table ou componente custom)

#### **3. Componentes Organismos (layout/)**
- **Sidebar**: Lógica expand/collapse + navegação + profile
- **Header**: Mobile menu drawer + actions
- **Navbar**: Search + filters + date picker + actions (desktop)
- **Container**: Wrapper responsivo com padding/max-width

#### **4. Páginas (pages/)**
- **Dashboard**: Compõe todos os componentes dashboard/
- **Cards**: Compõe CardList
- **Transactions**: Compõe TransactionFilters + TransactionTable
- **Profile**: Compõe ProfileForm

---

### 🎨 **Sistema de Design Tokens (CSS Variables)**

**Arquivo: `src/styles/variables.css`**

```css
:root {
  /* === SEMÂNTICAS === */
  --color-primary: var(--color-brand-700); /* #D7FF00 */
  --color-secondary: var(--color-secondary-900); /* #060A11 */
  --color-surface: var(--color-surface-500); /* #FFFFFF */
  --color-background: var(--color-background-400); /* #F5F6F8 */
  
  /* === PRIMITIVAS === */
  --color-neutral-0: #ffffff;
  --color-neutral-300: #e5e7eb;
  --color-neutral-400: #d1d5db;
  --color-neutral-500: #9ca3af;
  --color-neutral-1100: #080b12;
  
  --color-blue-600: #2a89ef;
  --color-green-600: #15be78;
  --color-red-600: #e61e32;
  
  /* === ESPAÇAMENTOS === */
  --spacing-0: 0;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-56: 56px;
  --spacing-72: 72px;
  
  /* === TIPOGRAFIA === */
  --font-family: 'Inter', sans-serif;
  
  --font-heading-xs: 700 20px/28px 'Inter';
  --font-heading-sm: 700 24px/32px 'Inter';
  --font-heading-md: 700 28px/36px 'Inter';
  
  --font-label-xs: 600 12px/16px 'Inter';
  --font-label-sm: 600 14px/16px 'Inter';
  --font-label-md: 600 16px/20px 'Inter';
  --font-label-lg: 600 18px/24px 'Inter';
  
  --font-paragraph-xs: 400 12px/20px 'Inter';
  --font-paragraph-sm: 400 14px/20px 'Inter';
  --font-paragraph-lg: 400 18px/28px 'Inter';
  
  /* === BORDAS === */
  --radius-sm: 2px;
  --radius-md: 20px;
  --radius-full: 100px;
  
  /* === BREAKPOINTS (Tailwind) === */
  /* md: 768px | lg: 1280px | xl: 1920px */
}
```

---

### 📐 **Estratégia Responsiva**

#### **Desktop (≥1280px)**
- Sidebar fixa (300px expanded / 80px collapsed)
- Main content: `calc(100% - sidebar-width)`
- Grid: 3-4 colunas para cards
- Padding: `px-8` (32px)

#### **Tablet (768px - 1279px)**
- Sem sidebar (renderização condicional)
- Header mobile ativo
- Grid: 2 colunas para cards
- Padding: `px-6` (24px)

#### **Mobile (<768px)**
- Header mobile com drawer
- Grid: 1 coluna (stack)
- Padding: `px-4` (16px)
- Touch targets: mínimo 44x44px

---

### 🔧 **Hooks Customizados**

**useSidebar.ts**
```typescript
- isExpanded: boolean
- toggle: () => void
- collapse: () => void
- expand: () => void
```

**useMediaQuery.ts**
```typescript
- isMobile: boolean (<768px)
- isTablet: boolean (768px - 1279px)
- isDesktop: boolean (≥1280px)
```

**useResponsive.ts**
```typescript
- getPadding: () => string
- getMaxWidth: () => string
- shouldRenderSidebar: () => boolean
```

---

## ✅ **CHECKLIST DE COMPREENSÃO**

### **Regras Críticas Entendidas:**
- ✅ Hierarquia de variáveis: **1º Semântica → 2º Primitiva → 3º Conversão → Nunca hardcoded**
- ✅ Layout fluido: **width: 100%** em containers principais, **max-width** para limitação
- ✅ Sidebar: **Desktop apenas** (≥1280px), estados expand/collapse
- ✅ Mobile: **Header mobile** com drawer, sidebar não renderiza
- ✅ Breakpoints: **Mobile (<768px) | Tablet (768-1279px) | Desktop (≥1280px)**
- ✅ Responsividade: **Mobile-first**, breakpoints evoluem layout (não recriam)

### **Design System Mapeado:**
- ✅ Variáveis semânticas identificadas
- ✅ Variáveis primitivas identificadas
- ✅ Espaçamentos mapeados
- ✅ Tipografia mapeada
- ✅ Cores mapeadas

### **Componentes Identificados:**
- ✅ Dashboard: 6 componentes principais
- ✅ Sidebar: estrutura e estados
- ✅ Header/Navbar: desktop vs mobile
- ✅ Navegação: 4 rotas principais

---

## 🚀 **PRÓXIMOS PASSOS**

Após aprovação desta análise:

**PROMPT 1**: Estrutura Base
- Criar `src/styles/variables.css` (tokens)
- Setup Tailwind com tokens customizados
- Criar `Container` e `Layout` base
- Implementar `useSidebar` e `useMediaQuery` hooks

**PROMPT 2**: Layout Desktop
- Implementar `Sidebar` (expand/collapse)
- Implementar `Navbar` (desktop)
- Integrar com React Router

**PROMPT 3**: Layout Mobile
- Implementar `Header` mobile
- Drawer/navigation menu
- Responsividade completa

---

## 📋 **RESUMO EXECUTIVO**

### **Componentes Identificados:** 15+
### **Variáveis Mapeadas:** 30+ tokens
### **Rotas:** 4 (Dashboard, Cartões, Transações, Perfil)
### **Breakpoints:** 3 (Mobile, Tablet, Desktop)
### **Arquitetura:** Atomic Design + Páginas compostas

**Status:** ✅ **Análise Completa — Pronto para Implementação**

---

**Confirmação:** 
✅ Hierarquia de variáveis compreendida e documentada
✅ Estrutura de navegação mapeada
✅ Componentes visuais identificados
✅ Design system tokens catalogados
✅ Arquitetura proposta e validada

**Aguardando aprovação para PROMPT 1: Estrutura Base**
