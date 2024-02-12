import styles from "./PartyOptions.module.css";

import ChildrenCount from "./ChildrenCount/ChildrenCount";
import Activities from "./Activities/Activities";
import Decoration from "./Decoration/Decoration";
import Gifts from "./Gifts/Gifts";
import { useNavigate } from "react-router-dom";

const PartyOptions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.partyOptions}>
      <div className={styles.partyOptionsSection}>
        <ChildrenCount />
      </div>
      <div className={styles.partyOptionsSection}>
        <Activities />
      </div>
      <div className={styles.partyOptionsSection}>
        <Decoration />
      </div>
      <div className={styles.partyOptionsSection}>
        <Gifts />
      </div>
      <div className={styles.partyOptionsSection}>
        <button onClick={() => navigate("/cart")}>
          <h4>закончить и перейти к корзине</h4>
        </button>
      </div>
    </div>
  );
};

export default PartyOptions;
