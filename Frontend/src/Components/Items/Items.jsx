import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="items">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        ${props.new_price}
        <div className="items-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
