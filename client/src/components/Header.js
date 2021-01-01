import React, { useContext } from "react";
//2--------------------
import { Link } from "react-router-dom";
//------------------
import { Context } from "../Context";
// icons
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";

function Header() {
  //15 for update Cart icon
  const { cartItems } = useContext(Context);
  console.log(cartItems.length);
  //cartItems is [], and has length
  const cartClassName =
    //if there is at least 1 item in cart =>
    //display full cart icon
    cartItems.length > 0 ? (
      <MdShoppingCart className="react-icons" />
    ) : (
      //display empty cart item
      <HiOutlineShoppingCart className="react-icons " />
    );
  return (
    <header>
      <Link to="/">
        <h2>eCommerce</h2>
      </Link>
      <Link to="/cart">{cartClassName}</Link>
    </header>
  );
}

export default Header;
