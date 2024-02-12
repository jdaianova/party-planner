import styles from "./Header.module.css";
import balloons from "../../data/img/balloons.png";
import cartIcon from "../../data/img/cart-icon.png";
import NavMenu from "./NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";
import { TbBalloonFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const basePrice = useSelector((state) => state.cart.basePrice);
  const decorPrice = useSelector((state) => state.cart.decorPrice);
  const giftsPrice = useSelector((state) => state.cart.giftsPrice);
  const totalPrice =
    Number(basePrice) + Number(decorPrice) + Number(giftsPrice);

  return (
    <header className={styles.header}>
      <section className={styles.sectionHeader}>
        <div className={styles.logo}>
          <img src={balloons} alt="balloons" />
        </div>
      </section>
      <section className={styles.sectionHeader}>
        <div className={styles.menu}>
          <NavMenu />
        </div>
        <div className={styles.slogan}>
          <h2>Дарим радость детям</h2>
        </div>
      </section>
      <section className={styles.sectionHeader}>
        <button className={styles.cartIcon} onClick={() => navigate("/cart")}>
          <img src={cartIcon} alt="cart" />
          {totalPrice >0 && (
            <div className={styles.notification}>
              <TbBalloonFilled size={30} color="red" />
            </div>
          )}
        </button>
      </section>
    </header>
  );
};

export default Header;
