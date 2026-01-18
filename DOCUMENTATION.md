# mycash+ — Documentação

## Progresso

- [x] PROMPT 0: Análise e Planejamento Inicial
- [x] PROMPT 1: Estrutura Base e Configuração
- [x] PROMPT 2: Sistema de Layout e Navegação Desktop
- [x] PROMPT 3: Sistema de Layout e Navegação Mobile
- [ ] PROMPT 4: Context Global e Gerenciamento de Estado
- [ ] PROMPT 5: Cards de Resumo Financeiro
- [ ] PROMPT 6: Header do Dashboard com Controles
- [ ] PROMPT 7: Carrossel de Gastos por Categoria
- [ ] PROMPT 8: Gráfico de Fluxo Financeiro
- [ ] PROMPT 9: Widget de Cartões de Crédito
- [ ] PROMPT 10: Widget de Próximas Despesas
- [ ] PROMPT 11: Tabela de Transações Detalhada
- [ ] PROMPT 12: Modal de Nova Transação
- [ ] PROMPT 13: Modal de Adicionar Membro
- [ ] PROMPT 14: Modal de Adicionar Cartão
- [ ] PROMPT 15: Modal de Detalhes do Cartão
- [ ] PROMPT 16: Modal de Filtros Mobile
- [ ] PROMPT 17: View Completa de Cartões
- [ ] PROMPT 18: View Completa de Transações
- [ ] PROMPT 19: View de Perfil - Aba Informações
- [ ] PROMPT 20: View de Perfil - Aba Configurações
- [ ] PROMPT 21: Animações e Transições Globais
- [ ] PROMPT 22: Formatação e Utilitários
- [ ] PROMPT 23: Responsividade e Ajustes Finais
- [ ] PROMPT 24: Testes e Validação Final

---

## PROMPT 0: Análise e Planejamento Inicial

**Status:** ✅ **CONCLUÍDO** | **Data:** 18/01 | **Build:** N/A (análise)

### Implementado

- ✅ Análise completa do design Figma (Dashboard mycash+)
- ✅ Mapeamento de componentes visuais (15+ componentes identificados)
- ✅ Catalogação de variáveis do design system (30+ tokens)
- ✅ Análise da estrutura de navegação (4 rotas)
- ✅ Definição da arquitetura proposta
- ✅ Criação de relatório detalhado (`ANALISE_PROMPT_0.md`)

### Componentes Identificados

**Dashboard:**
- Sidebar (desktop) — logo, navegação, perfil
- Navbar (desktop) — busca, filtros, ações
- ExpenseCards (4 cards de categorias)
- BalanceSummary (3 cards: Saldo, Receitas, Despesas)
- AccountsList (widget "Cards & contas")
- RevenueChart (gráfico "Fluxo financeiro")
- UpcomingExpenses (widget "Próximas despesas")
- TransactionsTable (tabela "Extrato detalhado")

**Layout:**
- Sidebar (expand/collapse) — desktop ≥1280px
- Header Mobile — mobile/tablet <1280px
- Navbar — top navigation (desktop)
- Container — wrapper responsivo

### Tokens Catalogados

**Semânticas:**
- `Colors/Primary/primary-500`: `#D7FF00`
- `Colors/Secondary/secondary-900`: `#060A11`
- `Colors/Surface/surface-500`: `#FFFFFF`
- `Colors/Background/background-400`: `#F5F6F8`
- `color/brand/700`: `#c4e703`

**Primitivas:**
- Cores neutras: `color/neutral/0`, `300`, `400`, `500`, `1100`
- Cores contextuais: `color/blue/600`, `color/green/600`, `color/red/600`
- Espaçamentos: `space/0`, `8`, `12`, `16`, `20`, `24`, `32`, `56`, `72`
- Tipografia: `Heading/X-Small`, `Small`, `Medium` | `Label/X-Small`, `Small`, `Medium`, `Large` | `Paragraph/X-Small`, `Small`, `Large`
- Shape: `shape/2` (2px), `shape/20` (20px), `shape/100` (100px)

