import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import styles from './Produto.module.css';

const ITENS = [
  {
    numero: '01',
    tipo: 'Ferramenta',
    titulo: 'Planilha Financeira Automatizada',
    descricao:
      'Você só lança entradas e saídas. A planilha faz as contas, organiza por categoria e mostra onde o seu dinheiro está indo — em Excel ou LibreOffice, sem precisar instalar mais nada.',
    beneficios: [
      'Cartões e contas 100% personalizáveis: cadastre quantos quiser',
      'Compras parceladas divididas automaticamente, mês a mês — mesmo quando a parcela cai só no ano seguinte',
      'Dashboard com gráficos automáticos: top 5 maiores gastos e receitas x despesas mês a mês',
      'Filtro de ano e mês independente em cada aba da planilha',
      'Gastos classificados automaticamente em Essencial, Estilo de Vida, Educação e Planos Futuros',
      'Sem fórmulas: você só lança, o resto é automático',
    ],
  },
  {
    numero: '02',
    tipo: 'Método',
    titulo: 'Mini Curso com a Dani',
    // TODO: conteúdo programático (aulas, temas, carga horária) ainda não foi repassado pelo cliente.
    // A lista abaixo é uma proposta a validar antes de publicar.
    descricao:
      'Aulas curtas e diretas para você configurar a planilha, entender seus números e transformar isso em decisões.',
    beneficios: [
      'Como configurar a planilha do zero em poucos minutos',
      'Como descobrir para onde o dinheiro está indo',
      'Como montar sua reserva de emergência',
      'Como definir metas que cabem na sua realidade',
      'Os primeiros passos para começar a investir',
    ],
  },
];

export function Produto() {
  return (
    <section id="produto" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="O que você recebe"
          title={
            <>
              Uma ferramenta e um método. <em className="gold-text">Juntos.</em>
            </>
          }
          subtitle="A planilha organiza. O mini curso ensina a usar cada número a seu favor. Um sem o outro fica pela metade."
        />

        <div className={styles.grid}>
          {ITENS.map((item) => (
            <article key={item.numero} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.number}>{item.numero}</span>
                <span className={styles.type}>{item.tipo}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.titulo}</h3>
              <p className={styles.cardText}>{item.descricao}</p>
              <ul className={styles.list}>
                {item.beneficios.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.plus}>
          <span>+</span> Acesso pela área de membros da Kiwify, no seu tempo, quantas vezes quiser.
        </p>
      </Container>
    </section>
  );
}
