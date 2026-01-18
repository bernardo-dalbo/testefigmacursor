import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
 * Componente MenuDropdown - Menu de navegação mobile
 * Desliza de cima para baixo quando avatar é clicado
 */
function MenuDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    console.log('Logout');
    onClose();
  };

  return (
    <>
      {/* Overlay escuro semi-transparente */}
      <div
        className="
          fixed inset-0
          bg-secondary-900/50
          z-40
          animate-fade-in
        "
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Dropdown */}
      <div
        className="
          fixed top-0 left-0 right-0
          bg-surface-500
          rounded-b-radius-md
          shadow-lg
          z-50
          animate-slide-down
          max-h-[80vh]
          overflow-y-auto
          border-b border-neutral-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Menu com X */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300">
          <h2 className="text-heading-sm font-bold text-secondary-900">Menu</h2>
          <button
            onClick={onClose}
            className="
              w-10 h-10
              rounded-radius-full
              bg-neutral-300 hover:bg-neutral-400
              flex items-center justify-center
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500
            "
            aria-label="Fechar menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="var(--color-secondary-900)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Lista de Navegação */}
        <nav className="py-4">
          <ul className="space-y-1 px-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleItemClick(item.path)}
                    className={`
                      w-full
                      flex items-center
                      px-4 py-3
                      rounded-radius-md
                      text-left
                      transition-all duration-200
                      ${isActive
                        ? 'bg-secondary-900 text-surface-500'
                        : 'text-neutral-500 hover:bg-neutral-300 hover:text-secondary-900'
                      }
                    `}
                  >
                    <span className="text-label-md mr-3">
                      {item.path === '/' ? '🏠' : item.path === '/cards' ? '💳' : item.path === '/transactions' ? '📋' : '👤'}
                    </span>
                    <span className="text-label-md font-semibold">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botão Sair */}
        <div className="px-4 py-4 border-t border-neutral-300">
          <button
            onClick={handleLogout}
            className="
              w-full
              px-4 py-3
              rounded-radius-md
              bg-red-600 hover:bg-red-700
              text-surface-500
              text-label-md font-semibold
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-red-500
            "
          >
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

/**
 * Componente HeaderMobile - Header fixo no topo para mobile/tablet (<1280px)
 * Baseado no design do Figma MCP
 */
export default function HeaderMobile() {
  const { isDesktop } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // HeaderMobile só aparece em mobile/tablet (<1280px)
  if (isDesktop) {
    return null;
  }

  const handleAvatarClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0
          h-14
          bg-surface-500
          border-b border-neutral-300
          flex items-center justify-between
          px-4
          z-30
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-heading-sm font-bold text-secondary-900">
            Mycash+
          </h1>
        </Link>

        {/* Avatar clicável */}
        <button
          onClick={handleAvatarClick}
          className="
            w-10 h-10
            rounded-radius-full
            bg-neutral-300 hover:bg-neutral-400
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500
          "
          aria-label="Abrir menu"
        >
          <span className="text-label-sm">👤</span>
        </button>
      </header>

      {/* Menu Dropdown */}
      <MenuDropdown isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}
