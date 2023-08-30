import React from "react";
import styles from "./Categories.module.scss"

type CategoriesProps = {
  value: string;
  onChangeCategoryValue: (i: string) => void;
}

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategoryValue }) => {
    return (
      <div className={styles.categories}>
        <ul>
          {categories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategoryValue(categoryName)} className={value === categoryName ? "active" : ""}>
              {categoryName}
            </li>))}
        </ul>
      </div>
    );
  }
)

export default Categories;