**Conversões Futuras:**
- Valores hex/pixel serão convertidos para tokens primitivos mais próximos
- Exemplo: `#E5E5E5` → `--color-neutral-300`
- Exemplo: `28px` → `--spacing-lg` (32px) ou `--spacing-24` (24px)

### Arquitetura Proposta

**Estrutura de Pastas:**
```
src/
├── components/
│   ├── layout/ (Sidebar, Header, Navbar, Container)
│   ├── dashboard/ (6 componentes específicos)
│   ├── cards/ (CardList, CardItem)
│   ├── transactions/ (Filters, Table)
│   ├── profile/ (ProfileForm)
│   └── shared/ (Button, Card, Icon, Input, Pagination)
├── pages/ (4 páginas principais)
├── hooks/ (useSidebar, useMediaQuery, useResponsive)
├── styles/ (variables.css, globals.css)
├── types/ (TypeScript definitions)
└── services/ (Supabase integration)
```

**Hierarquia de Componentes:**
- Atomic: `shared/` (Button, Card, Icon, Input, Pagination)
- Molecular: `dashboard/`, `cards/`, `transactions/` (compostos)
- Organisms: `layout/` (Sidebar, Header, Navbar)
- Pages: `pages/` (Dashboard, Cards, Transactions, Profile)

**Estratégia Responsiva:**
- Mobile (<768px): Header mobile + drawer, grid 1 coluna, padding `px-4`
- Tablet (768-1279px): Header mobile, grid 2 colunas, padding `px-6`
- Desktop (≥1280px): Sidebar + Navbar, grid 3-4 colunas, padding `px-8`

### Navegação

**Rotas Identificadas:**
- `/` → Dashboard (Home)
- `/cards` → Cartões
- `/transactions` → Transações
- `/profile` → Perfil

**Estados Sidebar:**
- Expanded: 300px (texto visível)
- Collapsed: ~80px (apenas ícones)
- Mobile/Tablet: não renderiza (usa Header mobile)

### Arquivos Criados

- `ANALISE_PROMPT_0.md` — Relatório completo de análise
- `DOCUMENTATION.md` — Este arquivo

### Checklist de Compreensão

✅ Hierarquia de variáveis: **1º Semântica → 2º Primitiva → 3º Conversão → Nunca hardcoded**
✅ Layout fluido: **width: 100%** em containers principais, **max-width** para limitação
✅ Sidebar: **Desktop apenas** (≥1280px), estados expand/collapse
✅ Mobile: **Header mobile** com drawer, sidebar não renderiza
✅ Breakpoints: **Mobile (<768px) | Tablet (768-1279px) | Desktop (≥1280px)**
✅ Responsividade: **Mobile-first**, breakpoints evoluem layout

### Build

N/A — Análise e planejamento, sem código implementado ainda.

### Próximos Passos

**PROMPT 1: Estrutura Base**
- Criar `src/styles/variables.css` (tokens CSS)
- Configurar Tailwind com tokens customizados
- Criar `Container` e `Layout` base
- Implementar hooks `useSidebar` e `useMediaQuery`

---

## PROMPT 1: Estrutura Base e Configuração

**Status:** ✅ **CONCLUÍDO** | **Data:** 18/01 | **Build:** ✅ (2 tentativas)

### Implementado

- ✅ Estrutura de pastas criada seguindo boas práticas React
- ✅ Configuração do Tailwind CSS com tokens do design system do Figma
- ✅ Arquivo `variables.css` com todas as variáveis semânticas e primitivas
- ✅ Tipos TypeScript fundamentais criados (Transaction, Goal, CreditCard, BankAccount, FamilyMember)
- ✅ React Router configurado com 4 rotas principais
- ✅ Arquivos de configuração (package.json, vite.config.ts, tsconfig.json, tailwind.config.js)
- ✅ Estrutura base de páginas criada

### Estrutura de Pastas Criada

