import BalanceCard from './BalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';

/**
 * Componente BalanceSummary - Container dos três cards de resumo financeiro
 * Layout horizontal no desktop e vertical no mobile
 * Todos os cards têm o mesmo tamanho e não ultrapassam o frame
 */
export default function BalanceSummary() {
  return (
    <div className="
      grid grid-cols-1 md:grid-cols-3
      gap-[var(--spacing-16)]
      w-full
      max-w-full
      items-stretch
    ">
      {/* Card de Saldo Total */}
      <div className="md:col-span-1">
        <BalanceCard />
      </div>

      {/* Card de Receitas */}
      <div className="md:col-span-1">
        <IncomeCard />
      </div>

      {/* Card de Despesas */}
      <div className="md:col-span-1">
        <ExpenseCard />
      </div>
    </div>
  );
}
