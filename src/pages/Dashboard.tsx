import BalanceSummary from '../components/dashboard/BalanceSummary';
import ExpenseCards from '../components/dashboard/ExpenseCards';
import RevenueChart from '../components/dashboard/RevenueChart';
import AccountsList from '../components/dashboard/AccountsList';

function Dashboard() {
  return (
    <div className="container-responsive w-full max-w-full">
      {/* Carrossel de Gastos por Categoria */}
      <ExpenseCards />
      
      {/* Cards de Resumo Financeiro e Accounts List */}
      <div className="mb-[var(--spacing-24)] w-full grid grid-cols-1 lg:grid-cols-[794px_1fr] gap-[var(--spacing-24)]">
        {/* Coluna esquerda: BalanceSummary */}
        <div className="w-full">
          <BalanceSummary />
        </div>

        {/* Coluna direita: AccountsList */}
        <div className="w-full">
          <AccountsList />
        </div>
      </div>

      {/* Gráfico de Fluxo Financeiro */}
      <div className="mb-[var(--spacing-24)] w-full">
        <RevenueChart />
      </div>
    </div>
  );
}

export default Dashboard;
