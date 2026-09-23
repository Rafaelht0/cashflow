import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import styles from './ParaQuem.module.css';

const PERFIS = [
  { titulo: 'Quem nunca se organizou', texto: 'e quer começar do jeito certo, sem complicação.' },
  { titulo: 'Quem já tentou e desistiu', texto: 'e precisa de algo simples o bastante para manter.' },
  { titulo: 'Quem pensa no futuro da família', texto: 'e quer construir reserva e segurança de verdade.' },
  { titulo: 'Quem quer começar a investir', texto: 'mas antes precisa saber quanto sobra no mês.' },
];

export function ParaQuem() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Para quem é"
          title={
            <>
              Feito para quem decidiu <em className="gold-text">mudar a história.</em>
            </>
          }
        />
        <ul className={styles.grid}>
          {PERFIS.map((p) => (
            <li key={p.titulo} className={styles.item}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
