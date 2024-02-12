import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { setGift } from "../../redux/cartSlice";

const CartGifts = () => {
  const dispatch = useDispatch();

  const childrenCount = useSelector((state) => state.cart.childrenCount);
  const gift = useSelector((state) => state.cart.gift);
  const giftsPrice = useSelector((state) => state.cart.giftsPrice);

  return (
    <div className={styles.cartRow}>
      <button
        className={styles.cartRow__delete}
        onClick={() => dispatch(setGift(0))}
      >
        <RiDeleteBin3Fill />
      </button>
      <div className={styles.cartRow__title}>
        {gift === 500 ? "маленький подарок" : "большой подарок"}
      </div>
      <div className={styles.cartRow__price}>
        {gift === 500 ? 500 : 1000} руб. x{" "}
      </div>
      <div className={styles.cartRow__amount}>{childrenCount}</div>
      <div className={styles.cartRow__dots}></div>
      <div className={styles.cartRow__total_price}>{giftsPrice}</div>
      <div>руб.</div>
    </div>
  );
};

export default CartGifts;
