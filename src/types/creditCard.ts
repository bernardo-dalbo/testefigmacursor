/**
 * Tema visual do cartão
 */
export type CreditCardTheme = 'black' | 'lime' | 'white';

/**
 * Entidade CreditCard - Representa um cartão de crédito
 */
export interface CreditCard {
  id: string;
  name: string; // Nome do cartão (ex: "Nubank Mastercard")
  holderId: string; // ID do membro titular
  closingDay: number; // Dia de fechamento (1-31)
  dueDay: number; // Dia de vencimento (1-31)
  limit: number; // Limite total do cartão
  currentBill: number; // Fatura atual
  theme: CreditCardTheme; // Tema visual
  lastDigits?: string; // Últimos 4 dígitos (opcional)
  createdAt: Date;
  updatedAt: Date;
}
