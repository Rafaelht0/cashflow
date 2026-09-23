import { Container } from '../../components/Container/Container';
import { INSTAGRAM } from '../../config/offer';
import styles from './Sobre.module.css';

const CREDENCIAIS = [
  'Educadora financeira desde 2021',
  'Graduada em Marketing',
  'Pós-graduada em Planejamento Estratégico',
  'Palestrante',
];

export function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            <img src="/dani-hoffman.jpg" alt="Dani Hoffman" className={styles.photo} loading="lazy" />
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Quem vai te guiar</span>
            <h2 className={styles.title}>
              Prazer, eu sou a <em className="gold-text">Dani Hoffman.</em>
            </h2>
            <p className={styles.text}>
              Cristã, mãe do Benjamin e caruaruense. Transformei a minha relação com o dinheiro
              quando entendi que organização financeira não é sobre ganhar muito, é sobre decidir
              para onde cada real vai.
            </p>
            <p className={styles.text}>
              Hoje ensino, de forma simples e sem ostentação, o mesmo caminho que eu percorri. Essa
              planilha e esse mini curso são o ponto de partida que eu gostaria de ter tido.
            </p>
            <ul className={styles.credentials}>
              {CREDENCIAIS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className={styles.insta}>
              Acompanhe no Instagram: {INSTAGRAM.handle}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
