import { CHECKOUT_URL } from '../../config/offer';
import { Container } from '../Container/Container';
import styles from './Header.module.css';

const LINKS = [
  { href: '#historia', label: 'História' },
  { href: '#produto', label: 'Produto' },
  { href: '#sobre', label: 'Sobre a Dani' },
  { href: '#faq', label: 'Dúvidas' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <a href="#top" className={styles.logo} aria-label="Cash Flow, voltar ao início">
            <img src="/logo-cash-flow-icon.png" alt="" className={styles.logoIcon} />
            <img src="/logo-cash-flow-wordmark.png" alt="Cash Flow" className={styles.logoWordmark} />
          </a>
          <nav className={styles.nav}>
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href={CHECKOUT_URL} className={styles.cta} target="_blank" rel="noopener noreferrer">
            Quero a planilha
          </a>
        </div>
      </Container>
    </header>
  );
}
