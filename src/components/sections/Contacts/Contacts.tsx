import { useTranslations } from 'next-intl';
import styles from './Contacts.module.scss';

export function Contacts() {
  const t = useTranslations('Contacts');

  return (
    <section id="contacts" className="section">
      <div className="container">
        <h2 className="title">{t('title')}</h2>

        <ul className={styles.list}>
          <li>
            <span className={styles.label}>{t('phone')}</span>
            <a href="tel:+996000000000">+996 000 000 000</a>
          </li>
          <li>
            <span className={styles.label}>{t('email')}</span>
            <a href="mailto:info@example.kg">info@example.kg</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
