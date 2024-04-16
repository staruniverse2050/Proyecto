import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Íconos de FontAwesome
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>@ 2024 Vacano Studio. Todos los derechos reservados.</p>
        <p>Contacto: info@vacanostudio.com</p>
        <p>Teléfono: +1234567890</p>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com/vacanostudio" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.facebook} />
          </a>
          <a href="https://twitter.com/vacanostudio" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.twitter} />
          </a>
          <a href="https://instagram.com/vacanostudio" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
