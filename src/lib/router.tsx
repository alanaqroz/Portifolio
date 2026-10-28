import { createContext, useCallback, useContext, useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

/*
 * Roteador mínimo baseado em query string:
 *   /            → página inicial
 *   /?caso=auris → estudo de caso do Auris
 * Funciona em hospedagem estática (GitHub Pages) sem configurar redirecionamentos,
 * e as âncoras normais (#trabalhos, #sobre) continuam funcionando.
 */

type Route = { caseSlug: string | null; hash: string };

const readRoute = (): Route => ({
  caseSlug: new URLSearchParams(window.location.search).get('caso'),
  hash: window.location.hash.slice(1),
});

type RouterValue = Route & { navigate: (href: string) => void };

const RouterContext = createContext<RouterValue | null>(null);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const onPop = () => setRoute(readRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((href: string) => {
    window.history.pushState(null, '', href);
    setRoute(readRoute());
  }, []);

  return <RouterContext.Provider value={{ ...route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter precisa estar dentro de <RouterProvider>');
  return ctx;
}

/** Monta o href de um estudo de caso ou de uma seção da página inicial. */
export const caseHref = (slug: string) => `?caso=${slug}`;
export const homeHref = (section?: string) => `./${section ? `#${section}` : ''}`;

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Link interno: troca de página sem recarregar quando muda a rota,
 * e deixa o navegador cuidar sozinho das âncoras na mesma página.
 */
export function Link({ href, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const target = new URL(href, window.location.href);
    const samePage = target.pathname === window.location.pathname && target.search === window.location.search;
    if (samePage) return; // âncora na mesma página: comportamento nativo
    event.preventDefault();
    navigate(target.pathname + target.search + target.hash);
  };

  return <a href={href} onClick={handleClick} {...rest} />;
}
