import { useFinance } from '../../../contexts/FinanceContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useEffect, useState } from 'react';

/**
 * Componente ExpenseCard - Card de Despesas
 * Fundo branco com borda sutil
 * Ícone de seta diagonal apontando para cima-direita (saída)
 */
export default function ExpenseCard() {
  const { calculateExpensesForPeriod } = useFinance();
  const [displayValue, setDisplayValue] = useState(0);

  const totalExpenses = calculateExpensesForPeriod();

  // Animação de contagem: 0 até valor final em 800ms
  useEffect(() => {
    const duration = 800; // ms
    const steps = 60;
    const increment = totalExpenses / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextValue = Math.min(increment * currentStep, totalExpenses);
      setDisplayValue(nextValue);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(totalExpenses);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [totalExpenses]);

  return (
    <div className="
      bg-surface-500
      border border-neutral-300
      rounded-[var(--radius-20)]
      p-[var(--spacing-24)]
      flex flex-col
      gap-[var(--spacing-32)]
      w-full
      h-full
    ">
      {/* Header: Label e ícone */}
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-normal leading-[28px] tracking-[0.3px] text-neutral-500">
          Despesas
        </p>
        
        {/* Ícone de despesa (círculo vermelho claro com seta diagonal cima-direita) */}
        <div className="
          w-6 h-6
          bg-red-100
          rounded-full
          flex items-center justify-center
          flex-shrink-0
        ">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 12L4 4M4 4H8M4 4V8" 
              stroke="var(--color-red-600)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Valor */}
      <div className="flex flex-col gap-[4px] flex-1">
        <p className="text-[28px] font-bold leading-[36px] text-secondary-900">
          {formatCurrency(displayValue)}
        </p>
      </div>
    </div>
  );
}
