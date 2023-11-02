import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProd,setCartProd] = useState([]);
  useEffect(() => {
    if (cartProd?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProd));
    }
  }, [cartProd]);
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProd(JSON.parse(ls.getItem('cart')));
    }
  }, []);
  const addToCart = (productID) => {
    setCartProd((prev) => [...prev, productID]);
    console.log(ls)
  };
  return (
    <CartContext.Provider value={{ setCartProd, cartProd, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
