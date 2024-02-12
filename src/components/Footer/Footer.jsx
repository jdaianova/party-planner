import styles from "./Footer.module.css";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <a href="#0">
        <div id="contacts">celebration@email.com</div>
      </a>
      <button
        className={styles.footer_btn}
        onClick={handleGoToTop}
        aria-label="Вернуться к началу"
      >
        <IoIosArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
