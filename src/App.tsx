import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { StickyCta } from './components/StickyCta/StickyCta';
import { CtaFinal } from './sections/CtaFinal/CtaFinal';
import { Dor } from './sections/Dor/Dor';
import { Faq } from './sections/Faq/Faq';
import { Hero } from './sections/Hero/Hero';
import { Historia } from './sections/Historia/Historia';
import { Oferta } from './sections/Oferta/Oferta';
import { ParaQuem } from './sections/ParaQuem/ParaQuem';
import { Produto } from './sections/Produto/Produto';
import { Sobre } from './sections/Sobre/Sobre';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dor />
        <Historia />
        <Produto />
        <ParaQuem />
        <Sobre />
        <Oferta />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}

export default App;
