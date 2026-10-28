import { useEffect } from 'react';

/**
 * Observa todos os elementos com [data-reveal] e adiciona .is-visible
 * quando entram na tela. O CSS só esconde esses elementos se o usuário
 * aceita movimento — o conteúdo nunca depende da animação para aparecer.
 */
export function useReveal(dependency: unknown) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      root.classList.remove('motion-ok');
      return;
    }
    root.classList.add('motion-ok');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
}
