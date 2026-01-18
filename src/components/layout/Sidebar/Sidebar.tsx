import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../../hooks/useSidebar';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/cards', label: 'Cartões' },
  { path: '/transactions', label: 'Transações' },
  { path: '/profile', label: 'Perfil' },
];

/**
 * Componente Sidebar - Navegação lateral desktop (≥1280px)
 * Baseado no design do Figma MCP
 * Estados: expanded (300px) e collapsed (80px)
 */
export default function Sidebar() {
  const { isExpanded, toggle } = useSidebar();
  const { isDesktop } = useMediaQuery();
  const location = useLocation();

  // Sidebar não renderiza em mobile/tablet (<1280px)
  if (!isDesktop) {
    return null;
  }

  const sidebarWidth = isExpanded ? 'w-[300px]' : 'w-20';

  return (
    <aside
      className={`
        ${sidebarWidth}
        fixed left-0 top-0 h-screen
        bg-surface-500
        border-r border-neutral-300
        transition-all duration-300 ease-in-out
        flex flex-col
        justify-between
        p-[var(--spacing-32)]
        z-10
      `}
    >
      {/* Container principal com gap entre logo e menu */}
      <div className="flex flex-col gap-[var(--spacing-56)] items-start flex-1">
        {/* Logo */}
        {isExpanded ? (
          <h1 className="text-heading-sm font-bold text-secondary-900">
            <span className="underline">Mycash</span>+
          </h1>
        ) : (
          // Logo pequeno quando colapsado (SVG placeholder - dimensões conforme Figma)
          <div className="h-[43px] w-[45px] flex items-center justify-center">
            <span className="text-[24px] font-bold text-secondary-900">M</span>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex flex-col gap-[var(--spacing-8)] w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group
                  flex items-center
                  gap-[var(--spacing-8)]
                  px-[var(--spacing-16)]
                  py-[var(--spacing-12)]
                  rounded-[var(--radius-full)]
                  transition-all duration-200
                  relative
                  ${isActive 
                    ? 'bg-primary-500 text-secondary-900' 
                    : 'text-neutral-1100 hover:bg-neutral-300'
                  }
                  ${!isExpanded ? 'justify-center px-2' : ''}
                `}
                title={!isExpanded ? item.label : undefined}
              >
                {/* Ícone */}
                <span className="text-label-lg flex-shrink-0">
                  {item.path === '/' ? '🏠' 
                   : item.path === '/cards' ? '💳'
                   : item.path === '/transactions' ? '📋'
                   : '👤'}
                </span>
                
                {isExpanded && (
                  <span className="text-[18px] font-semibold leading-[24px] tracking-[0.3px] text-secondary-900">
                    {item.label}
                  </span>
                )}
                
                {/* Tooltip quando colapsada */}
                {!isExpanded && (
                  <div className="
                    absolute left-full ml-2
                    px-2 py-1
                    bg-secondary-900 text-surface-500
                    text-label-xs rounded-radius-sm
                    opacity-0 group-hover:opacity-100
                    pointer-events-none
                    transition-opacity duration-200 delay-200
                    whitespace-nowrap
                    z-50
                  ">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="flex flex-col gap-[var(--spacing-12)] items-start">
        <div className="w-6 h-6 rounded-radius-full bg-neutral-300 flex items-center justify-center flex-shrink-0">
          <img 
            src="/3b209d0eef350825920805aa279d69a669b24c57.png" 
            alt="Avatar" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {isExpanded && (
          <div className="flex flex-col gap-[7px] w-[160px]">
            <p className="text-[16px] font-semibold leading-[20px] tracking-[0.3px] text-neutral-1100">
              Lucas Marte
            </p>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.3px] text-neutral-1100">
              lucasmarte@gmail.com
            </p>
          </div>
        )}
      </div>

      {/* Botão Toggle - posicionado fora da sidebar */}
      <button
        onClick={toggle}
        className="
          absolute
          bg-white
          p-1
          right-[-13px]
          top-[34px]
          rounded-[var(--radius-full)]
          shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
          flex items-center justify-center
          transition-colors duration-200
          hover:bg-neutral-300
          focus:outline-none focus:ring-2 focus:ring-primary-500
          z-20
        "
        aria-label={isExpanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
      >
        {/* Ícone de chevron */}
        <div className="flex-none rotate-180">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M6 12L10 8L6 4" 
              stroke="var(--color-secondary-900)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </aside>
  );
}