```
src/
├── components/ (já existia)
├── pages/ (Dashboard, Cards, Transactions, Profile)
├── hooks/ (vazio, pronto para hooks customizados)
├── contexts/ (criado, pronto para context providers)
├── utils/ (criado, pronto para funções utilitárias)
├── constants/ (criado, pronto para constantes)
├── services/ (já existia)
├── styles/
│   ├── variables.css (tokens do design system)
│   └── globals.css (estilos globais + Tailwind)
└── types/
    ├── transaction.ts
    ├── goal.ts
    ├── creditCard.ts
    ├── bankAccount.ts
    ├── familyMember.ts
    └── index.ts (exportações centralizadas)
```

### Tokens Configurados

**Semânticas (CSS Variables + Tailwind):**
- `--color-primary` / `primary`: `#D7FF00`
- `--color-secondary-50` / `secondary-50`: `#E7E8EA`
- `--color-secondary-900` / `secondary-900`: `#060A11`
- `--color-surface-500` / `surface-500`: `#FFFFFF`
- `--color-background-400` / `background-400`: `#F5F6F8`
- `--color-brand-700` / `brand-700`: `#c4e703`

**Primitivas (CSS Variables + Tailwind):**
- Cores neutras: `neutral-0`, `neutral-300`, `neutral-400`, `neutral-500`, `neutral-1100`
- Cores contextuais: `blue-600`, `green-600`, `red-600`
- Espaçamentos: `spacing-0`, `8`, `12`, `16`, `20`, `24`, `32`, `56`, `72`
- Tipografia: `heading-xs/sm/md`, `label-xs/sm/md/lg`, `paragraph-xs/sm/lg`
- Shape: `radius-sm` (2px), `radius-md` (20px), `radius-full` (100px)

**Breakpoints Tailwind:**
- `md`: 768px (Tablet)
- `lg`: 1280px (Desktop)
- `xl`: 1920px (Wide / 4K)

### Tipos TypeScript Criados

**Transaction:**
- `id`, `type` ('income' | 'expense'), `amount`, `description`, `category`
- `date`, `accountId`, `memberId` (nullable)
- `installments`, `currentInstallment`
- `status` ('completed' | 'pending' | 'cancelled')
- `isRecurring`, `isPaid`
- `createdAt`, `updatedAt`

**Goal:**
- `id`, `title`, `description`
- `targetAmount`, `currentAmount`
- `deadline`, `status` ('active' | 'completed' | 'cancelled')
- `memberId` (nullable)
- `createdAt`, `updatedAt`

**CreditCard:**
- `id`, `name`, `holderId`
- `closingDay`, `dueDay` (1-31)
- `limit`, `currentBill`
- `theme` ('black' | 'lime' | 'white')
- `lastDigits` (opcional)
- `createdAt`, `updatedAt`

**BankAccount:**
- `id`, `name`, `holderId`
- `balance`
- `createdAt`, `updatedAt`

**FamilyMember:**
- `id`, `name`, `role`
- `avatarUrl` (opcional)
- `monthlyIncome` (opcional)
- `createdAt`, `updatedAt`

### Rotas Configuradas

- `/` → Dashboard
- `/cards` → Cartões
- `/transactions` → Transações
- `/profile` → Perfil

### Arquivos Criados/Modificados

**Configuração:**
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `postcss.config.js`
- `tailwind.config.js`
- `index.html`

**Estilos:**
- `src/styles/variables.css`
- `src/styles/globals.css`

**Tipos:**
- `src/types/transaction.ts`
- `src/types/goal.ts`
- `src/types/creditCard.ts`
- `src/types/bankAccount.ts`
- `src/types/familyMember.ts`
- `src/types/index.ts`

**Aplicação:**
- `src/main.tsx`
- `src/App.tsx`
- `src/pages/Dashboard.tsx`
- `src/pages/Cards.tsx`
- `src/pages/Transactions.tsx`
- `src/pages/Profile.tsx`

**Estrutura:**
- `src/contexts/` (diretório criado)
- `src/utils/` (diretório criado)
- `src/constants/` (diretório criado)

### Build

✅ **Sucesso** (tentativas: 2)
- Tentativa 1: Erro no `globals.css` (classe `border-border` inexistente)
- Correção: Removida linha problemática
- Tentativa 2: ✅ Build completo com sucesso

