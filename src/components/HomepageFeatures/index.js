import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build features as apps',
    to: '/docs/framework/Building%20Apps/',
    linkLabel: 'Building Apps',
    description: (
      <>
        Each app brings its own routes, API, tables, permissions and menus. The
        framework handles routing, sign-in, roles, the database and the admin
        panel.
      </>
    ),
  },
  {
    title: 'No build step',
    to: '/docs/framework/Vue%20DC%20UI%20KIT/',
    linkLabel: 'Vue DC UI KIT',
    description: (
      <>
        The frontend is Vue 3 components written as ES modules. Edit a file and
        reload the page, and build screens from the UI kit&apos;s ready-made
        components.
      </>
    ),
  },
  {
    title: 'Ship through DoCloud',
    to: '/docs/framework/Building%20Apps/Packaging%20And%20Updates',
    linkLabel: 'Packaging And Updates',
    description: (
      <>
        An app installs and updates as a zip from the admin panel, or from the
        DoCloud App Library on any connected system.
      </>
    ),
  },
];

function Feature({title, to, linkLabel, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      <Link to={to}>{linkLabel} →</Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
