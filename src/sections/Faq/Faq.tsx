import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { GUARANTEE_DAYS } from '../../config/offer';
import styles from './Faq.module.css';

const PERGUNTAS = [
  {
    q: 'Preciso saber mexer em planilha?',
    a: 'Não. A planilha já vem pronta e automatizada: você só preenche os lançamentos. No curso eu te guio passo a passo, inclusive na estruturação da planilha.',
  },
  {
    q: 'Preciso instalar algum programa?',
    a: 'A planilha funciona em Excel, Google Sheets ou LibreOffice (gratuito). Você baixa o arquivo dentro da área de membros e já começa a usar, sem precisar de mais nada. As aulas podem ser assistidas em qualquer dispositivo.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Logo após a confirmação do pagamento, você recebe no seu e-mail o acesso à área de membros da Kiwify, com as aulas e a planilha.',
  },
  {
    q: 'Por quanto tempo tenho acesso?',
    a: 'O acesso é vitalício. Você assiste no seu ritmo, quantas vezes quiser, sem prazo para acabar.',
  },
  {
    q: 'E se eu não gostar?',
    a: `Você tem ${GUARANTEE_DAYS} dias de garantia. Se não fizer sentido para você, basta solicitar o reembolso pela Kiwify e recebe 100% do valor.`,
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Cartão de crédito (com parcelamento), Pix e boleto, todos processados com segurança pela Kiwify.',
  },
];

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <Container>
        <SectionHeading eyebrow="Dúvidas frequentes" title="Ficou alguma dúvida?" />
        <div className={styles.list}>
          {PERGUNTAS.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
