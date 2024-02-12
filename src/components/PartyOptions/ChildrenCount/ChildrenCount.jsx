import styles from "./ChildrenCount.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeChildrenCount } from "../../../redux/cartSlice";

const ChildrenCount = () => {
  const childrenCount = useSelector((state) => state.cart.childrenCount);
  const dispatch = useDispatch();

  return (
    <div className={styles.childrenCount}>
      <h4>сколько детей будет на празднике?</h4>
      <div className={styles.numChildren}>
        <button
          onClick={() =>
            dispatch(changeChildrenCount({ operation: "minus", value: 1 }))
          }
        >
          <FaMinus size={25} />
        </button>
        <div className={styles.amountOfChildren}>{childrenCount}</div>
        <button
          onClick={() =>
            dispatch(changeChildrenCount({ operation: "plus", value: 1 }))
          }
        >
          <FaPlus size={25} />
        </button>
      </div>
      <p>* количество детей от 3 до 25</p>
    </div>
  );
};

export default ChildrenCount;
