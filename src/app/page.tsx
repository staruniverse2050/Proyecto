import Image from "next/image";
import styles from "./page.module.css";
import Nav from './nav/page';
import Footer from './footer/page';



export default function Home() {
  return (
    <main className={styles.main}>
          <Nav></Nav>
      <div className={styles.center}>
      <Image
  className={styles.logo}
  src="https://vakano.studio/wp-content/uploads/2023/08/vs-1.png"
  id="logo"
  alt="Vacano Studio"
  width={480}
  height={467}
  priority
/>
      </div>
    <Footer></Footer> 
    </main>
  );
}
