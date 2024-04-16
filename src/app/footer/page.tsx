import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>@ 2024 Vacano Studio. Todos los derechos reservados.</p>
        <p>Contacto: info@vacanostudio.com</p>
        <p>Teléfono: +1234567890</p>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/vakanostudio" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.facebook} />
          </a>
          <a href="https://vakano.studio/index.php/contacto/#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className={styles.linkeding} />
          </a>
          <a href="https://www.instagram.com/vakano_studio/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
