import styles from "./CartChildrenCount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FiPlusSquare } from "react-icons/fi";
import { LuMinusSquare } from "react-icons/lu";
import { changeChildrenCount } from "../../../redux/cartSlice";

const CartChildrenCount = () => {
  const childrenCount = useSelector((state) => state.cart.childrenCount);
  const dispatch = useDispatch();

  return (
    <div className={styles.cartChildrenCount}>
      <h6>детей на празднике: </h6>
      <button
        onClick={() =>
          dispatch(changeChildrenCount({ operation: "minus", value: 1 }))
        }
      >
        <LuMinusSquare size={20} />
      </button>
      <p>{childrenCount}</p>
      <button
        onClick={() =>
          dispatch(changeChildrenCount({ operation: "plus", value: 1 }))
        }
      >
        <FiPlusSquare size={20} />
      </button>
    </div>
  );
};

export default CartChildrenCount;
