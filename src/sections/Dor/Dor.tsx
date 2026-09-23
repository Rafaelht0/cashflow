import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import styles from './Dor.module.css';

const DORES = [
  'O salário cai na conta e, quando vê, já acabou antes do fim do mês.',
  'Você não sabe dizer com certeza para onde o seu dinheiro está indo.',
  'Guardar dinheiro parece impossível, sempre aparece um imprevisto.',
  'Investir soa como “coisa de gente rica” ou complicado demais.',
  'Já tentou anotar gastos, mas desistiu depois de duas semanas.',
  'Sente culpa ou ansiedade toda vez que pensa em dinheiro.',
];

export function Dor() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Você se reconhece?"
          title={
            <>
              Não é falta de dinheiro. <em className="gold-text">É falta de direção.</em>
            </>
          }
          subtitle="Se alguma dessas frases parece ter sido escrita sobre você, essa página é para você."
        />
        <ul className={styles.grid}>
          {DORES.map((dor) => (
            <li key={dor} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                ✕
              </span>
              <p>{dor}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
