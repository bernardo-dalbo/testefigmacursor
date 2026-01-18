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
        z-10
      `}
    >
      {/* Header com Logo e Botão Toggle */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-300">
        {isExpanded && (
          <h1 className="text-heading-sm font-bold text-secondary-900">
            Mycash+
          </h1>
        )}
        {!isExpanded && (
          <h1 className="text-heading-xs font-bold text-secondary-900">
            My
          </h1>
        )}
        
        <button
          onClick={toggle}
          className="w-10 h-10 rounded-full bg-neutral-300 hover:bg-neutral-400 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label={isExpanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
        >
          {/* Ícone de chevron/esquerda */}
          <svg 
            width="9" 
            height="8" 
            viewBox="0 0 9 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '9px', height: '8px' }}
          >
            <path 
              d="M8.66667 3.33386H2L4.19333 1.14053C4.25582 1.07855 4.30541 1.00482 4.33926 0.923578C4.37311 0.842339 4.39053 0.755202 4.39053 0.667194C4.39053 0.579186 4.37311 0.492049 4.33926 0.41081C4.30541 0.329571 4.25582 0.255837 4.19333 0.193861C4.06842 0.0696943 3.89946 0 3.72333 0C3.54721 0 3.37824 0.0696943 3.25333 0.193861L0.393333 3.06053C0.142942 3.30942 0.00148853 3.64747 0 4.00052V4.00052C0.00324439 4.35126 0.144563 4.68659 0.393333 4.93386L3.25333 7.80052C3.31549 7.86224 3.3892 7.91111 3.47025 7.94435C3.55129 7.97759 3.63809 7.99453 3.72569 7.99422C3.81329 7.99391 3.89996 7.97635 3.98077 7.94255C4.06159 7.90874 4.13495 7.85934 4.19667 7.79719C4.25839 7.73503 4.30726 7.66132 4.3405 7.58027C4.37373 7.49923 4.39068 7.41243 4.39037 7.32483C4.39006 7.23723 4.3725 7.15056 4.33869 7.06975C4.30489 6.98894 4.25549 6.91558 4.19333 6.85385L2 4.66719H8.66667C8.84348 4.66719 9.01305 4.59695 9.13807 4.47193C9.2631 4.3469 9.33333 4.17733 9.33333 4.00052C9.33333 3.82371 9.2631 3.65414 9.13807 3.52912C9.01305 3.4041 8.84348 3.33386 8.66667 3.33386Z" 
              fill="var(--color-secondary-900)"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    group
                    flex items-center
                    px-4 py-3
                    rounded-radius-md
                    transition-all duration-200
                    relative
                    ${isActive 
                      ? 'bg-primary-500 text-secondary-900' 
                      : 'text-neutral-500 hover:bg-neutral-300 hover:text-secondary-900'
                    }
                    ${!isExpanded ? 'justify-center px-2' : ''}
                  `}
                  title={!isExpanded ? item.label : undefined}
                >
                  {/* Ícone (placeholder, será substituído por SVG real) */}
                  <span className={`text-label-md ${isExpanded ? 'mr-3' : ''}`}>
                    {item.path === '/' ? '🏠' : '💳'}
                  </span>
                  
                  {isExpanded && (
                    <span className="text-label-md font-semibold text-secondary-900">
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
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className={`border-t border-neutral-300 ${isExpanded ? 'p-6' : 'p-2'}`}>
        <div className={`flex items-center ${isExpanded ? 'flex-row' : 'flex-col'}`}>
          <div className="w-10 h-10 rounded-radius-full bg-neutral-300 flex items-center justify-center flex-shrink-0">
            <span className="text-label-sm">👤</span>
          </div>
          {isExpanded && (
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-label-md font-semibold text-secondary-900 truncate">
                Lucas Marte
              </p>
              <p className="text-paragraph-xs text-neutral-500 truncate mt-1">
                lucasmarte@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
