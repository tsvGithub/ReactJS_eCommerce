import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  //   console.log(hovered);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return <BsHeartFill className="react-icons favorite-fill " onClick={() => toggleFavorite(img.id)} />;
    } else if (hovered) {
      return <BsHeart className="react-icons favorite" onClick={() => toggleFavorite(img.id)} />;
    }
  }

  function addIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return <MdShoppingCart className="react-icons full" onClick={() => removeFromCart(img.id)} />;
    } else if (hovered) {
      return <MdAddShoppingCart className="react-icons add" onClick={() => addToCart(img)} />;
    }
  }
  //   const addIcon = hovered && <MdAddShoppingCart className="react-icons add" onClick={() => addToCart(img)} />;
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {addIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
