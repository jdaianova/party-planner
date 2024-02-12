import { useDispatch, useSelector } from "react-redux";
import styles from "./Party.module.css";
import { setSelectedParty } from "../../../../redux/cartSlice";

const Party = ({ party }) => {
  const dispatch = useDispatch();
  const selectedParty = useSelector((state) => state.cart.selectedParty);

  const handleSelectParty = (e) => {
    dispatch(setSelectedParty(party.title));
  };

  return (
    <div
      className={`${styles.party} ${
        selectedParty === party.title ? styles.party_active : ""
      }`}
      onClick={handleSelectParty}
    >
      <h5>{party.title}</h5>
      <img src={party.pic} alt={party.alt} />
      <p>{party.description}</p>
      <span>цена за 1 ребенка: {party.price} руб.</span>
      <button>выбрать</button>
    </div>
  );
};

export default Party;
