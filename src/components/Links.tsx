import type { ReactNode } from 'react';
import { Link } from '../lib/router';

type Variant = 'solid' | 'outline' | 'text';

/** Seta desenhada à mão, usada em botões e links. */
export function Arrow({ direction = 'right' }: { direction?: 'right' | 'down' | 'left' | 'up-right' }) {
  const rotate = { right: 0, down: 90, left: 180, 'up-right': -45 }[direction];
  return (
    <svg className="arrow" viewBox="0 0 24 12" width="22" height="11" aria-hidden="true" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M1 6.4c6.5-.6 13.5-.5 20.5-.2M16.2 1.5c1.8 1.7 3.4 3.1 5.2 4.6-1.9 1.4-3.6 2.9-5.3 4.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Link interno com aparência de botão (ou de texto sublinhado). */
export function ButtonLink({
  href,
  children,
  variant = 'solid',
  arrow = 'right',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: 'right' | 'down' | 'left' | null;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`}>
      {arrow === 'left' && <Arrow direction="left" />}
      <span>{children}</span>
      {arrow && arrow !== 'left' && <Arrow direction={arrow} />}
    </Link>
  );
}

/** Link externo: abre em nova aba e avisa isso para leitores de tela. */
export function ExternalLink({
  href,
  children,
  variant = 'text',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn--${variant} ${className}`}>
      <span>{children}</span>
      <Arrow direction="up-right" />
      <span className="visually-hidden"> (abre em nova aba)</span>
    </a>
  );
}
