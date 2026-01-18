import { useFinance } from '../../../contexts/FinanceContext';
import { useRef, useEffect } from 'react';

interface FilterPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

/**
 * Componente FilterPopover - Popover de filtros para desktop
 * Fundo branco semi-transparente com efeito glassmorphism
 * Opções de tipo de transação: Todos, Receitas, Despesas
 */
export default function FilterPopover({ isOpen, onClose, anchorEl }: FilterPopoverProps) {
  const { transactionType, setTransactionType } = useFinance();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose, anchorEl]);

  // Posiciona o popover abaixo do botão
  useEffect(() => {
    if (isOpen && anchorEl && popoverRef.current) {
      const rect = anchorEl.getBoundingClientRect();
      popoverRef.current.style.top = `${rect.bottom + 8}px`;
      popoverRef.current.style.left = `${rect.left}px`;
    }
  }, [isOpen, anchorEl]);

  if (!isOpen) return null;

  return (
    <div
      ref={popoverRef}
      className="
        absolute
        bg-white/95
        backdrop-blur-md
        border border-neutral-300
        rounded-[var(--radius-md)]
        shadow-lg
        p-[var(--spacing-16)]
        z-50
        min-w-[200px]
      "
    >
      <div className="flex flex-col gap-[var(--spacing-8)]">
        <p className="text-[14px] font-semibold leading-[20px] text-neutral-1100 mb-[var(--spacing-4)]">
          Tipo de Transação
        </p>
        
        {(['all', 'income', 'expense'] as const).map((type) => (
          <button
            key={type}
            onClick={() => {
              setTransactionType(type);
              onClose();
            }}
            className={`
              text-left
              px-[var(--spacing-12)]
              py-[var(--spacing-8)]
              rounded-[var(--radius-sm)]
              text-[14px] font-normal leading-[20px] tracking-[0.3px]
              transition-colors duration-200
              ${
                transactionType === type
                  ? 'bg-secondary-900 text-white'
                  : 'text-neutral-1100 hover:bg-neutral-300'
              }
            `}
          >
            {type === 'all' ? 'Todos' : type === 'income' ? 'Receitas' : 'Despesas'}
          </button>
        ))}
      </div>
    </div>
  );
}
