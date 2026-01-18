import { ReactNode } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSidebar } from '../../../hooks/useSidebar';

interface ContainerProps {
  children: ReactNode;
}

/**
 * Componente Container - Wrapper responsivo que ajusta margem conforme sidebar
 */
export default function Container({ children }: ContainerProps) {
  const { isDesktop } = useMediaQuery();
  const { isExpanded } = useSidebar();

  // Margem superior para navbar (48px = 12 * 4) apenas desktop
  const topMargin = isDesktop ? 'mt-12' : 'mt-0';
  
  // Margem esquerda para sidebar (apenas desktop)
  const leftMargin = isDesktop 
    ? (isExpanded ? 'ml-[300px]' : 'ml-20')
    : 'ml-0';

  return (
    <div className={`
      ${topMargin} ${leftMargin}
      min-h-screen
      bg-background-400
      transition-all duration-300 ease-in-out
      w-full
    `}>
      <div className="container-responsive py-8">
        {children}
      </div>
    </div>
  );
}
