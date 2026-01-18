/**
 * Entidade BankAccount - Representa uma conta bancária
 */
export interface BankAccount {
  id: string;
  name: string; // Nome da conta (ex: "Nubank Conta")
  holderId: string; // ID do membro titular
  balance: number; // Saldo atual
  createdAt: Date;
  updatedAt: Date;
}
