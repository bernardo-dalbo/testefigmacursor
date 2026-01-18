import { CreditCard } from '../../../types/creditCard';
import { formatCurrency } from '../../../utils/formatCurrency';

interface CreditCardItemProps {
  card: CreditCard;
}

/**
 * Função para extrair o nome do banco do nome do cartão
 * Exemplo: "Nubank Mastercard" -> "Nubank"
 */
function extractBankName(cardName: string): string {
  const parts = cardName.split(' ');
  return parts[0]; // Retorna a primeira palavra (ex: "Nubank", "Inter", "Picpay")
}

/**
 * Função para formatar últimos dígitos do cartão
 * Exemplo: "5897" -> "**** 5897"
 */
function formatLastDigits(lastDigits?: string): string {
  if (!lastDigits) return '**** ****';
  return `**** ${lastDigits}`;
}

/**
 * Componente CreditCardItem - Item individual de cartão de crédito
 * Mostra logo, nome, valor da fatura, dia de vencimento e últimos dígitos
 */
export default function CreditCardItem({ card }: CreditCardItemProps) {
  const bankName = extractBankName(card.name);
  const formattedLastDigits = formatLastDigits(card.lastDigits);

  return (
    <div className="
      flex
      items-start
      justify-between
      w-full
      gap-[var(--spacing-12)]
    ">
      {/* Informações do cartão (esquerda) */}
      <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
        {/* Logo e nome do banco */}
        <div className="flex items-center gap-[var(--spacing-8)]">
          {/* Placeholder para logo do banco */}
          <div className="
            w-[16px]
            h-[16px]
            rounded-[var(--radius-sm)]
            bg-neutral-300
            shrink-0
          " />
          <p className="
            text-[14px]
            font-normal
            leading-[20px]
            text-neutral-1100
            tracking-[0.3px]
            truncate
          ">
            {bankName}
          </p>
        </div>

        {/* Valor da fatura */}
        <p className="
          text-[24px]
          font-bold
          leading-[32px]
          text-neutral-1100
        ">
          {formatCurrency(card.currentBill)}
        </p>

        {/* Dia de vencimento */}
        <p className="
          text-[12px]
          font-semibold
          leading-[16px]
          text-neutral-1100
          tracking-[0.3px]
        ">
          Vence dia {card.dueDay}
        </p>
      </div>

      {/* Últimos dígitos (direita) */}
      <p className="
        text-[12px]
        font-semibold
        leading-[16px]
        text-neutral-1100
        tracking-[0.3px]
        shrink-0
      ">
        {formattedLastDigits}
      </p>
    </div>
  );
}