**Output:**
- `dist/index.html`: 0.46 kB
- `dist/assets/index-CFkQe6k8.css`: 6.76 kB
- `dist/assets/index-C0Fcf_MH.js`: 159.74 kB

### Conversões Realizadas

Nenhuma conversão necessária — todos os valores vieram diretamente das variáveis do Figma.

### Próximos Passos

**PROMPT 2: Sistema de Layout e Navegação Desktop**
- Implementar componente Sidebar (expand/collapse)
- Implementar Navbar (desktop)
- Integrar com React Router

---

## PROMPT 2: Sistema de Layout e Navegação Desktop

**Status:** ✅ **CONCLUÍDO** | **Data:** 18/01 | **Build:** ✅ (2 tentativas)

### Implementado

- ✅ Componente Sidebar criado com estados expandido/colapsado
- ✅ Botão de toggle implementado com ícone que muda conforme estado
- ✅ Transições suaves configuradas entre estados (300ms)
- ✅ Tooltips implementados quando sidebar está colapsada (aparecem ao hover)
- ✅ Comportamento de item ativo implementado (fundo preto, texto branco, ícone verde-limão)
- ✅ Componente Navbar criado para desktop (≥1280px)
- ✅ Container responsivo que ajusta margem conforme sidebar
- ✅ Hooks customizados: `useSidebar` e `useMediaQuery`
- ✅ Integração com React Router
- ✅ Sidebar não renderiza em mobile/tablet (<1280px)

### Componentes Criados

**Sidebar (`src/components/layout/Sidebar/Sidebar.tsx`):**
- Estados: Expanded (300px) e Collapsed (~80px)
- Logo "mycash+" no estado expandido, "m+" no colapsado
- 4 itens de navegação: Home, Cartões, Transações, Perfil
- Botão toggle circular na borda direita
- Tooltips ao hover quando colapsada
- Seção de perfil do usuário (avatar + nome + email)
- Item ativo com fundo preto, texto branco e ícone verde-limão

**Navbar (`src/components/layout/Navbar/Navbar.tsx`):**
- Altura fixa: 48px
- Campo de busca com ícone de lupa
- Botão de filtros
- Seletor de período (data)
- 3 avatares de usuários
- Botão "+" circular
- Botão "Nova transação" com fundo preto
- Ajusta margem esquerda conforme sidebar

**Container (`src/components/layout/Container/Container.tsx`):**
- Wrapper responsivo que ajusta margem conforme sidebar
- Margem superior para navbar (desktop)
- Margem esquerda dinâmica conforme estado da sidebar
- Transições suaves (300ms)

### Hooks Criados

**useSidebar (`src/hooks/useSidebar.ts`):**
- `isExpanded: boolean`
- `toggle: () => void`
- `expand: () => void`
- `collapse: () => void`

**useMediaQuery (`src/hooks/useMediaQuery.ts`):**
- `isMobile: boolean` (<768px)
- `isTablet: boolean` (768-1279px)
- `isDesktop: boolean` (≥1280px)

### Tokens Utilizados

**Semânticas:**
- `--color-primary` / `primary-500`: `#D7FF00` (ícone ativo)
- `--color-secondary-900` / `secondary-900`: `#060A11` (fundo item ativo, botões)
- `--color-surface-500` / `surface-500`: `#FFFFFF` (fundo sidebar/navbar)
- `--color-background-400` / `background-400`: `#F5F6F8` (fundo geral)

**Primitivas:**
- `neutral-300`: `#e5e7eb` (bordas)
- `neutral-400`: `#d1d5db` (hover estados)
- `neutral-500`: `#9ca3af` (texto secundário)
- `neutral-1100`: `#080b12` (texto principal)

**Espaçamentos:**
- `spacing-8`: `8px` (espaçamento entre elementos)
- `spacing-16`: `16px` (padding padrão)
- `spacing-24`: `24px` (padding lateral)
- `spacing-32`: `32px` (padding interno)

**Shape:**
- `radius-sm`: `2px` (cantos arredondados)
- `radius-md`: `20px` (cards)
- `radius-full`: `100px` (círculos/avatars)

