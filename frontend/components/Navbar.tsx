import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Import the CSS module for navbar

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>CRM App</h1>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
          </li>
          <li>
            <Link href="/customers" className={styles.navLink}>Customers</Link>
          </li>
          <li>
            <Link href="/customers/create-or-update" className={styles.navLink}>
              Create/Update Customer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
