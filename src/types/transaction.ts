/**
 * Tipo de transação: receita ou despesa
 */
export type TransactionType = 'income' | 'expense';

/**
 * Status da transação
 */
export type TransactionStatus = 'completed' | 'pending' | 'cancelled';

/**
 * Entidade Transaction - Representa uma transação financeira
 */
export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: Date;
  accountId: string; // ID da conta bancária ou cartão de crédito
  memberId: string | null; // ID do membro responsável, null se for geral
  installments: number; // Número de parcelas (1 = à vista)
  currentInstallment: number; // Parcela atual (1, 2, 3...)
  status: TransactionStatus;
  isRecurring: boolean; // Se é despesa recorrente (ex: assinatura mensal)
  isPaid: boolean; // Se foi paga (para despesas)
  createdAt: Date;
  updatedAt: Date;
}
