/**
 * Entidade FamilyMember - Representa um membro da família
 */
export interface FamilyMember {
  id: string;
  name: string; // Nome completo
  role: string; // Função na família (ex: "Pai", "Mãe", "Filho")
  avatarUrl?: string; // URL do avatar (opcional)
  monthlyIncome?: number; // Renda mensal estimada (opcional)
  createdAt: Date;
  updatedAt: Date;
}
