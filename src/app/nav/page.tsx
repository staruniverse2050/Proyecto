
"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import styles from './nav.module.css';

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className={styles.nav}>
        
        <a href="/">
  <Image
    className={styles.logo}
    src="https://vakano.studio/wp-content/uploads/2023/08/vs-3.png"
    alt="Vacano Studio"
    width={450}
    height={357}
    priority
  />
</a>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <span className={pathname === "/" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Inicio</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login">
            <span className={pathname === "/login" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Logueate</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/productos">
            <span className={pathname === "/productos" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Portafolio</span>
          </Link>
        </li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Nav;