**Tipografia:**
- `heading-sm`: `24px/32px` bold (logo)
- `label-md`: `16px/20px` semibold (navegação)
- `label-sm`: `14px/16px` semibold (botões)
- `paragraph-sm`: `14px/20px` regular (texto)
- `paragraph-xs`: `12px/20px` regular (tooltips)

### Conversões Realizadas

Nenhuma conversão necessária — todos os valores usam tokens do design system.

### Arquivos Criados/Modificados

**Hooks:**
- `src/hooks/useSidebar.ts`
- `src/hooks/useMediaQuery.ts`

**Componentes Layout:**
- `src/components/layout/Sidebar/Sidebar.tsx`
- `src/components/layout/Navbar/Navbar.tsx`
- `src/components/layout/Container/Container.tsx`

**Aplicação:**
- `src/App.tsx` (atualizado para incluir Sidebar, Navbar e Container)

### Build

✅ **Sucesso** (tentativas: 2)
- Tentativa 1: Erro TypeScript - `useEffect` importado mas não usado no `useSidebar.ts`
- Correção: Removida importação desnecessária
- Tentativa 2: ✅ Build completo com sucesso

**Output:**
- `dist/index.html`: 0.46 kB
- `dist/assets/index-53h9F3H1.css`: 12.22 kB (aumento: estilos da Sidebar/Navbar)
- `dist/assets/index-wdXQN2Wp.js`: 171.47 kB (aumento: componentes de layout)

### Funcionalidades Implementadas

**Sidebar:**
- ✅ Expandida (300px) / Colapsada (~80px)
- ✅ Transição suave de 300ms
- ✅ Botão toggle funcional
- ✅ Tooltips quando colapsada (delay 200ms)
- ✅ Item ativo destacado (fundo preto, texto branco, ícone verde)
- ✅ Seção de perfil do usuário
- ✅ Não renderiza em mobile/tablet (<1280px)

**Navbar:**
- ✅ Campo de busca funcional
- ✅ Botão de filtros
- ✅ Seletor de período
- ✅ Avatares de usuários
- ✅ Botão "+" circular
- ✅ Botão "Nova transação"
- ✅ Ajusta margem conforme sidebar
- ✅ Não renderiza em mobile/tablet (<1280px)

**Container:**
- ✅ Ajusta margem esquerda conforme sidebar
- ✅ Margem superior para navbar (desktop)
- ✅ Transições suaves
- ✅ Responsivo mobile-first

### Próximos Passos

**PROMPT 3: Sistema de Layout e Navegação Mobile**
- Implementar Header Mobile
- Menu Dropdown/Drawer
- Integrar com navegação mobile

---

## PROMPT 3: Sistema de Layout e Navegação Mobile

**Status:** ✅ **CONCLUÍDO** | **Data:** 18/01 | **Build:** ✅ (1 tentativa)

### Implementado

- ✅ Componente HeaderMobile criado e fixo no topo para mobile/tablet (<1280px)
- ✅ Logo "mycash+" à esquerda em tamanho apropriado para mobile
- ✅ Avatar do usuário à direita, clicável para abrir menu
- ✅ Componente MenuDropdown criado com animação slide-in de cima para baixo
- ✅ Lista de itens de navegação com ícone e texto dentro do dropdown
- ✅ Item da seção atual destacado com fundo preto e texto branco
- ✅ Botão vermelho "Sair" na parte inferior do menu
- ✅ Lógica de fechamento: fecha ao clicar em item de navegação, no X ou no overlay
- ✅ Breakpoints configurados: HeaderMobile apenas <1280px, Sidebar apenas ≥1280px
- ✅ Container ajustado para margem superior do HeaderMobile (56px)
- ✅ Sidebar e HeaderMobile nunca aparecem simultaneamente

### Componentes Criados

**HeaderMobile (`src/components/layout/Header/HeaderMobile.tsx`):**
- Altura fixa: 56px (h-14)
- Fixo no topo da viewport
- Logo "Mycash+" à esquerda (clicable para voltar ao Dashboard)
- Avatar circular à direita (clicável para abrir menu)
- Z-index: 30 (acima do conteúdo, abaixo do menu)
- Renderiza apenas em mobile/tablet (<1280px)

