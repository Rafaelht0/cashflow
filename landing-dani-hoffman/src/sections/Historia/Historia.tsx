import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import styles from './Historia.module.css';

const ANTES = [
  'Cresci num ambiente onde não se falava sobre dinheiro.',
  'Administrava o que ganhava sem nenhum objetivo claro.',
  'Gastava pensando só no agora, sem reserva nenhuma.',
  'Achava que investir era coisa de gente rica.',
];

const VIRADA = [
  'Mesmo na CLT, sempre tive o impulso de empreender e fazer diferente.',
  'Em 2017 o Benjamin nasceu, e tudo mudou.',
  'Decidi que não ia repetir os ciclos que vivi.',
  'Organizei, planejei e passei a ensinar o que funcionou para mim.',
];

export function Historia() {
  return (
    <section id="historia" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Minha história"
          title={
            <>
              Eu também já estive <em className="gold-text">do outro lado.</em>
            </>
          }
          subtitle="Não existe fórmula mágica. Existe uma virada de chave e um método simples para manter essa decisão todos os dias."
        />

        <div className={styles.columns}>
          <article className={`${styles.card} ${styles.before}`}>
            <span className={styles.tag}>Antes</span>
            <h3>A relação com o dinheiro</h3>
            <ul>
              {ANTES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={`${styles.card} ${styles.after}`}>
            <span className={styles.tag}>O ponto de virada</span>
            <h3>Quando virou prioridade</h3>
            <ul>
              {VIRADA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <blockquote className={styles.quote}>
          <p>“Que futuro eu quero deixar para ele?”</p>
          <cite>A pergunta que mudou tudo, quando o Benjamin nasceu.</cite>
        </blockquote>
      </Container>
    </section>
  );
}
