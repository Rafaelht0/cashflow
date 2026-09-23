import { INSTAGRAM } from '../../config/offer';
import { Container } from '../Container/Container';
import { InstagramIcon } from '../InstagramIcon/InstagramIcon';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img src="/logo-cash-flow.png" alt="Cash Flow" className={styles.logoImg} />
            <span className={styles.byline}>por Dani Hoffman</span>
          </div>

          <p className={styles.copy}>
            © {new Date().getFullYear()} Cash Flow · Dani Hoffman. Todos os direitos reservados.
            <br />
            Pagamento processado com segurança pela Kiwify.
          </p>

          <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className={styles.social}>
            <span className={styles.socialIcon}>
              <InstagramIcon />
            </span>
            {INSTAGRAM.handle}
          </a>
        </div>

        <p className={styles.credit}>
          Desenvolvido pela{' '}
          <a href="https://www.teamz.dev.br" target="_blank" rel="noopener noreferrer">
            TeamZ
          </a>
        </p>
      </Container>
    </footer>
  );
}
