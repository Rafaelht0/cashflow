import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import {
  CHECKOUT_URL,
  GUARANTEE_DAYS,
  PRICE,
  PRODUCT_NAME,
  PRODUCT_TAGLINE,
  TODAY_DISCOUNT_PERCENT,
} from '../../config/offer';
import styles from './Oferta.module.css';

const INCLUSO = [
  'Curso completo com a Dani: 12 módulos',
  'Planilha Financeira Automatizada de brinde',
  'Acesso imediato após a confirmação',
  'Atualizações da planilha sem custo extra',
];

export function Oferta() {
  return (
    <section id="oferta" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Oferta"
          title={
            <>
              Comece hoje a <em className="gold-text">organizar o seu futuro.</em>
            </>
          }
        />

        <div className={styles.card}>
          <div className={styles.urgency}>
            Comprando hoje você garante <strong>{TODAY_DISCOUNT_PERCENT}% de desconto</strong>
          </div>

          <div className={styles.cardBody}>
            <span className={styles.product}>{PRODUCT_NAME}</span>
            <span className={styles.tagline}>{PRODUCT_TAGLINE}</span>

            <ul className={styles.list}>
              {INCLUSO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={styles.price}>
              <strong className={styles.installments}>{PRICE.installments}</strong>
              <span className={styles.cash}>ou {PRICE.total} à vista</span>
            </div>

            <Button href={CHECKOUT_URL} size="lg" fullWidth>
              Quero garantir meu acesso
            </Button>

            <p className={styles.secure}>Pagamento 100% seguro pela Kiwify · Pix, cartão ou boleto</p>
          </div>
        </div>

        <div className={styles.guarantee}>
          <div className={styles.seal} aria-hidden="true">
            <strong>{GUARANTEE_DAYS}</strong>
            <span>dias</span>
          </div>
          <div>
            <h3>Garantia incondicional de {GUARANTEE_DAYS} dias</h3>
            <p>
              Entre, assista às aulas e use a planilha. Se por qualquer motivo não fizer sentido
              para você, é só pedir o reembolso dentro do prazo e você recebe 100% do valor de
              volta. Sem perguntas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