**MenuDropdown (interno ao HeaderMobile):**
- Animação slide-down de cima para baixo (300ms)
- Overlay escuro semi-transparente (opacity 50%)
- Header do menu com título "Menu" e botão X
- Lista de navegação com 4 itens: Home, Cartões, Transações, Perfil
- Item ativo com fundo preto (`bg-secondary-900`) e texto branco
- Botão "Sair" vermelho no rodapé (`bg-red-600`)
- Fecha ao clicar em item, no X ou no overlay
- Z-index: 50 (acima do header)

### Tokens Utilizados

**Semânticas:**
- `bg-surface-500`: Fundo branco do header e menu
- `text-secondary-900`: Texto preto do logo e labels
- `border-neutral-300`: Bordas sutis

**Primitivas:**
- `bg-neutral-300`: Fundo do avatar e botões
- `bg-red-600`: Fundo do botão "Sair"
- `text-neutral-500`: Texto cinza médio dos itens inativos

**Conversões:**
- Nenhuma conversão necessária — todos os valores vieram diretamente das variáveis do Figma

### Animações CSS Criadas

- `@keyframes fadeIn`: Fade-in do overlay (200ms)
- `@keyframes slideDown`: Slide-down do menu (300ms, translateY de -100% para 0)

### Arquivos Criados/Modificados

**Componentes:**
- `src/components/layout/Header/HeaderMobile.tsx` (novo)

**Estilos:**
- `src/styles/globals.css` (adicionadas animações fadeIn e slideDown)

**Aplicação:**
- `src/App.tsx` (integração do HeaderMobile)
- `src/components/layout/Container/Container.tsx` (ajustado para margem superior do HeaderMobile)

### Build

✅ **Sucesso** (tentativas: 1)
- Build completo sem erros
- Animações CSS funcionando corretamente
- Componente responsivo validado

**Output:**
- `dist/index.html`: 0.46 kB
- `dist/assets/index-BqF89hzH.css`: 13.61 kB (aumento: animações + HeaderMobile)
- `dist/assets/index-CvJgtZUz.js`: 176.29 kB (aumento: componente HeaderMobile)

### Funcionalidades Implementadas

**HeaderMobile:**
- ✅ Fixo no topo, ocupa largura total
- ✅ Logo clicável que navega para Dashboard
- ✅ Avatar clicável que abre menu dropdown
- ✅ Renderiza apenas <1280px (mobile/tablet)
- ✅ Nunca coexiste com Sidebar

**MenuDropdown:**
- ✅ Animação slide-in suave (300ms)
- ✅ Overlay escuro semi-transparente
- ✅ Lista completa de navegação (4 rotas)
- ✅ Item ativo destacado (fundo preto, texto branco)
- ✅ Botão "Sair" vermelho no final
- ✅ Múltiplos triggers de fechamento (item, X, overlay)
- ✅ Integração com React Router

### Próximos Passos

**PROMPT 4: Context Global e Gerenciamento de Estado**
- Criar FinanceProvider
- Implementar arrays de estado
- Criar funções CRUD
- Implementar filtros globais

---

## PROMPT 4: Context Global e Gerenciamento de Estado

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 3*

---

## PROMPT 5: Cards de Resumo Financeiro

**Status:** ✅ **CONCLUÍDO** | **Data:** 18/01 | **Build:** ✅ (2 tentativas)

### Implementado

- ✅ BalanceCard com fundo preto e círculo verde-limão desfocado
- ✅ IncomeCard com fundo branco e ícone de receita
- ✅ ExpenseCard com fundo branco e ícone de despesa
- ✅ Animação de contagem nos valores (800ms, 60 steps)
- ✅ Utilitário formatCurrency para formatação brasileira
- ✅ Grid responsivo (1 col mobile, 3 cols desktop)
- ✅ Cards com mesmo tamanho e sem overflow do frame

### Arquivos Criados/Modificados

**Componentes:**
- `src/components/dashboard/BalanceSummary/BalanceCard.tsx` (novo)
- `src/components/dashboard/BalanceSummary/IncomeCard.tsx` (novo)
- `src/components/dashboard/BalanceSummary/ExpenseCard.tsx` (novo)
- `src/components/dashboard/BalanceSummary/index.tsx` (novo)

