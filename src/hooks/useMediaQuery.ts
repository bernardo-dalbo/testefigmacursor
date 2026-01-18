import { useState, useEffect } from 'react';

/**
 * Hook customizado para detectar breakpoints responsivos
 */
export function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      const mobile = window.matchMedia('(max-width: 767px)').matches;
      const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches;
      const desktop = window.matchMedia('(min-width: 1280px)').matches;

      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);
    };

    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);

    return () => {
      window.removeEventListener('resize', checkMediaQuery);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
