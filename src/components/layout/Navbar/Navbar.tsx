import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSidebar } from '../../../hooks/useSidebar';
import { useFinance } from '../../../contexts/FinanceContext';
import { useState, useEffect, useRef } from 'react';
import FilterPopover from '../../dashboard/FilterPopover/FilterPopover';
import { formatDateRange } from '../../../utils/formatDate';

/**
 * Componente Navbar - Barra de navegação superior (desktop ≥1280px)
 * Baseado no design do Figma MCP
 * Posicionamento: Frame 211 (x=32, y=12) com padding de 32px
 */
export default function Navbar() {
  const { isDesktop } = useMediaQuery();
  const { isExpanded } = useSidebar();
  const { 
    searchText, 
    setSearchText, 
    dateRange, 
    setDateRange,
    selectedMember,
    setSelectedMember,
    familyMembers
  } = useFinance();
  const [localSearchText, setLocalSearchText] = useState(searchText);
  const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  // Inicializa dateRange com o mês atual se não estiver definido
  useEffect(() => {
    if (!dateRange.startDate || !dateRange.endDate) {
      const now = new Date();
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      setDateRange({ startDate: firstDay, endDate: lastDay });
    }
  }, [dateRange, setDateRange]);

  // Navbar só aparece no desktop
  if (!isDesktop) {
    return null;
  }

  // Largura do sidebar para cálculo do left
  const sidebarWidth = isExpanded ? 300 : 80;

  // Atualiza searchText no contexto após delay (debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchText(localSearchText);
    }, 300); // 300ms de delay para evitar muitas atualizações

    return () => clearTimeout(timer);
  }, [localSearchText, setSearchText]);

  return (
    <nav 
      className="
        fixed top-[12px]
        right-0
        transition-all duration-300 ease-in-out
        flex items-center justify-between
        px-[var(--spacing-32)]
        h-[48px]
        z-10
      "
      style={{
        left: `${sidebarWidth}px`
      }}
    >
      {/* Left: Search, Filter, Date Picker e Members */}
      <div className="flex gap-[var(--spacing-8)] items-center">
        {/* Grupo: Search, Filter e Date Picker */}
        <div className="flex gap-[var(--spacing-8)] items-center">
          {/* Search Bar */}
          <div className="
            border border-neutral-500
            flex gap-[var(--spacing-8)]
            items-center
            px-[var(--spacing-24)]
            py-[var(--spacing-12)]
            rounded-[var(--radius-full)]
            w-[175px]
            focus-within:border-primary-500
            focus-within:ring-2
            focus-within:ring-primary-500/20
            transition-all duration-200
          ">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 13L10 10" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="text"
              value={localSearchText}
              onChange={(e) => setLocalSearchText(e.target.value)}
              placeholder="Pesquisar"
              className="
                text-[14px] font-normal leading-[20px] tracking-[0.3px] 
                text-neutral-1100
                bg-transparent
                border-none
                outline-none
                flex-1
                placeholder:text-neutral-500
              "
            />
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              ref={filterButtonRef}
              onClick={() => setIsFilterPopoverOpen(!isFilterPopoverOpen)}
              className="
                flex items-center
                p-[12px]
                transition-colors duration-200
                hover:bg-neutral-300
                rounded-radius-sm
              "
              aria-label="Filtros"
            >
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4H13M5 8H11M7 12H9" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            <FilterPopover
              isOpen={isFilterPopoverOpen}
              onClose={() => setIsFilterPopoverOpen(false)}
              anchorEl={filterButtonRef.current}
            />
          </div>

          {/* Date Picker */}
          <button
            className="
              border border-neutral-500
              flex gap-[var(--spacing-8)]
              items-center justify-center
              px-[var(--spacing-24)]
              py-[var(--spacing-12)]
              rounded-[var(--radius-full)]
              hover:border-primary-500
              transition-colors duration-200
            "
            aria-label="Selecionar período"
            title="Funcionalidade será implementada no futuro"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="10" height="8" rx="1" stroke="var(--color-neutral-1100)" strokeWidth="1.5"/>
                <path d="M5 3V6M11 3V6M3 8H13" stroke="var(--color-neutral-1100)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.3px] text-neutral-1100">
              {dateRange.startDate && dateRange.endDate
                ? formatDateRange(dateRange.startDate, dateRange.endDate)
                : '01 Jan - 31 Jan 2026'}
            </p>
          </button>
        </div>

        {/* Members Avatares */}
        <div className="flex gap-[var(--spacing-8)] items-center">
          {/* Botão "Todos" para remover filtro */}
          <button
            onClick={() => setSelectedMember(null)}
            className={`
              border-2 rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0
              bg-neutral-300 flex items-center justify-center
              transition-all duration-200
              ${selectedMember === null 
                ? 'border-secondary-900 ring-2 ring-secondary-900/20' 
                : 'border-white hover:border-neutral-400'
              }
            `}
            title="Todos os membros"
            aria-label="Filtrar por todos os membros"
          >
            <span className="text-label-xs">👥</span>
          </button>

          {/* Avatares dos membros */}
          {familyMembers.slice(0, 3).map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member.id === selectedMember ? null : member.id)}
              className={`
                border-2 rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0
                transition-all duration-200
                ${selectedMember === member.id
                  ? 'border-secondary-900 ring-2 ring-secondary-900/20'
                  : 'border-white hover:border-neutral-400'
                }
              `}
              title={member.name}
              aria-label={`Filtrar por ${member.name}`}
            >
              {member.avatarUrl ? (
                <img 
                  src={member.avatarUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-300 flex items-center justify-center">
                  <span className="text-label-xs">👤</span>
                </div>
              )}
            </button>
          ))}

          {/* Botão adicionar membro (placeholder) */}
          <button
            className="
              border-2 border-white rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0
              bg-neutral-300 flex items-center justify-center
              hover:border-neutral-400
              transition-all duration-200
            "
            title="Adicionar membro"
            aria-label="Adicionar novo membro da família"
          >
            <span className="text-label-xs">+</span>
          </button>
        </div>
      </div>

      {/* Right: Nova Transação Button */}
      <button className="
        bg-neutral-1100
        flex gap-[var(--spacing-8)]
        items-center
        px-[var(--spacing-16)]
        py-[var(--spacing-12)]
        rounded-[var(--radius-full)]
        text-white
        text-[18px] font-semibold leading-[24px] tracking-[0.3px]
        hover:bg-neutral-1100/90
        transition-colors duration-200
      ">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V13M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>Nova transação</span>
      </button>
    </nav>
  );
}
