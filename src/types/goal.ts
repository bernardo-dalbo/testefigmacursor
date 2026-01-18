/**
 * Status do objetivo
 */
export type GoalStatus = 'active' | 'completed' | 'cancelled';

/**
 * Entidade Goal - Representa um objetivo financeiro
 */
export interface Goal {
  id: string;
  title: string;
  description: string;
  targetAmount: number; // Valor alvo
  currentAmount: number; // Valor atual acumulado
  deadline: Date; // Data limite
  status: GoalStatus;
  memberId: string | null; // ID do membro responsável, null se for familiar
  createdAt: Date;
  updatedAt: Date;
}
