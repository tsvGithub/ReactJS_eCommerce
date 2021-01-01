import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  //19 Place Order
  const [buttonText, setButtonText] = useState("Place Order");
  //16 access to context (cartItems), 19 Place Order
  const { cartItems, emptyCart } = useContext(Context);
  // console.log(cartItems);
  //16 CartItem Component
  const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} />);

  //18 Calculate Total Cost
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  //19
  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      //in Context.js
      emptyCart();
    }, 3000);
  }
  return (
    <div>
      <main className="cart-page">
        <h1>Check out</h1>
        {/*16 */}
        {cartItemElements}
        <p className="total-cost">
          Total:
          {/*18 */}
          {totalCostDisplay}
        </p>
        {/*20 if there is item display 'Place Order' */}
        {cartItems.length > 0 ? (
          <div className="order-button">
            {/*19 */}
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
