import styles from "./Activities.module.css";
import activitiesList from "../../../data/activites";
import Party from "./Party/Party";
import activitiesCategories from "../../../data/activitiesCategories";
import { nanoid } from "nanoid";
import { useState } from "react";

const Activities = () => {
  const [selectedCategory, setselectedCategory] = useState("all");

  const handleSelectcategory = (cat) => {
    setselectedCategory(cat);
  };

  return (
    <div className={styles.activities}>
      <h4>выберите тему праздника</h4>
      <ul className={styles.categories}>
        <li
          key={nanoid()}
          className={`${styles.category} ${
            selectedCategory === "all" ? styles.activeCategory : ""
          }`}
          onClick={() => handleSelectcategory("all")}
        >
          все
        </li>
        {activitiesCategories.map((cat) => (
          <li
            key={nanoid()}
            className={`${styles.category} ${
              selectedCategory === cat ? styles.activeCategory : ""
            }`}
            onClick={() => handleSelectcategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div className={styles.activitiesChoosing}>
        {activitiesList
          .filter((party) => party.category.includes(selectedCategory) )
          .map((party) => (
            <Party key={party.id} party={party}/>
          ))}
      </div>
    </div>
  );
};

export default Activities;
