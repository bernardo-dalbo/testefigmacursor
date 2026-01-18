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

  // Margem superior: navbar (12px top + 48px height = 60px) no desktop, header mobile (56px) no mobile/tablet
  const topMargin = isDesktop ? 'mt-[60px]' : 'mt-14';
  
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
