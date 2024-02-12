import styles from "./Cart.module.css";
import CartChildrenCount from "./CartChildrenCount/CartChildrenCount";
import CartSelectedParty from "./CartSelectedParty";
import CartSelectedDecor from "./CartSelectedDecor";
import { useDispatch, useSelector } from "react-redux";
import CartGifts from "./CartGifts";
import { AiOutlineClear } from "react-icons/ai";
import { setInitialState } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedDecorations = useSelector(
    (state) => state.cart.selectedDecorations
  );
  const gift = useSelector((state) => state.cart.gift);
  const basePrice = useSelector((state) => state.cart.basePrice);
  const decorPrice = useSelector((state) => state.cart.decorPrice);
  const giftsPrice = useSelector((state) => state.cart.giftsPrice);
  const totalPrice =
    Number(basePrice) + Number(decorPrice) + Number(giftsPrice);

  const handleClear = () => {
    localStorage.removeItem("persist:root");
    dispatch(setInitialState());
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h3>ваш заказ</h3>
        <button onClick={handleClear}>
          <AiOutlineClear size={25} />
          <p>очистить корзину</p>
        </button>
      </div>

      <CartChildrenCount />

      <div className={styles.cartList}>
        <CartSelectedParty />

        {selectedDecorations.map((item) => (
          <CartSelectedDecor key={item.id} selectedDecor={item} />
        ))}

        {gift !== 0 && <CartGifts />}
      </div>

      <h4>ИТОГО: {totalPrice} руб.</h4>

      <button
        className={styles.order_submit_btn}
        disabled={totalPrice === 0}
        onClick={() => navigate("/submit-order")}
      >
        завершить заказ
      </button>
    </div>
  );
};

export default Cart;
