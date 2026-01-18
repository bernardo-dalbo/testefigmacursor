interface IconProps {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
}

/**
 * Componente Icon - Wrapper para ícones SVG
 */
export default function Icon({ src, alt = '', className = '', size = 24 }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
