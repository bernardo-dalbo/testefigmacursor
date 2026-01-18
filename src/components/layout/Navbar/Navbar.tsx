import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSidebar } from '../../../hooks/useSidebar';

/**
 * Componente Navbar - Barra de navegação superior (desktop ≥1280px)
 * Baseado no design do Figma MCP
 * Posicionamento: Frame 211 (x=32, y=12) com padding de 32px
 */
export default function Navbar() {
  const { isDesktop } = useMediaQuery();
  const { isExpanded } = useSidebar();

  // Navbar só aparece no desktop
  if (!isDesktop) {
    return null;
  }

  // Largura do sidebar para cálculo do left
  const sidebarWidth = isExpanded ? 300 : 80;

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
          ">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 13L10 10" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.3px] text-neutral-1100">
              Pesquisar
            </p>
          </div>

          {/* Filter Button */}
          <button className="
            flex items-center
            p-[12px]
            transition-colors duration-200
            hover:bg-neutral-300
            rounded-radius-sm
          ">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4H13M5 8H11M7 12H9" stroke="var(--color-neutral-1100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Date Picker */}
          <div className="
            border border-neutral-500
            flex gap-[var(--spacing-8)]
            items-center justify-center
            px-[var(--spacing-24)]
            py-[var(--spacing-12)]
            rounded-[var(--radius-full)]
          ">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="10" height="8" rx="1" stroke="var(--color-neutral-1100)" strokeWidth="1.5"/>
                <path d="M5 3V6M11 3V6M3 8H13" stroke="var(--color-neutral-1100)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.3px] text-neutral-1100">
              01 Jan - 31 Jan 2026 
            </p>
          </div>
        </div>

        {/* Members Avatares */}
        <div className="flex gap-[var(--spacing-8)] items-center">
          <div className="border-2 border-white rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0">
            <img 
              src="/3b209d0eef350825920805aa279d69a669b24c57.png" 
              alt="Member 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-2 border-white rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0 bg-neutral-300 flex items-center justify-center">
            <span className="text-label-xs">👤</span>
          </div>
          <div className="border-2 border-white rounded-[var(--radius-full)] size-[44px] overflow-hidden flex-shrink-0 bg-neutral-300 flex items-center justify-center">
            <span className="text-label-xs">+</span>
          </div>
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
