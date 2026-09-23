import { Button } from '../../components/Button/Button';
import { CHECKOUT_URL, GUARANTEE_DAYS, PRODUCT_NAME, PRODUCT_TAGLINE } from '../../config/offer';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.promise}>{PRODUCT_TAGLINE}</p>
          <span className={styles.badge}>{PRODUCT_NAME} · Curso + Planilha automatizada</span>
          <h1 className={styles.title}>
            Seu dinheiro organizado.
            <br />
            <em className="gold-text">Seu futuro decidido por você.</em>
          </h1>
          <p className={styles.subtitle}>
            Um curso direto ao ponto, com o método que eu uso para sair do “gasto pensando só no
            agora” e construir reserva, metas e tranquilidade, junto com a planilha automatizada
            que coloca tudo em prática.
          </p>
          <div className={styles.actions}>
            <Button href={CHECKOUT_URL} size="lg">
              Quero organizar minhas finanças
            </Button>
            <Button href="#produto" variant="secondary" external={false}>
              Ver o que está incluso
            </Button>
          </div>
          <ul className={styles.trust}>
            <li>Acesso imediato</li>
            <li>Compra segura Kiwify</li>
            <li>Garantia de {GUARANTEE_DAYS} dias</li>
          </ul>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoGlow} aria-hidden="true" />
          <img
            src="/dani-hoffman-hero.webp"
            alt="Dani Hoffman, educadora financeira"
            className={styles.photo}
            fetchPriority="high"
          />
          <div className={styles.signature}>
            <strong>Dani Hoffman</strong>
            <span>Educadora financeira desde 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}
