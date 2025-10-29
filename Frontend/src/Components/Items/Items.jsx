import React from "react";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="items">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        ${props.new_price}
        <div className="items-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
