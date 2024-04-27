import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
