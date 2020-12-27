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
        <FiShoppingCart className="react-icons" />
      </Link>
    </header>
  );
}

export default Header;
