import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";

function Header() {
  const { cartItems } = useContext(Context);
  console.log(cartItems.length);
  const cartClassName =
    cartItems.length > 0 ? (
      <MdShoppingCart className="react-icons" />
    ) : (
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
