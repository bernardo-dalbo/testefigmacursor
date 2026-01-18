import BalanceSummary from '../components/dashboard/BalanceSummary';

function Dashboard() {
  return (
    <div className="container-responsive w-full max-w-full">
      {/* Cards de Resumo Financeiro */}
      <div className="mb-[var(--spacing-24)] w-full">
        <BalanceSummary />
      </div>
    </div>
  );
}

export default Dashboard;
