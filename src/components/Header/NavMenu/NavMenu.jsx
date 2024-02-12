import { NavLink, useMatch } from "react-router-dom";

import styles from "./NavMenu.module.css";

const NavMenu = () => {

  const scrollToContacts = (e) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className={styles.navMenu}>
        <li
          className={`${styles.navElement} ${
            useMatch("/") ? styles.navElementActiveWhite : ""
          }`}
        >
          <NavLink to={"/"}>О нас</NavLink>
        </li>

        <li
          className={`${styles.navElement} ${
            useMatch("/party-options") ? styles.navElementActiveGray : ""
          }`}
        >
          <NavLink to={"/party-options"}>планирование праздника</NavLink>
        </li>

        <li
          className={`${styles.navElement} ${
            useMatch("/cart") ? styles.navElementActiveWhite : ""
          }`}
        >
          <NavLink to={"/cart"}>корзина</NavLink>
        </li>

        <li className={styles.navElement}>
          <a href="#contacts" onClick={scrollToContacts}>
            контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
