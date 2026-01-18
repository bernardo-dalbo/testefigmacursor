import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {
  Transaction,
  Goal,
  CreditCard,
  BankAccount,
  FamilyMember,
  TransactionType,
} from '../types';

// Tipos para filtros globais
interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface ExpensesByCategory {
  category: string;
  amount: number;
}

export interface MonthlyFlowData {
  month: string; // "JAN", "FEV", etc.
  monthIndex: number; // 0-11 (janeiro-dezembro)
  income: number;
  expenses: number;
}

interface FinanceContextType {
  // Arrays de entidades
  transactions: Transaction[];
  goals: Goal[];
  creditCards: CreditCard[];
  bankAccounts: BankAccount[];
  familyMembers: FamilyMember[];

  // Funções CRUD - Transactions
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;

  // Funções CRUD - Goals
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;

  // Funções CRUD - CreditCards
  addCreditCard: (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCreditCard: (id: string, updates: Partial<CreditCard>) => void;
  deleteCreditCard: (id: string) => void;

  // Funções CRUD - BankAccounts
  addBankAccount: (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateBankAccount: (id: string, updates: Partial<BankAccount>) => void;
  deleteBankAccount: (id: string) => void;

  // Funções CRUD - FamilyMembers
  addFamilyMember: (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateFamilyMember: (id: string, updates: Partial<FamilyMember>) => void;
  deleteFamilyMember: (id: string) => void;

  // Estados de filtros globais
  selectedMember: string | null;
  setSelectedMember: (memberId: string | null) => void;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  transactionType: 'all' | TransactionType;
  setTransactionType: (type: 'all' | TransactionType) => void;
  searchText: string;
  setSearchText: (text: string) => void;

  // Funções de cálculo derivadas
  getFilteredTransactions: () => Transaction[];
  calculateTotalBalance: () => number;
  calculateIncomeForPeriod: () => number;
  calculateExpensesForPeriod: () => number;
  calculateExpensesByCategory: () => ExpensesByCategory[];
  calculateCategoryPercentage: (category: string) => number;
  calculateSavingsRate: () => number;
  calculateMonthlyFlow: () => MonthlyFlowData[];
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

/**
 * Função para gerar ID único
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Função para inicializar dados mock
 * Popula o estado inicial com dados realistas para desenvolvimento
 */
function initializeMockData() {
  const now = new Date();
  
  // Membros da família (3 membros brasileiros)
  const mockMembers: FamilyMember[] = [
    {
      id: 'member-1',
      name: 'Lucas Marte',
      role: 'Pai',
      avatarUrl: '/3b209d0eef350825920805aa279d69a669b24c57.png',
      monthlyIncome: 12000,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'member-2',
      name: 'Maria Silva',
      role: 'Mãe',
      avatarUrl: '/3906d919b8079af2cc5ccece533b08843ebfe8e5.png',
      monthlyIncome: 8000,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'member-3',
      name: 'João Marte',
      role: 'Filho',
      monthlyIncome: 0,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
  ];

  // Contas bancárias (3 contas de bancos conhecidos)
  const mockAccounts: BankAccount[] = [
    {
      id: 'account-1',
      name: 'Nubank Conta',
      holderId: 'member-1',
      balance: 5000,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'account-2',
      name: 'Inter Conta',
      holderId: 'member-2',
      balance: 3000,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'account-3',
      name: 'Picpay Conta',
      holderId: 'member-1',
      balance: 500,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
  ];

  // Cartões de crédito (3 cartões)
  const mockCards: CreditCard[] = [
    {
      id: 'card-1',
      name: 'Nubank Mastercard',
      holderId: 'member-1',
      closingDay: 10,
      dueDay: 20,
      limit: 5000,
      currentBill: 1200,
      theme: 'black',
      lastDigits: '5897',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'card-2',
      name: 'Inter Visa',
      holderId: 'member-2',
      closingDay: 15,
      dueDay: 25,
      limit: 3000,
      currentBill: 800,
      theme: 'lime',
      lastDigits: '1234',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'card-3',
      name: 'XP Mastercard',
      holderId: 'member-1',
      closingDay: 5,
      dueDay: 15,
      limit: 10000,
      currentBill: 2300,
      theme: 'white',
      lastDigits: '9876',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
  ];

  // Transações (20-30 transações distribuídas nos últimos 3 meses)
  const mockTransactions: Transaction[] = [
    // Receitas
    {
      id: 't-1',
      type: 'income',
      amount: 12000,
      description: 'Salário',
      category: 'Salário',
      date: new Date(2024, now.getMonth(), 1),
      accountId: 'account-1',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: true,
      createdAt: new Date(2024, now.getMonth(), 1),
      updatedAt: new Date(2024, now.getMonth(), 1),
    },
    {
      id: 't-2',
      type: 'income',
      amount: 8000,
      description: 'Salário',
      category: 'Salário',
      date: new Date(2024, now.getMonth(), 1),
      accountId: 'account-2',
      memberId: 'member-2',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: true,
      createdAt: new Date(2024, now.getMonth(), 1),
      updatedAt: new Date(2024, now.getMonth(), 1),
    },
    // Despesas - Categorias brasileiras padrão
    {
      id: 't-3',
      type: 'expense',
      amount: 4000,
      description: 'Aluguel',
      category: 'Moradia',
      date: new Date(2024, now.getMonth(), 5),
      accountId: 'account-1',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
      createdAt: new Date(2024, now.getMonth(), 5),
      updatedAt: new Date(2024, now.getMonth(), 5),
    },
    {
      id: 't-4',
      type: 'expense',
      amount: 2000,
      description: 'Supermercado',
      category: 'Alimentação',
      date: new Date(2024, now.getMonth(), 10),
      accountId: 'card-1',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: false,
      createdAt: new Date(2024, now.getMonth(), 10),
      updatedAt: new Date(2024, now.getMonth(), 10),
    },
    {
      id: 't-5',
      type: 'expense',
      amount: 1500,
      description: 'Compras mensais',
      category: 'Alimentação',
      date: new Date(2024, now.getMonth(), 15),
      accountId: 'card-1',
      memberId: 'member-2',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: false,
      createdAt: new Date(2024, now.getMonth(), 15),
      updatedAt: new Date(2024, now.getMonth(), 15),
    },
    {
      id: 't-6',
      type: 'expense',
      amount: 120,
      description: 'Academia',
      category: 'Saúde',
      date: new Date(2024, now.getMonth(), 1),
      accountId: 'card-2',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: true,
      isPaid: true,
      createdAt: new Date(2024, now.getMonth(), 1),
      updatedAt: new Date(2024, now.getMonth(), 1),
    },
    {
      id: 't-7',
      type: 'expense',
      amount: 750,
      description: 'Passeio no parque',
      category: 'Lazer',
      date: new Date(2024, now.getMonth(), 20),
      accountId: 'card-3',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'completed',
      isRecurring: false,
      isPaid: false,
      createdAt: new Date(2024, now.getMonth(), 20),
      updatedAt: new Date(2024, now.getMonth(), 20),
    },
    {
      id: 't-8',
      type: 'expense',
      amount: 100,
      description: 'Conta de água',
      category: 'Manutenção',
      date: new Date(2024, now.getMonth(), 21),
      accountId: 'account-1',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: false,
      isPaid: false,
      createdAt: new Date(2024, now.getMonth(), 21),
      updatedAt: new Date(2024, now.getMonth(), 21),
    },
    {
      id: 't-9',
      type: 'expense',
      amount: 150,
      description: 'Conta de Luz',
      category: 'Manutenção',
      date: new Date(2024, now.getMonth(), 21),
      accountId: 'card-1',
      memberId: 'member-1',
      installments: 1,
      currentInstallment: 1,
      status: 'pending',
      isRecurring: false,
      isPaid: false,
      createdAt: new Date(2024, now.getMonth(), 21),
      updatedAt: new Date(2024, now.getMonth(), 21),
    },
  ];

  // Objetivos (4 objetivos variados)
  const mockGoals: Goal[] = [
    {
      id: 'goal-1',
      title: 'Férias em dezembro',
      description: 'Viajar para o exterior',
      targetAmount: 15000,
      currentAmount: 5000,
      deadline: new Date(2024, 11, 1),
      status: 'active',
      memberId: 'member-1',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'goal-2',
      title: 'Reserva de emergência',
      description: 'Criar fundo de emergência de 6 meses',
      targetAmount: 120000,
      currentAmount: 30000,
      deadline: new Date(2025, 6, 1),
      status: 'active',
      memberId: null,
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'goal-3',
      title: 'Carro novo',
      description: 'Trocar o carro por um modelo mais novo',
      targetAmount: 80000,
      currentAmount: 20000,
      deadline: new Date(2025, 11, 1),
      status: 'active',
      memberId: 'member-1',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'goal-4',
      title: 'Presente de aniversário',
      description: 'Presente para filho',
      targetAmount: 500,
      currentAmount: 500,
      deadline: new Date(2024, 3, 15),
      status: 'completed',
      memberId: 'member-3',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 3, 15),
    },
  ];

  return {
    familyMembers: mockMembers,
    bankAccounts: mockAccounts,
    creditCards: mockCards,
    transactions: mockTransactions,
    goals: mockGoals,
  };
}

/**
 * Provider do Context Global de Finanças
 * Gerencia todo o estado da aplicação (arrays de entidades e filtros)
 * NÃO usa localStorage/sessionStorage - apenas React state (conforme PROMPT 4)
 */
export function FinanceProvider({ children }: { children: ReactNode }) {
  // Arrays de entidades - estado inicial vazio (será populado com useEffect)
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  // Popula dados mock na inicialização (apenas uma vez)
  useEffect(() => {
    const mockData = initializeMockData();
    setFamilyMembers(mockData.familyMembers);
    setBankAccounts(mockData.bankAccounts);
    setCreditCards(mockData.creditCards);
    setTransactions(mockData.transactions);
    setGoals(mockData.goals);
  }, []);

  // Estados de filtros globais
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });
  const [transactionType, setTransactionType] = useState<'all' | TransactionType>('all');
  const [searchText, setSearchText] = useState<string>('');

  // Funções CRUD - Transactions
  const addTransaction = (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newTransaction: Transaction = {
      ...transaction,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const updateTransaction = (id: string, updates: Partial<Transaction>) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // Funções CRUD - Goals
  const addGoal = (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newGoal: Goal = {
      ...goal,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  const updateGoal = (id: string, updates: Partial<Goal>) => {
    setGoals((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, ...updates, updatedAt: new Date() } : g
      )
    );
  };

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  // Funções CRUD - CreditCards
  const addCreditCard = (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newCard: CreditCard = {
      ...card,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setCreditCards((prev) => [...prev, newCard]);
  };

  const updateCreditCard = (id: string, updates: Partial<CreditCard>) => {
    setCreditCards((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c
      )
    );
  };

  const deleteCreditCard = (id: string) => {
    setCreditCards((prev) => prev.filter((c) => c.id !== id));
  };

  // Funções CRUD - BankAccounts
  const addBankAccount = (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newAccount: BankAccount = {
      ...account,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setBankAccounts((prev) => [...prev, newAccount]);
  };

  const updateBankAccount = (id: string, updates: Partial<BankAccount>) => {
    setBankAccounts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, ...updates, updatedAt: new Date() } : a
      )
    );
  };

  const deleteBankAccount = (id: string) => {
    setBankAccounts((prev) => prev.filter((a) => a.id !== id));
  };

  // Funções CRUD - FamilyMembers
  const addFamilyMember = (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newMember: FamilyMember = {
      ...member,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setFamilyMembers((prev) => [...prev, newMember]);
  };

  const updateFamilyMember = (id: string, updates: Partial<FamilyMember>) => {
    setFamilyMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, ...updates, updatedAt: new Date() } : m
      )
    );
  };

  const deleteFamilyMember = (id: string) => {
    setFamilyMembers((prev) => prev.filter((m) => m.id !== id));
  };

  // Função: getFilteredTransactions
  const getFilteredTransactions = (): Transaction[] => {
    let filtered = [...transactions];

    // Filtro por membro
    if (selectedMember) {
      filtered = filtered.filter((t) => t.memberId === selectedMember);
    }

    // Filtro por período
    if (dateRange.startDate && dateRange.endDate) {
      filtered = filtered.filter((t) => {
        const transactionDate = new Date(t.date);
        return transactionDate >= dateRange.startDate! && transactionDate <= dateRange.endDate!;
      });
    }

    // Filtro por tipo de transação
    if (transactionType !== 'all') {
      filtered = filtered.filter((t) => t.type === transactionType);
    }

    // Filtro por busca textual (descrição OU categoria)
    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchLower) ||
          t.category.toLowerCase().includes(searchLower)
      );
    }

    // Ordenar por data (mais recente primeiro)
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  // Função: calculateTotalBalance
  const calculateTotalBalance = (): number => {
    const accountsBalance = bankAccounts.reduce((sum, account) => sum + account.balance, 0);
    const cardsBalance = creditCards.reduce((sum, card) => sum + (card.limit - card.currentBill), 0);
    return accountsBalance + cardsBalance;
  };

  // Função: calculateIncomeForPeriod
  const calculateIncomeForPeriod = (): number => {
    const filtered = getFilteredTransactions();
    return filtered
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  // Função: calculateExpensesForPeriod
  const calculateExpensesForPeriod = (): number => {
    const filtered = getFilteredTransactions();
    return filtered
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  // Função: calculateExpensesByCategory
  const calculateExpensesByCategory = (): ExpensesByCategory[] => {
    const filtered = getFilteredTransactions();
    const expenses = filtered.filter((t) => t.type === 'expense');
    
    const grouped = expenses.reduce((acc, t) => {
      const existing = acc.find((item) => item.category === t.category);
      if (existing) {
        existing.amount += t.amount;
      } else {
        acc.push({ category: t.category, amount: t.amount });
      }
      return acc;
    }, [] as ExpensesByCategory[]);

    // Ordenar por valor decrescente
    return grouped.sort((a, b) => b.amount - a.amount);
  };

  // Função: calculateCategoryPercentage
  const calculateCategoryPercentage = (category: string): number => {
    const totalIncome = calculateIncomeForPeriod();
    if (totalIncome === 0) return 0;

    const categoryExpenses = calculateExpensesByCategory().find(
      (item) => item.category === category
    );
    if (!categoryExpenses) return 0;

    return (categoryExpenses.amount / totalIncome) * 100;
  };

  // Função: calculateSavingsRate
  const calculateSavingsRate = (): number => {
    const income = calculateIncomeForPeriod();
    if (income === 0) return 0;

    const expenses = calculateExpensesForPeriod();
    return ((income - expenses) / income) * 100;
  };

  // Função: calculateMonthlyFlow
  // Calcula receitas e despesas para cada mês do ano (JAN a DEZ)
  const calculateMonthlyFlow = (): MonthlyFlowData[] => {
    const monthNames = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Inicializar array com todos os meses do ano
    const monthlyData: MonthlyFlowData[] = monthNames.map((month, index) => ({
      month,
      monthIndex: index,
      income: 0,
      expenses: 0,
    }));

    // Obter todas as transações (sem filtros, para mostrar ano completo)
    const allTransactions = transactions;

    // Agrupar por mês
    allTransactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const transactionYear = transactionDate.getFullYear();
      const transactionMonth = transactionDate.getMonth(); // 0-11

      // Apenas transações do ano atual
      if (transactionYear === currentYear) {
        if (transaction.type === 'income') {
          monthlyData[transactionMonth].income += transaction.amount;
        } else if (transaction.type === 'expense') {
          monthlyData[transactionMonth].expenses += transaction.amount;
        }
      }
    });

    return monthlyData;
  };

  const value: FinanceContextType = {
    // Arrays
    transactions,
    goals,
    creditCards,
    bankAccounts,
    familyMembers,

    // CRUD - Transactions
    addTransaction,
    updateTransaction,
    deleteTransaction,

    // CRUD - Goals
    addGoal,
    updateGoal,
    deleteGoal,

    // CRUD - CreditCards
    addCreditCard,
    updateCreditCard,
    deleteCreditCard,

    // CRUD - BankAccounts
    addBankAccount,
    updateBankAccount,
    deleteBankAccount,

    // CRUD - FamilyMembers
    addFamilyMember,
    updateFamilyMember,
    deleteFamilyMember,

    // Filtros globais
    selectedMember,
    setSelectedMember,
    dateRange,
    setDateRange,
    transactionType,
    setTransactionType,
    searchText,
    setSearchText,

    // Funções de cálculo
    getFilteredTransactions,
    calculateTotalBalance,
    calculateIncomeForPeriod,
    calculateExpensesForPeriod,
    calculateExpensesByCategory,
    calculateCategoryPercentage,
    calculateSavingsRate,
    calculateMonthlyFlow,
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
}

/**
 * Hook customizado useFinance
 * Encapsula useContext e fornece acesso limpo a todo o estado e funções
 */
export function useFinance() {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance deve ser usado dentro de um FinanceProvider');
  }
  return context;
}
