import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSidebar } from '../../../hooks/useSidebar';

/**
 * Componente Navbar - Barra de navegação superior (desktop ≥1280px)
 */
export default function Navbar() {
  const { isDesktop } = useMediaQuery();
  const { isExpanded } = useSidebar();

  // Navbar só aparece no desktop
  if (!isDesktop) {
    return null;
  }

  // Margem esquerda ajusta conforme estado da sidebar
  const leftMargin = isExpanded ? 'ml-[300px]' : 'ml-20';

  return (
    <nav className={`
      ${leftMargin}
      fixed top-0 right-0 h-12
      bg-surface-500
      border-b border-neutral-300
      transition-all duration-300 ease-in-out
      flex items-center justify-between px-8
      z-10
    `}>
      {/* Left: Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="
              w-64 h-9
              px-4 py-2
              bg-background-400
              border border-neutral-300 rounded-radius-sm
              text-paragraph-sm
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            "
          />
          <span className="absolute right-3 top-2 text-neutral-500">🔍</span>
        </div>
        
        <button className="
          w-9 h-9
          rounded-radius-sm
          bg-background-400 hover:bg-neutral-300
          flex items-center justify-center
          transition-colors duration-200
        ">
          <span className="text-label-md">⚙️</span>
        </button>

        <div className="flex items-center space-x-2 text-paragraph-sm text-neutral-500">
          <span>📅</span>
          <span>01 Jan - 31 Jan 2026</span>
        </div>
      </div>

      {/* Right: User Avatars and Actions */}
      <div className="flex items-center space-x-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-radius-full bg-neutral-300 border-2 border-surface-500 flex items-center justify-center"
            >
              <span className="text-label-xs">👤</span>
            </div>
          ))}
        </div>

        <button className="
          w-9 h-9
          rounded-radius-full
          bg-background-400 hover:bg-neutral-300
          flex items-center justify-center
          transition-colors duration-200
        ">
          <span className="text-label-md">+</span>
        </button>

        <button className="
          px-4 h-9
          bg-secondary-900 text-surface-500
          rounded-radius-sm
          text-label-sm font-semibold
          hover:bg-secondary-900/90
          transition-colors duration-200
          flex items-center space-x-2
        ">
          <span>+</span>
          <span>Nova transação</span>
        </button>
      </div>
    </nav>
  );
}
