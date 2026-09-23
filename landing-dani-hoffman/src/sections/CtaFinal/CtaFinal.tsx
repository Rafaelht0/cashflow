import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { CHECKOUT_URL } from '../../config/offer';
import styles from './CtaFinal.module.css';

export function CtaFinal() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            O futuro que você quer <em className="gold-text">começa com uma decisão.</em>
          </h2>
          <p className={styles.text}>
            Daqui a um ano você vai desejar ter começado hoje. Dê o primeiro passo agora.
          </p>
          <Button href={CHECKOUT_URL} size="lg">
            Quero começar agora
          </Button>
        </div>
      </Container>
    </section>
  );
}
