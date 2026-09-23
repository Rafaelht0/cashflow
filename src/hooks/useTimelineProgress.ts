import { useEffect, type RefObject } from 'react';

// Linha do tempo dos módulos. Cada item recebe data-reached="true" quando o ponto dele está aceso:
// - celular (até 720px): conforme a página rola, os itens que já passaram de uma linha de
//   referência (60% da altura da tela) acendem, e --progress (0 a 1) preenche a linha dourada
// - desktop/tablet: passar o mouse num módulo acende todos os anteriores até ele; --delay faz
//   os pontos e a linha se preencherem em cascata
export function useTimelineProgress(ref: RefObject<HTMLOListElement | null>) {
  useEffect(() => {
    const list = ref.current;
    if (!list) return;

    const items = Array.from(list.children) as HTMLElement[];
    const isMobile = window.matchMedia('(max-width: 720px)');
    let frame = 0;
    let wasMobile = false;
    let lastHover = -1;

    const centerOf = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top + rect.height / 2;
    };

    const clear = () => {
      lastHover = -1;
      list.style.removeProperty('--progress');
      items.forEach((item) => {
        item.removeAttribute('data-reached');
        item.style.removeProperty('--delay');
      });
    };

    // ---- celular: acompanha a rolagem
    const updateScroll = () => {
      frame = 0;

      if (!isMobile.matches) {
        if (wasMobile) clear();
        wasMobile = false;
        return;
      }
      wasMobile = true;

      const line = window.innerHeight * 0.6;
      const start = centerOf(items[0]);
      const end = centerOf(items[items.length - 1]);
      const progress = Math.min(1, Math.max(0, (line - start) / (end - start)));

      list.style.setProperty('--progress', progress.toFixed(3));
      items.forEach((item) => item.setAttribute('data-reached', String(centerOf(item) <= line)));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    };

    // ---- desktop: acompanha o mouse
    const setHover = (index: number) => {
      const previous = lastHover;
      items.forEach((item, i) => {
        const reached = i <= index;
        // só os itens recém-acesos entram em cascata; os que já estavam acesos não atrasam
        const delay = reached && i > previous ? (i - previous - 1) * 70 : 0;
        item.style.setProperty('--delay', `${delay}ms`);
        item.setAttribute('data-reached', String(reached));
      });
      lastHover = index;
    };

    const onOver = (event: MouseEvent) => {
      if (isMobile.matches) return;
      const item = (event.target as HTMLElement).closest('li');
      const index = item ? items.indexOf(item) : -1;
      if (index >= 0 && index !== lastHover) setHover(index);
    };

    const onLeave = () => {
      if (!isMobile.matches && lastHover !== -1) setHover(-1);
    };

    updateScroll();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    list.addEventListener('mouseover', onOver);
    list.addEventListener('mousemove', onOver);
    list.addEventListener('click', onOver);
    list.addEventListener('mouseleave', onLeave);

    // o layout muda quando as fontes carregam; recalcula sem esperar um scroll
    const observer = new ResizeObserver(schedule);
    observer.observe(list);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      list.removeEventListener('mouseover', onOver);
      list.removeEventListener('mousemove', onOver);
      list.removeEventListener('click', onOver);
      list.removeEventListener('mouseleave', onLeave);
      observer.disconnect();
    };
  }, [ref]);
}
