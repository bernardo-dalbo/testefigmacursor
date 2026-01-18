# mycash+ — Documentação

## Progresso

- [x] PROMPT 0: Análise e Planejamento Inicial
- [x] PROMPT 1: Estrutura Base e Configuração
- [ ] PROMPT 2: Sistema de Layout e Navegação Desktop
- [ ] PROMPT 3: Sistema de Layout e Navegação Mobile
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

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 1*

---

## PROMPT 3: Sistema de Layout e Navegação Mobile

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 2*

---

## PROMPT 4: Context Global e Gerenciamento de Estado

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 3*

---

## PROMPT 5: Cards de Resumo Financeiro

**Status:** ⏳ **PENDENTE** | **Data:** — | **Build:** —

*Aguardando conclusão do PROMPT 4*

---

## PROMPT 6: Header do Dashboard com Controles

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
