import BalanceSummary from '../components/dashboard/BalanceSummary';
import ExpenseCards from '../components/dashboard/ExpenseCards';
import RevenueChart from '../components/dashboard/RevenueChart';

function Dashboard() {
  return (
    <div className="container-responsive w-full max-w-full">
      {/* Carrossel de Gastos por Categoria */}
      <ExpenseCards />
      
      {/* Cards de Resumo Financeiro */}
      <div className="mb-[var(--spacing-24)] w-full">
        <BalanceSummary />
      </div>

      {/* Gráfico de Fluxo Financeiro */}
      <div className="mb-[var(--spacing-24)] w-full">
        <RevenueChart />
      </div>
    </div>
  );
}

export default Dashboard;
