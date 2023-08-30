import React from "react";
import styles from "./Categories.module.scss"
import { setCategoryValue } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

const Categories: React.FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const { categoryValue } = useSelector(selectFilter);

    const onChangeCategoryValue = React.useCallback((category: string) => {
      dispatch(setCategoryValue(category));
    }, []);

    return (
      <div className={styles.categories}>
        <ul>
          {categories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategoryValue(categoryName)} className={categoryValue === categoryName ? styles.active : ""}>
              {categoryName}
            </li>))}
        </ul>
      </div>
    );
  }
)

export default Categories;