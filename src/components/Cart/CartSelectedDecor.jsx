import styles from "./Cart.module.css";
import { RiDeleteBin3Fill } from "react-icons/ri";
import decor from "../../data/decor";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountDecoration, toggleDecoration } from "../../redux/cartSlice";

const CartSelectedDecor = ({ selectedDecor }) => {
  const dispatch = useDispatch();
  const [amountSelectedDecor, setAmountSelectedDecor] = useState(
    selectedDecor.count
  );

  useEffect(() => {
    dispatch(
      setCountDecoration({
        itemID: selectedDecor.id,
        newValue: amountSelectedDecor,
      })
    );
  }, [amountSelectedDecor, dispatch, selectedDecor.id]);

  return (
    <div className={styles.cartRow}>
      <button className={styles.cartRow__delete} onClick={() =>dispatch(toggleDecoration({itemID:selectedDecor.id}))}>
        <RiDeleteBin3Fill />
      </button>
      <div className={styles.cartRow__title}>
        {decor[selectedDecor.id-1].name}
      </div>
      <div className={styles.cartRow__price}>{selectedDecor.price} руб. x </div>
      <div className={styles.cartRow__amount}>
        <input
          value={amountSelectedDecor}
          onChange={(e) => setAmountSelectedDecor(e.target.value)}
        />
      </div>
      <div className={styles.cartRow__dots}></div>
      <div className={styles.cartRow__total_price}>
        {selectedDecor.price * amountSelectedDecor}
      </div>
      <div>руб.</div>
    </div>
  );
};

export default CartSelectedDecor;
