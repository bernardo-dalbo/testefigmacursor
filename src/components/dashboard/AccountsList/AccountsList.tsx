import { useFinance } from '../../../contexts/FinanceContext';
import CreditCardItem from './CreditCardItem';

/**
 * Componente AccountsList - Widget de Cartões de Crédito
 * Mostra lista de cartões com informações de fatura e vencimento
 */
export default function AccountsList() {
  const { creditCards } = useFinance();

  if (creditCards.length === 0) {
    return (
      <div className="
        bg-white
        border border-neutral-300
        rounded-[var(--radius-20)]
        p-[var(--spacing-32)]
        w-full
        flex flex-col
        gap-[var(--spacing-32)]
      ">
        <div className="flex items-center justify-between shrink-0 w-full">
          <div className="flex items-center gap-[var(--spacing-8)] flex-1">
            {/* Ícone de cartão (placeholder) */}
            <div className="
              w-[24px]
              h-[24px]
              bg-neutral-300
              rounded-[var(--radius-sm)]
              shrink-0
            " />
            <h3 className="
              text-[20px]
              font-bold
              leading-[28px]
              text-neutral-1100
              flex-1
            ">
              Cards & contas
            </h3>
          </div>
        </div>

        <p className="text-neutral-500 text-sm text-center py-[var(--spacing-24)]">
          Nenhum cartão cadastrado.
        </p>
      </div>
    );
  }

  return (
    <div className="
      bg-white
      border border-neutral-300
      rounded-[var(--radius-20)]
      p-[var(--spacing-32)]
      w-full
      flex flex-col
      gap-[var(--spacing-32)]
    ">
      {/* Header com título e botões */}
      <div className="flex items-center justify-between shrink-0 w-full">
        <div className="flex items-center gap-[var(--spacing-8)] flex-1">
          {/* Ícone de cartão (placeholder) */}
          <div className="
            w-[24px]
            h-[24px]
            bg-neutral-300
            rounded-[var(--radius-sm)]
            shrink-0
          " />
          <h3 className="
            text-[20px]
            font-bold
            leading-[28px]
            text-neutral-1100
            flex-1
          ">
            Cards & contas
          </h3>
        </div>

        {/* Botões de ação */}
        <div className="flex items-center gap-[var(--spacing-12)] shrink-0">
          {/* Botão adicionar (placeholder) */}
          <button
            className="
              border border-neutral-300
              rounded-[var(--radius-full)]
              w-[32px]
              h-[32px]
              flex items-center justify-center
              hover:bg-neutral-100
              transition-colors
            "
            title="Adicionar cartão"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3V13M3 8H13"
                stroke="var(--color-neutral-1100)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Botão ver todos (placeholder) */}
          <button
            className="
              border border-neutral-300
              rounded-[var(--radius-full)]
              w-[32px]
              h-[32px]
              flex items-center justify-center
              hover:bg-neutral-100
              transition-colors
            "
            title="Ver todos"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="var(--color-neutral-1100)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lista de cartões */}
      <div className="flex flex-col gap-[var(--spacing-16)] w-full">
        {creditCards.slice(0, 3).map((card) => (
          <CreditCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}