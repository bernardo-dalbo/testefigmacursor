import { formatCurrency } from '../../../utils/formatCurrency';

interface ExpenseCardProps {
  category: string;
  amount: number;
  percentage: number;
}

/**
 * Componente ExpenseCard - Card de gasto por categoria
 * Mostra gráfico circular com percentual, nome da categoria e valor
 */
export default function ExpenseCard({ category, amount, percentage }: ExpenseCardProps) {
  // Configuração do círculo SVG
  const size = 72;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Converter percentual (0-100) para comprimento do arco
  // Começamos de cima (12h) e desenhamos no sentido horário
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="
      bg-white
      border border-neutral-300
      rounded-[var(--radius-20)]
      p-[var(--spacing-24)]
      flex flex-col
      gap-[var(--spacing-12)]
      items-center
      justify-center
      shrink-0
      min-w-[180px]
    ">
      {/* Gráfico circular com percentual */}
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Círculo de fundo (cinza) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-neutral-300)"
            strokeWidth={strokeWidth}
          />
          {/* Círculo de progresso (verde-limão) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-primary-500)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
        {/* Percentual no centro */}
        <p className="
          absolute
          font-normal
          leading-[20px]
          text-[12px]
          text-neutral-1100
          text-center
          tracking-[0.3px]
        ">
          {percentage.toFixed(0)}%
        </p>
      </div>

      {/* Nome da categoria e valor */}
      <div className="flex flex-col gap-[4px] items-center justify-center w-full">
        <p className="
          font-normal
          leading-[20px]
          text-[14px]
          text-neutral-1100
          text-center
          tracking-[0.3px]
        ">
          {category}
        </p>
        <p className="
          font-bold
          leading-[28px]
          text-[20px]
          text-neutral-1100
          text-center
          min-w-[137px]
        ">
          {formatCurrency(amount)}
        </p>
      </div>
    </div>
  );
}