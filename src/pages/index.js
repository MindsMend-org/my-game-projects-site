import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation and progress tracking for Folding Circles game projects"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/admin"
            >
              Edit Content (CMS)
            </Link>

            <Link
              className="button button--primary button--lg margin-left--md"
              to="/docs/projects"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Game Mechanics</h3>
                <p>Document levels, enemies, stats, and tuning notes.</p>
              </div>
              <div className="col col--4">
                <h3>Progress Tracking</h3>
                <p>Keep visual and written records of development.</p>
              </div>
              <div className="col col--4">
                <h3>CMS Powered</h3>
                <p>Easy editing via Decap CMS with GitHub backend.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;