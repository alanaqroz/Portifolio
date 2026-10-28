import type { CSSProperties, ReactNode } from 'react';
import type { ProjectImage } from '../content/types';

type Rotation = { rotate?: number };

const rot = (rotate = 0, extra?: CSSProperties): CSSProperties => ({ ['--rotate' as string]: `${rotate}deg`, ...extra });

/** Anotação manuscrita solta, como uma nota a lápis na margem. */
export function HandNote({ children, rotate = -3, className = '' }: { children: ReactNode; className?: string } & Rotation) {
  return (
    <p className={`hand-note ${className}`} style={rot(rotate)}>
      {children}
    </p>
  );
}

/** Post-it amarelo com fita adesiva. */
export function StickyNote({ children, rotate = 3, className = '' }: { children: ReactNode; className?: string } & Rotation) {
  return (
    <div className={`sticky-note ${className}`} style={rot(rotate)}>
      <span className="tape" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

/** Foto impressa com borda branca (estilo polaroid) e legenda opcional. */
export function PhotoPrint({
  image,
  rotate = 0,
  tape = false,
  className = '',
  loading = 'lazy',
  sizes,
}: {
  image: ProjectImage;
  tape?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
} & Rotation) {
  return (
    <figure className={`photo-print ${className}`} style={rot(rotate)}>
      {tape && <span className="tape" aria-hidden="true" />}
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={loading} decoding="async" sizes={sizes} />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

/** Moldura de iPhone desenhada em CSS. Aceita uma imagem ou conteúdo livre (placeholder). */
export function DeviceFrame({
  image,
  children,
  label,
  rotate = 0,
  className = '',
  loading = 'lazy',
}: {
  image?: ProjectImage;
  children?: ReactNode;
  label?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
} & Rotation) {
  return (
    <figure className={`device ${className}`} style={rot(rotate)} aria-label={label}>
      <div className="device__screen">
        <span className="device__island" aria-hidden="true" />
        {image ? (
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={loading} decoding="async" />
        ) : (
          children
        )}
      </div>
    </figure>
  );
}

/** Etiquetas de tecnologia, como rótulos de arquivo. */
export function TagList({ items, label = 'Tecnologias' }: { items: string[]; label?: string }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Nota de edição: marca, de forma visível e intencional, um conteúdo que ainda
 * precisa ser escrito. Edite o texto em src/content/projects.ts.
 */
export function EditorNote({ children, title = 'A preencher' }: { children: ReactNode; title?: string }) {
  return (
    <aside className="editor-note" aria-label={`Nota de edição: ${title}`}>
      <p className="editor-note__title">
        <span aria-hidden="true">✎</span> {title}
      </p>
      <p className="editor-note__body">{children}</p>
    </aside>
  );
}
