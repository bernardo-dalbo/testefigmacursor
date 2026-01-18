import { useFinance } from '../../../contexts/FinanceContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

/**
 * Componente RevenueChart - Gráfico de Fluxo Financeiro
 * Mostra receitas e despesas mensais ao longo do ano em formato de área
 */
export default function RevenueChart() {
  const { calculateMonthlyFlow } = useFinance();
  const monthlyData = calculateMonthlyFlow();

  // Calcular máximo do eixo Y (arredondado para cima em múltiplos de 2500)
  const maxValue = Math.max(
    ...monthlyData.map((d) => Math.max(d.income, d.expenses))
  );
  const yAxisMax = Math.ceil(maxValue / 2500) * 2500 || 17500;

  // Configurar ticks do eixo Y (0 até yAxisMax, incrementos de 2500)
  const yAxisTicks: number[] = [];
  for (let i = 0; i <= yAxisMax; i += 2500) {
    yAxisTicks.push(i);
  }

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="
          bg-white
          border border-neutral-300
          rounded-[var(--radius-md)]
          p-[var(--spacing-12)]
          shadow-lg
        ">
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="
                text-[14px]
                font-semibold
                leading-[20px]
                text-neutral-1100
                mb-[var(--spacing-4)]
              "
              style={{ color: entry.color }}
            >
              {entry.name === 'income' ? 'Receitas' : 'Despesas'}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom label do eixo Y
  const CustomYAxisLabel = ({ x, y, payload }: any) => {
    return (
      <text
        x={x}
        y={y}
        dy={4}
        textAnchor="end"
        className="
          text-[18px]
          font-normal
          leading-[28px]
          text-neutral-1100
          fill-neutral-1100
        "
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {formatCurrency(payload.value).replace('R$', 'R$').replace(',00', '')}
      </text>
    );
  };

  // Custom label do eixo X
  const CustomXAxisLabel = ({ x, y, payload }: any) => {
    return (
      <text
        x={x}
        y={y}
        dy={8}
        textAnchor="middle"
        className="
          text-[14px]
          font-semibold
          leading-[16px]
          text-neutral-1100
          fill-neutral-1100
          tracking-[0.3px]
        "
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="
      bg-white
      border border-neutral-300
      rounded-[var(--radius-20)]
      p-[var(--spacing-32)]
      w-full
      min-h-[596px]
      flex flex-col
      gap-[var(--spacing-32)]
    ">
      {/* Header com título e legenda */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-[var(--spacing-8)] flex-1">
          {/* Ícone de gráfico (placeholder) */}
          <div className="
            w-[24px]
            h-[24px]
            bg-neutral-300
            rounded-[var(--radius-sm)]
          " />
          <h3 className="
            text-[20px]
            font-bold
            leading-[28px]
            text-neutral-1100
            flex-1
          ">
            Fluxo financeiro
          </h3>
        </div>

        {/* Legenda */}
        <div className="flex items-center gap-[var(--spacing-8)] shrink-0">
          {/* Receitas */}
          <div className="flex items-center gap-[var(--spacing-8)]">
            <div
              className="w-[9px] h-[9px] rounded-full"
              style={{ backgroundColor: 'var(--color-brand-700)' }}
            />
            <p className="
              text-[12px]
              font-semibold
              leading-[16px]
              text-neutral-1100
              tracking-[0.3px]
            ">
              Receitas
            </p>
          </div>

          {/* Despesas */}
          <div className="flex items-center gap-[var(--spacing-8)]">
            <div
              className="w-[9px] h-[9px] rounded-full"
              style={{ backgroundColor: 'var(--color-red-600)' }}
            />
            <p className="
              text-[12px]
              font-semibold
              leading-[16px]
              text-neutral-1100
              tracking-[0.3px]
            ">
              Despesas
            </p>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%" minHeight={263}>
          <AreaChart
            data={monthlyData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <defs>
              {/* Gradiente para Receitas (verde-limão) */}
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-brand-700)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-brand-700)" stopOpacity={0.1} />
              </linearGradient>

              {/* Gradiente para Despesas (vermelho) */}
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-red-600)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-red-600)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-300)" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisLabel />}
              style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, yAxisMax]}
              ticks={yAxisTicks}
              tick={<CustomYAxisLabel />}
              width={101}
              style={{
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif',
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Área de Receitas */}
            <Area
              type="monotone"
              dataKey="income"
              stroke="var(--color-brand-700)"
              strokeWidth={2}
              fill="url(#colorIncome)"
              name="income"
            />

            {/* Área de Despesas */}
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-red-600)"
              strokeWidth={2}
              fill="url(#colorExpenses)"
              name="expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}