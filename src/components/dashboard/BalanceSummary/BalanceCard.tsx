import { useFinance } from '../../../contexts/FinanceContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useEffect, useState } from 'react';

/**
 * Componente BalanceCard - Card de Saldo Total
 * Fundo preto com círculo verde-limão desfocado no fundo
 * Badge de crescimento percentual comparado ao mês anterior
 */
export default function BalanceCard() {
  const { calculateTotalBalance } = useFinance();
  const [displayValue, setDisplayValue] = useState(0);
  const [growthPercentage, setGrowthPercentage] = useState(0);

  const totalBalance = calculateTotalBalance();
  
  // Cálculo simplificado: comparar com saldo de 30 dias atrás
  // Por enquanto, vamos usar um valor mock fixo (12%)
  // TODO: Implementar cálculo real comparando com dados de 30 dias atrás
  useEffect(() => {
    setGrowthPercentage(12); // Mock: +12% esse mês
  }, []);

  // Animação de contagem: 0 até valor final em 800ms
  useEffect(() => {
    const duration = 800; // ms
    const steps = 60;
    const increment = totalBalance / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextValue = Math.min(increment * currentStep, totalBalance);
      setDisplayValue(nextValue);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(totalBalance);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [totalBalance]);

  return (
    <div className="
      relative
      bg-secondary-900
      rounded-[var(--radius-20)]
      p-[var(--spacing-24)]
      text-white
      overflow-hidden
      w-full
      h-full
      flex flex-col
    ">
      {/* Círculo verde-limão desfocado no fundo */}
      <div className="
        absolute
        top-[-50%]
        right-[-20%]
        w-[200px]
        h-[200px]
        bg-primary-500
        rounded-full
        opacity-20
        blur-[60px]
      " />

      {/* Conteúdo do card */}
      <div className="relative flex flex-col gap-[var(--spacing-32)] flex-1">
        {/* Label */}
        <p className="text-[18px] font-normal leading-[28px] tracking-[0.3px] text-neutral-300">
          Saldo Total
        </p>

        {/* Valor e Badge */}
        <div className="flex flex-col gap-[4px] flex-1 justify-between">
          <p className="text-[28px] font-bold leading-[36px] text-white">
            {formatCurrency(displayValue)}
          </p>
          
          {/* Badge de crescimento */}
          <div className="
            inline-flex items-center gap-[var(--spacing-8)]
            px-[var(--spacing-12)]
            py-[var(--spacing-8)]
            bg-white/20
            backdrop-blur-sm
            rounded-[var(--radius-full)]
            w-fit
            mt-auto
          ">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8 3V13M3 8H13" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[14px] font-semibold leading-[20px] text-white">
              +{growthPercentage}% esse mês
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
