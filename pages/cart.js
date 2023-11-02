import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const StyledCart = styled.div`
  display: grid;
  margin-top: 40px;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 20px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const Cart = () => {
  const { cartProd } = useContext(CartContext);
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    if(cartProd){
      axios.post('/api/cart' , {ids:cartProd})
      .then(response => {
        setProducts(response.data)
      })

    }

  },[cartProd])
  return (
    <>
      <Header />
      <Center>
        <StyledCart>
          {!cartProd.length>0 && (
            <Box>

              <h2>Your Cart is Empty</h2>
            </Box>
          )}
          {products?.length > 0 && (
            <Box>
              <h2>Cart</h2>
              {products?.map(prod =>(
                <div>{prod.title}</div>
              ))}
            </Box>
          )}
          {cartProd?.length > 0 && (
            <Box>
              <h2>Order Information</h2>
              <input type="text" placeholder="Address"/>
              <input type="text" placeholder="Second Address"/>
              <Button block size={"l"}>
                Continue Payment
              </Button>
            </Box>
          )}
        </StyledCart>
      </Center>
    </>
  );
};

export default Cart;
