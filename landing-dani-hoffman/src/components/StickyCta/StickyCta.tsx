import { useEffect, useState } from 'react';
import { CHECKOUT_URL, PRICE } from '../../config/offer';
import styles from './StickyCta.module.css';

// Barra fixa de compra no mobile; aparece depois que o usuário passa do Hero.
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <div className={styles.price}>
        <span className={styles.label}>Acesso completo</span>
        <strong>{PRICE.installments}</strong>
      </div>
      <a
        href={CHECKOUT_URL}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        Quero agora
      </a>
    </div>
  );
}
