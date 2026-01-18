import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FinanceProvider } from './contexts/FinanceContext';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Navbar from './components/layout/Navbar/Navbar';
import HeaderMobile from './components/layout/Header/HeaderMobile';
import Container from './components/layout/Container/Container';
import ErrorBoundary from './components/shared/ErrorBoundary';
import './styles/globals.css';

// Pages
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';

function App() {
  return (
    <ErrorBoundary>
      <FinanceProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background-400">
          {/* Sidebar - apenas desktop (≥1280px) */}
          <Sidebar />
          
          {/* Navbar - apenas desktop (≥1280px) */}
          <Navbar />
          
          {/* HeaderMobile - apenas mobile/tablet (<1280px) */}
          <HeaderMobile />
          
          {/* Container - ajusta margem conforme sidebar/header */}
          <Container>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </FinanceProvider>
    </ErrorBoundary>
  );
}

export default App;
