/**
 * Formata objeto Date para string no formato brasileiro
 * @param date - Data a ser formatada
 * @returns String formatada como "DD/MM/AAAA"
 */
export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Formata range de datas para exibição
 * @param startDate - Data inicial
 * @param endDate - Data final
 * @returns String formatada como "01 Jan - 31 Jan 2026"
 */
export function formatDateRange(startDate: Date | null, endDate: Date | null): string {
  if (!startDate || !endDate) {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    startDate = firstDay;
    endDate = lastDay;
  }

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  const startDay = String(startDate.getDate()).padStart(2, '0');
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();
  
  const endDay = String(endDate.getDate()).padStart(2, '0');
  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  if (startYear === endYear && startMonth === endMonth) {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
  }
  
  if (startYear === endYear) {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
  }
  
  return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
}
