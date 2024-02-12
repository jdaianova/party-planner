import styles from "./SubmitOrder.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInitialState } from "../../redux/cartSlice";

const SubmitOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitOrder = () => {
    localStorage.removeItem("persist:root");
    dispatch(setInitialState());
    navigate("/");
  };

  return (
    <div className={styles.submitOrder}>
      <h3>Благодарим за заказ!</h3>
      <button onClick={handleSubmitOrder}>ок</button>
    </div>
  );
};

export default SubmitOrder;
