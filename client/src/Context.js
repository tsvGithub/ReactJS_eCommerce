//3
import React, { useState, useEffect } from "react";
const Context = React.createContext();
//----------------

function ContextProvider({ children }) {
  //4 Context State
  //add State to the Context and pass it through the Provider ----------
  const [allPhotos, setAllPhotos] = useState([]);
  //---------------
  //12, 13
  const [cartItems, setCartItems] = useState([]);

  //================================
  //5a Fetch Photos
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  //5 useEffect: fetch Photos while ContextProvider renders:
  useEffect(() => {
    //get the data from the API:
    fetch(url)
      .then((res) => res.json())
      //save the data to state:
      .then((data) => setAllPhotos(data));
  }, []);
  //   console.log(allPhotos);
  //=============================

  //---------------------------------
  //9  toggle favorite/unfavorite state
  //id===img.id
  function toggleFavorite(id) {
    //update [allPhotos] state (don't modify state directly!):
    //check for favorited/unfavorited photo:
    const updatedArr = allPhotos.map((photo) => {
      //if photo.id is matching the id of favorited/unfavorited photo
      if (photo.id === id) {
        // console.log(id);
        // console.log(!photo.isFavorite);
        return {
          //return all properties of photo = {photo.url, photo.id}
          ...photo,
          //and do {photo.isFavorite} proporty opposite
          isFavorite: !photo.isFavorite,
        };
      }
      //if photo.id don't match =>return photo
      return photo;
    });
    //don't modify state directly!
    //update state allPhoto
    setAllPhotos(updatedArr);
  }

  //--------------------------------
  //12
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }
  // console.log(addToCart);
  //------------------------------
  //14
  function removeFromCart(id) {
    //setCartItems recieves all items, except one with specific ID
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  //----------------------------
  //19 Place Order
  function emptyCart() {
    setCartItems([]);
  }
  //==================================
  //===================================

  //3 Context.Provider + {chuldren}--------
  //4 pass the state through the Provider (value={allPhotos, etc.})
  return (
    <Context.Provider
      value={{
        allPhotos, //4 [] for Photos.js
        toggleFavorite, // 9 for Image.js
        addToCart, //12 for Image.js
        cartItems, //13 for Image.js
        removeFromCart, //14 for Image.js; 17 for CartItem.js
        emptyCart, //19 for Cart.js
      }}
    >
      {children} {/*<===props.children */}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
