import { useFinance } from '../../../contexts/FinanceContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useEffect, useState } from 'react';

/**
 * Componente IncomeCard - Card de Receitas
 * Fundo branco com borda sutil
 * Ícone de seta diagonal apontando para baixo-esquerda (entrada)
 */
export default function IncomeCard() {
  const { calculateIncomeForPeriod } = useFinance();
  const [displayValue, setDisplayValue] = useState(0);

  const totalIncome = calculateIncomeForPeriod();

  // Animação de contagem: 0 até valor final em 800ms
  useEffect(() => {
    const duration = 800; // ms
    const steps = 60;
    const increment = totalIncome / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextValue = Math.min(increment * currentStep, totalIncome);
      setDisplayValue(nextValue);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(totalIncome);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [totalIncome]);

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
        <p className="text-[18px] font-normal leading-[28px] tracking-[0.3px] text-secondary-900">
          Receitas
        </p>
        
        {/* Ícone de receita (círculo cinza claro com seta diagonal baixo-esquerda) */}
        <div className="
          w-6 h-6
          bg-neutral-300
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
              d="M12 4L4 12M4 12H8M4 12V8" 
              stroke="var(--color-neutral-1100)" 
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
