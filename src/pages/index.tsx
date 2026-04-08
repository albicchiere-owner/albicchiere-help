import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type Category = {
  label: string;
  labelIt?: string;
  description: string;
  descriptionIt: string;
  href: string;
  icon: string;
};

const CATEGORIES: Category[] = [
  {
    label: 'General',
    labelIt: 'Generale',
    description: 'What Albi is, how it works, dimensions, wine preservation.',
    descriptionIt: "Cos'è Albi, come funziona, dimensioni, conservazione.",
    href: 'general/what-is-it',
    icon: '🍷',
  },
  {
    label: 'Smart Dispenser',
    description: 'First setup, Smart Bag positioning, cap removal, alerts.',
    descriptionIt: 'Primo setup, posizionamento Smart Bag, tappo, avvisi.',
    href: 'smart-dispenser/first-setup',
    icon: '⚙️',
  },
  {
    label: 'App',
    description: 'Pour, schedule, temperature, vacuum, Cantina, and more.',
    descriptionIt: 'Versare, programmare, temperatura, vacuum, Cantina e altro.',
    href: 'app/add-smart-bag',
    icon: '📱',
  },
  {
    label: 'Account',
    description: 'Login, personal data, notifications, privacy.',
    descriptionIt: 'Login, dati personali, notifiche, privacy.',
    href: 'account/login-password',
    icon: '👤',
  },
  {
    label: 'Wine Knowledge',
    labelIt: 'Cultura del Vino',
    description: 'Wine page, moods, tannins, Albi Sommelier.',
    descriptionIt: 'Scheda vino, mood, tannini, Albi Sommelier.',
    href: 'wine-knowledge/wine-page',
    icon: '🎓',
  },
];

function CategoryCard({cat, isIt}: {cat: Category; isIt: boolean}): React.JSX.Element {
  const url = useBaseUrl(cat.href);
  return (
    <Link to={url} className={styles.card}>
      <span className={styles.cardIcon}>{cat.icon}</span>
      <h2 className={styles.cardTitle}>
        {isIt && cat.labelIt ? cat.labelIt : cat.label}
      </h2>
      <p className={styles.cardDesc}>
        {isIt ? cat.descriptionIt : cat.description}
      </p>
    </Link>
  );
}

export default function Home(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const isIt = i18n.currentLocale === 'it';

  return (
    <Layout title="Help Center" description="Albicchiere Help Center">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {isIt ? 'Come possiamo aiutarti?' : 'How can we help?'}
          </h1>
          <p className={styles.heroSub}>
            {isIt
              ? "Trova risposte su Albi, l'app e il tuo account."
              : 'Find answers about Albi, the app, and your account.'}
          </p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} isIt={isIt} />
          ))}
        </div>

        <div className={styles.support}>
          <p>
            {isIt ? 'Non hai trovato quello che cerchi?' : "Can't find what you're looking for?"}{' '}
            <a href="mailto:support@albicchiere.com">
              {isIt ? 'Contatta il supporto' : 'Contact support'}
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