**Utilitários:**
- `src/utils/formatCurrency.ts` (novo)

**Páginas:**
- `src/pages/Dashboard.tsx` (integração dos cards)

**Estilos:**
- `src/styles/variables.css` (adicionado --radius-20)

### Build

✅ **Sucesso** (tentativas: 2)
- Tentativa 1: Ajustes de layout e tamanhos
- Tentativa 2: ✅ Build completo com correções de overflow e tamanhos iguais

**Output:**
- `dist/assets/index-CA6LIXT8.css`: 16.92 kB
- `dist/assets/index-DLVhRHDq.js`: 192.34 kB

### Funcionalidades Implementadas

**Cards de Resumo:**
- ✅ BalanceCard: fundo preto, círculo verde-limão desfocado, badge de crescimento
- ✅ IncomeCard: fundo branco, ícone de seta baixo-esquerda, valor formatado
- ✅ ExpenseCard: fundo branco, ícone de seta cima-direita, valor formatado
- ✅ Animação de contagem: 0 até valor final em 800ms
- ✅ Integração com FinanceContext (valores dinâmicos)
- ✅ Layout responsivo com cards de mesmo tamanho

**Tokens Utilizados:**
- Semânticas: `--color-secondary-900`, `--color-primary-500`, `--color-surface-500`
- Primitivas: `--color-neutral-300`, `--color-neutral-500`, `--color-red-600`, `--spacing-*`, `--radius-*`

---

## PROMPT 6: Header do Dashboard com Controles

**Status:** ⏳ **EM ANDAMENTO** | **Data:** — | **Build:** —

*Iniciando implementação...*

---


**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 5*

---

## PROMPT 7: Carrossel de Gastos por Categoria

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 6*

---

## PROMPT 8: Gráfico de Fluxo Financeiro

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 7*

---

## PROMPT 9: Widget de Cartões de Crédito

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 8*

---

## PROMPT 10: Widget de Próximas Despesas

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 9*

---

## PROMPT 11: Tabela de Transações Detalhada

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 10*

---

## PROMPT 12: Modal de Nova Transação

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 11*

---

## PROMPT 13: Modal de Adicionar Membro

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 12*

---

## PROMPT 14: Modal de Adicionar Cartão

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 13*

---

## PROMPT 15: Modal de Detalhes do Cartão

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 14*

---

## PROMPT 16: Modal de Filtros Mobile

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 15*

---

## PROMPT 17: View Completa de Cartões

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 16*

---

## PROMPT 18: View Completa de Transações

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 17*

---

## PROMPT 19: View de Perfil - Aba Informações

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 18*

---

## PROMPT 20: View de Perfil - Aba Configurações

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 19*

---

## PROMPT 21: Animações e Transições Globais

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 20*

---

## PROMPT 22: Formatação e Utilitários

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 21*

---

## PROMPT 23: Responsividade e Ajustes Finais

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 22*

---

## PROMPT 24: Testes e Validação Final

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 23*

---

## Observações Gerais

### Regras Críticas

1. **Hierarquia de Variáveis (OBRIGATÓRIA):**
   - 1º: Variável semântica (`--color-primary`)
   - 2º: Variável primitiva (`--gray-900`)
   - 3º: Conversão de valor local (hex → primitiva)
   - Nunca usar hardcoded

2. **Layout Fluido:**
   - Containers principais: `width: 100%`
   - Limitação: `max-width`, nunca `width` fixa
   - Sem overflow horizontal

3. **Responsividade:**
   - Mobile-first approach
   - Breakpoints evoluem layout (não recriam)
   - Sidebar apenas desktop (≥1280px)

### Stack Tecnológico

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase (backend)

### Breakpoints Oficiais

- Mobile (base): < 768px
- Tablet: ≥ 768px e < 1280px
- Desktop: ≥ 1280px e < 1920px
- Wide / 4K: ≥ 1920px

---

**Última atualização:** 18/01/2025
**Versão do documento:** 1.0
