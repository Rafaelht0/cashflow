import { useEffect, type RefObject } from 'react';

// Linha do tempo dos módulos (só no celular): conforme a página rola, calcula quanto da lista
// já passou de uma linha de referência (60% da altura da tela) e expõe isso para o CSS:
// - --progress na lista (0 a 1), que preenche a linha dourada
// - data-reached em cada item, que acende o ponto numerado
export function useTimelineProgress(ref: RefObject<HTMLOListElement | null>) {
  useEffect(() => {
    const list = ref.current;
    if (!list) return;

    const items = Array.from(list.children) as HTMLElement[];
    const isMobile = window.matchMedia('(max-width: 720px)');
    let frame = 0;

    const centerOf = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top + rect.height / 2;
    };

    const update = () => {
      frame = 0;

      if (!isMobile.matches) {
        list.style.removeProperty('--progress');
        items.forEach((item) => item.removeAttribute('data-reached'));
        return;
      }

      const line = window.innerHeight * 0.6;
      const start = centerOf(items[0]);
      const end = centerOf(items[items.length - 1]);
      const progress = Math.min(1, Math.max(0, (line - start) / (end - start)));

      list.style.setProperty('--progress', progress.toFixed(3));
      items.forEach((item) => item.setAttribute('data-reached', String(centerOf(item) <= line)));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);

    // o layout muda quando as fontes carregam; recalcula sem esperar um scroll
    const observer = new ResizeObserver(schedule);
    observer.observe(list);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      observer.disconnect();
    };
  }, [ref]);
}
