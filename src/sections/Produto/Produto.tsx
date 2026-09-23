import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import styles from './Produto.module.css';

const MODULOS = [
  'Boas-vindas',
  'Mentalidade financeira',
  'Levantamento de dados',
  'Usando a IA para simplificar',
  'Estruturando a planilha',
  'Análise de receitas',
  'Análise de despesas',
  'Análise do fluxo de caixa',
  'Decisões que impactam o futuro (meios de pagamento)',
  'Método 70/30',
  'Dash',
  'Conclusão final',
];

const BENEFICIOS_PLANILHA = [
  'Cartões e contas 100% personalizáveis: cadastre quantos quiser',
  'Compras parceladas divididas automaticamente, mês a mês — mesmo quando a parcela cai só no ano seguinte',
  'Dashboard com gráficos automáticos: top 5 maiores gastos e receitas x despesas mês a mês',
  'Filtro de ano e mês independente em cada aba da planilha',
  'Gastos classificados automaticamente em Essencial, Estilo de Vida, Educação e Planos Futuros',
  'Sem fórmulas: você só lança, o resto é automático',
];

export function Produto() {
  return (
    <section id="produto" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="O que você recebe"
          title={
            <>
              Um curso completo para mudar sua relação com o dinheiro.{' '}
              <em className="gold-text">E a planilha para colocar em prática.</em>
            </>
          }
          subtitle="Você aprende o método com a Dani, módulo a módulo, e já aplica na planilha automatizada que acompanha o curso."
        />

        <article className={`${styles.card} ${styles.main}`}>
          <div className={styles.cardHead}>
            <span className={styles.number}>01</span>
            <span className={styles.type}>Curso principal</span>
          </div>
          <h3 className={styles.cardTitle}>Curso Cash Flow com a Dani</h3>
          <p className={styles.cardText}>
            12 módulos diretos ao ponto: da mentalidade financeira à análise dos seus números e às
            decisões que impactam o seu futuro.
          </p>
          <ol className={styles.modules}>
            {MODULOS.map((modulo, i) => (
              <li key={modulo}>
                <span className={styles.moduleNumber}>{String(i + 1).padStart(2, '0')}</span>
                {modulo}
              </li>
            ))}
          </ol>
        </article>

        <article className={`${styles.card} ${styles.complement}`}>
          <div className={styles.cardHead}>
            <span className={styles.number}>02</span>
            <span className={styles.type}>Complemento prático</span>
          </div>
          <h3 className={styles.cardTitle}>Planilha Financeira Automatizada</h3>
          <p className={styles.cardText}>
            A ferramenta que coloca o curso em prática. Você só lança entradas e saídas; a planilha
            faz as contas e mostra onde o seu dinheiro está indo, em Excel ou LibreOffice, sem
            precisar instalar mais nada.
          </p>
          <ul className={styles.list}>
            {BENEFICIOS_PLANILHA.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        <p className={styles.plus}>
          <span>+</span> Acesso pela área de membros da Kiwify, no seu tempo, quantas vezes quiser.
        </p>
      </Container>
    </section>
  );
}
