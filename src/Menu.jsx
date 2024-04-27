import React from "react";
import SingleItem from "./SingleItem";

const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
