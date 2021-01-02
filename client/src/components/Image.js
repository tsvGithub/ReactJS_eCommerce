//6
import React, { useState, useContext } from "react";
//----------------------
import { Context } from "../Context";
//11
import PropTypes from "prop-types";
//icons
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

//6 pass {classNames} is a prop from Photos.js
//6a img =img.url, img.id, img.isFavorited
function Image({ className, img }) {
  //7 create 'hover' state (boolean) -----------
  const [hovered, setHovered] = useState(false);
  //   console.log(hovered);
  //-----------------------
  //use Context: 9, 12, 13, 14
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);

  //====================++==
  //10 Heart Icon: fulled or lined ----------
  function heartIcon() {
    //9 toggleFavorite(img.id)
    //10 if img.isFavorite is true return 'full heart icon'
    if (img.isFavorite) {
      return <BsHeartFill className="react-icons favorite-fill " onClick={() => toggleFavorite(img.id)} />;
    } // 8, 9
    //if img.isFavorite is false return 'empty heart icon' when mouse hover over
    else if (hovered) {
      return <BsHeart className="react-icons favorite" onClick={() => toggleFavorite(img.id)} />;
    }
  }

  //----------------------
  //12  Cart Icon: empty or Full
  function cartIcon() {
    //13
    //'some' returns boolean if meet some condition
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    //if the item is already in the cart
    //return 'full cart icon'
    if (alreadyInCart) {
      //14 removeFromCart()
      return <MdShoppingCart className="react-icons full" onClick={() => removeFromCart(img.id)} />;
    } //8, 12
    //13 if the item isn't in the cart, but hovered =>(12) addToCart()
    else if (hovered) {
      return <MdAddShoppingCart className="react-icons add" onClick={() => addToCart(img)} />;
    }
  }
  //---------------------------
  return (
    //6
    <div
      //6 ${className} => grid layout(big, wide etc) for img is a prop from Photos Component(page)
      className={`${className} image-container`}
      //7 when a mouse enters that div Hover is True
      onMouseEnter={() => setHovered(true)}
      //7 when the mouse leavs => Hover is false
      onMouseLeave={() => setHovered(false)}
    >
      {/*6  */}
      <img src={img.url} className="image-grid" />
      {/*8, 10, 13  */}
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

//11
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
