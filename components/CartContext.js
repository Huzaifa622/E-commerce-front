import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({});

const CartContextProvider = ({children}) => {

  const [cart , setCart] = useState([]);

  const addToCart = (productID) =>{
    setCart(prev => [...prev, productID])
  }

  
  return (
    <CartContext.Provider value={{setCart , cart , addToCart}}>
      {children}
    </CartContext.Provider>
  )
}


export default CartContextProvider