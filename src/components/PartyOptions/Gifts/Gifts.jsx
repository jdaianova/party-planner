import styles from "./Gifts.module.css";
import { useDispatch, useSelector } from "react-redux";
import bigPresentPic from "../../../data/img/big-present.webp";
import smallPresentPic from "../../../data/img/small-present.webp";
import noPresentPic from "../../../data/img/no-present.webp";
import { setGift } from "../../../redux/cartSlice";

const Gifts = () => {
  const dispatch = useDispatch();
  const gift = useSelector((state) => state.cart.gift);

  const handleSelectGift = (gift) => {
    dispatch(setGift(gift));
  };

  return (
    <div className={styles.gifts}>
      <h4>выберите декорации и сладости для праздника</h4>
      <p>количество сможете добавить позже в корзине</p>
      <div className={styles.giftsList}>
        <div
          className={`${styles.giftItem} ${
            gift === 0 ? styles.activeItem : ""
          }`}
          onClick={() => handleSelectGift(0)}
        >
          <p>подарок не нужен</p>
          <img src={noPresentPic} alt="без подарка" />
          <span> цена за ед: 0 руб.</span>
        </div>

        <div
          className={`${styles.giftItem} ${
            gift === 1000 ? styles.activeItem : ""
          }`}
          onClick={() => handleSelectGift(1000)}
        >
          <p>большой подарок</p>
          <img src={bigPresentPic} alt="большой подарок" />
          <span> цена за ед: 1000 руб.</span>
        </div>

        <div
          className={`${styles.giftItem} ${
            gift === 500 ? styles.activeItem : ""
          }`}
          onClick={() => handleSelectGift(500)}
        >
          <p>маленький подарок</p>
          <img src={smallPresentPic} alt="маленький подарок" />
          <span> цена за ед: 500 руб.</span>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
