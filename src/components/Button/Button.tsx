import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  external = true,
}: ButtonProps) {
  const className = [styles.button, styles[variant], styles[size], fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
