import React, { useState, useContext } from "react";
import { Context } from "../Context";

import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? (
    <RiDeleteBin6Fill className="ri-delete-bin-fill" />
  ) : (
    <RiDeleteBinLine className="ri-delete-bin-line" />
  );
  return (
    <div className="cart-item">
      <div
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {iconClassName}
      </div>
      {/* <RiDeleteBinLine className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)} /> */}
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
