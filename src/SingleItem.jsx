import React from "react";

const SingleItem = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="singleItem">
      <img src={img} alt="image" />
      <div className="itemInfo">
        <h2>{title} </h2>
        <p>{desc} </p>
        <p className="price">{price} </p>
      </div>
    </article>
  );
};

export default SingleItem;
