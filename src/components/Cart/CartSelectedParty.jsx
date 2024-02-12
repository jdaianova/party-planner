import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import activities from "../../data/activites";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useEffect } from "react";
import { setBasePrice, setSelectedParty } from "../../redux/cartSlice";

const CartSelectedParty = () => {
  const dispatch = useDispatch();
  const childrenCount = useSelector((state) => state.cart.childrenCount);
  const selectedParty = useSelector((state) => state.cart.selectedParty);
  const selectedPartyInfo = activities.find(
    (party) => party.title === selectedParty
  );
  const basePrice =
    selectedParty !== "" ? selectedPartyInfo.price * childrenCount : 0;

  useEffect(() => {
    dispatch(setBasePrice(basePrice));
  }, [basePrice, dispatch]);

  return (
    <>
      {selectedParty !== "" && (
        <div className={styles.cartRow}>
          <button
            className={styles.cartRow__delete}
            onClick={() => dispatch(setSelectedParty(""))}
          >
            <RiDeleteBin3Fill />
          </button>
          <div className={styles.cartRow__title}>{selectedParty}</div>
          <div className={styles.cartRow__price}>
            {selectedPartyInfo.price} руб. x
          </div>
          <div className={styles.cartRow__amount}>{childrenCount}</div>
          <div className={styles.cartRow__dots}></div>
          <div className={styles.cartRow__total_price}>{basePrice}</div>
          <div>руб.</div>
        </div>
      )}
    </>
  );
};

export default CartSelectedParty;
