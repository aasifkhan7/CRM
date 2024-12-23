import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
    useEffect(() => {
        // Remove underline from all links when component mounts
        const links = document.querySelectorAll('a');
        links.forEach(link => {
          link.style.textDecoration = 'none';
          link.style.color = 'inherit';
        });
      }, []);

  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to CRM Software</h1>
          <p className={styles.subtitle}>Streamline your customer management like never before.</p>
        </div>
      </header>
      <section className={styles.features}>
        <Link href="/customers">
          <div className={styles.featureCard}>
            <h2 className={styles.featureTitle}>Manage Your Customers</h2>
            <p className={styles.featureDescription}>
              Easily add, update, and track your customer information.
            </p>
          </div>
        </Link>
        <div className={styles.featureCard}>
          <h2 className={styles.featureTitle}>Powerful Analytics</h2>
          <p className={styles.featureDescription}>
            Gain insights into your business and make data-driven decisions.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2 className={styles.featureTitle}>Seamless Integration</h2>
          <p className={styles.featureDescription}>
            Connect with various tools to keep all your data in sync.
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 CRM Software. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
