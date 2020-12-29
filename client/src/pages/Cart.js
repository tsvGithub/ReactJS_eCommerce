import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  // console.log(cartItems);
  const cartItemElements = cartItems.map((item) => <CartItem style={{ outline: "none" }} key={item.id} item={item} />);

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }
  return (
    <div>
      <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCostDisplay} </p>
        {cartItems.length > 0 ? (
          <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
          </div>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </main>
    </div>
  );
}

export default Cart;
