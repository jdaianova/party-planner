import styles from "./Decoration.module.css";
import decor from "../../../data/decor";
import { useDispatch, useSelector } from "react-redux";
import { toggleDecoration } from "../../../redux/cartSlice";

const Decoration = () => {
  const dispatch = useDispatch();
  const selectedDecorations = useSelector(
    (state) => state.cart.selectedDecorations
  );

  const handleSelectDecor = (id, price) => {
    dispatch(toggleDecoration({ itemID: id, itemPrice: price }));
  };

  return (
    <div className={styles.decoration}>
      <h4>выберите декорации и сладости для праздника</h4>
      <p>количество сможете добавить позже в корзине</p>
      <div className={styles.decorationList}>
        {decor.map((item) => (
          <div
            key={item.id}
            className={`${styles.decorationItem} ${
              selectedDecorations.some(decor => decor.id === item.id) ? styles.activeItem : ""
            }`}
            onClick={() => handleSelectDecor(item.id, item.price)}
          >
            <p>{item.name}</p>
            <img src={item.pic} alt={item.name}></img>
            <span> цена за ед: {item.price} руб.</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decoration;
