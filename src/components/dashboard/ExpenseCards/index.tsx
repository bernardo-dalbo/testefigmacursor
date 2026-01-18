import { useFinance } from '../../../contexts/FinanceContext';
import ExpenseCard from './ExpenseCard';

/**
 * Componente ExpenseCards - Carrossel de gastos por categoria
 * Renderiza cards horizontais com scroll para mostrar gastos por categoria
 */
export default function ExpenseCards() {
  const { calculateExpensesByCategory, calculateCategoryPercentage } = useFinance();
  
  // Obter categorias ordenadas por valor (decrescente)
  const expensesByCategory = calculateExpensesByCategory();

  if (expensesByCategory.length === 0) {
    return (
      <div className="w-full mb-[var(--spacing-24)]">
        <p className="text-neutral-500 text-sm text-center py-[var(--spacing-24)]">
          Nenhuma despesa encontrada no período selecionado.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mb-[var(--spacing-24)]">
      {/* Carrossel com scroll horizontal */}
      <div className="
        flex
        gap-[var(--spacing-16)]
        overflow-x-auto
        scrollbar-hide
        pb-[var(--spacing-8)]
        -mx-[var(--spacing-24)]
        px-[var(--spacing-24)]
        lg:-mx-0
        lg:px-0
      " style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
      }}>
        {expensesByCategory.map((item) => {
          const percentage = calculateCategoryPercentage(item.category);
          return (
            <ExpenseCard
              key={item.category}
              category={item.category}
              amount={item.amount}
              percentage={percentage}
            />
          );
        })}
      </div>
      
      {/* Estilo para esconder scrollbar no Webkit (Chrome, Safari) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}