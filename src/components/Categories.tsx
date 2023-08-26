import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: string) => void;
}

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategory(categories[i])} className={value === i ? "active" : ""}>
              {categoryName}
            </li>))}
        </ul>
      </div>
    );
  }
)

export default Categories;