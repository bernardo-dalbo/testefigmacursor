import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary - Captura erros JavaScript e exibe mensagem amigável
 * Previne tela branca quando há erros em componentes React
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background-400 flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-300 rounded-[var(--radius-20)] p-[var(--spacing-32)] max-w-2xl w-full">
            <h1 className="text-[24px] font-bold leading-[32px] text-neutral-1100 mb-[var(--spacing-16)]">
              Ops! Algo deu errado
            </h1>
            <p className="text-[16px] font-normal leading-[24px] text-neutral-1100 mb-[var(--spacing-16)]">
              Ocorreu um erro inesperado. Por favor, recarregue a página ou entre em contato com o suporte.
            </p>
            {this.state.error && (
              <details className="mt-[var(--spacing-16)]">
                <summary className="text-[14px] font-semibold text-neutral-500 cursor-pointer mb-[var(--spacing-8)]">
                  Detalhes do erro
                </summary>
                <pre className="bg-neutral-100 p-[var(--spacing-16)] rounded-[var(--radius-md)] text-[12px] overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-[var(--spacing-24)] px-[var(--spacing-24)] py-[var(--spacing-12)] bg-secondary-900 text-white rounded-[var(--radius-md)] font-semibold hover:opacity-90 transition-opacity"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}