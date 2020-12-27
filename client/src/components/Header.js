import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>eCommerce</h2>
      </Link>
      <Link to="/cart">
        {/* <i className="ri-shopping-cart-line ri-fw ri-2x"></i> */}
        {/* <i class="ri-shopping-cart-line"></i> */}

        <FiShoppingCart className="react-icons" />
      </Link>
    </header>
  );
}

export default Header;
