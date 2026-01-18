import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../../hooks/useSidebar';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/cards', label: 'Cartões', icon: '💳' },
  { path: '/transactions', label: 'Transações', icon: '📋' },
  { path: '/profile', label: 'Perfil', icon: '👤' },
];

/**
 * Componente Sidebar - Navegação lateral desktop (≥1280px)
 * Possui dois estados: expanded (300px) e collapsed (~80px)
 */
export default function Sidebar() {
  const { isExpanded, toggle } = useSidebar();
  const { isDesktop } = useMediaQuery();
  const location = useLocation();

  // Sidebar não renderiza em mobile/tablet
  if (!isDesktop) {
    return null;
  }

  const sidebarWidth = isExpanded ? 'w-[300px]' : 'w-20';
  const logoText = isExpanded ? 'mycash+' : 'm+';

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
      <div className="flex items-center justify-between p-6 border-b border-neutral-300">
        <h1 className={`font-bold text-heading-sm text-secondary-900 transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
          {logoText}
        </h1>
        <button
          onClick={toggle}
          className={`
            ${isExpanded ? 'ml-auto' : 'mx-auto'}
            w-10 h-10
            rounded-full
            bg-neutral-300 hover:bg-neutral-400
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500
          `}
          aria-label={isExpanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
        >
          <span className="text-secondary-900 text-label-md">
            {isExpanded ? '←' : '→'}
          </span>
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
                      ? 'bg-secondary-900 text-surface-500' 
                      : 'text-neutral-500 hover:bg-neutral-300 hover:text-secondary-900'
                    }
                    ${!isExpanded ? 'justify-center' : ''}
                  `}
                  title={!isExpanded ? item.label : undefined}
                >
                  <span className={`text-label-md ${isActive && isExpanded ? 'text-primary-500' : ''}`}>
                    {item.icon}
                  </span>
                  {isExpanded && (
                    <span className="ml-3 text-label-md font-semibold">
                      {item.label}
                    </span>
                  )}
                  
                  {/* Tooltip quando colapsada */}
                  {!isExpanded && (
                    <div className="
                      absolute left-full ml-2
                      px-2 py-1
                      bg-secondary-900 text-surface-500
                      text-label-xs rounded
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
      <div className={`
        border-t border-neutral-300 p-6
        ${isExpanded ? '' : 'px-2'}
      `}>
        <div className={`flex items-center ${isExpanded ? 'flex-row' : 'flex-col'}`}>
          <div className="w-10 h-10 rounded-radius-full bg-neutral-300 flex items-center justify-center flex-shrink-0">
            <span className="text-label-md">👤</span>
          </div>
          {isExpanded && (
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-label-md font-semibold text-secondary-900 truncate">
                Lucas Marte
              </p>
              <p className="text-paragraph-xs text-neutral-500 truncate">
                lucasmarte@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
