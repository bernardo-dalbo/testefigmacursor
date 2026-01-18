import { useState } from 'react';

/**
 * Hook customizado para gerenciar estado da sidebar (expand/collapse)
 */
export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  return {
    isExpanded,
    toggle,
    expand,
    collapse,
  };
}
