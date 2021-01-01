import React, { useState, useContext } from "react";
import { Context } from "../Context";

// icons:
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";

//16
function CartItem({ item }) {
  //20
  const [hovered, setHovered] = useState(false);
  //17 => see in Context.js (14)
  const { removeFromCart } = useContext(Context);

  //20 trash bin full
  const iconClassName = hovered ? (
    <RiDeleteBin6Fill className="ri-delete-bin-fill" />
  ) : (
    //17 empty trash bin
    <RiDeleteBinLine className="ri-delete-bin-line" />
  );
  return (
    <div className="cart-item">
      <div
        onClick={() => removeFromCart(item.id)} //Context.js (14)
        //20
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/*20 */}
        {iconClassName}
      </div>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
