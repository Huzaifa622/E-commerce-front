import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border: 1px solid #eee;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  color: #aaa;
  td {
    border-top: 1px solid #eee;
  }
`;
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
const ProductImage = styled.div`
  border: 1px solid #aaa;
  border-radius: 12px;
  padding: 10px;
  width: 180px;
  display: flex;

  justify-content: center;
  align-items: center;
  img {
    max-width: 150px;
    max-height: 120px;
  }
`;

const ProductDesc = styled.tr`
  width: 100%;
  padding: 10px 5px;
`;
const ButtonIncDec = styled.button`
background-color: #eee;
outline: none;
border: none;
cursor: pointer;
padding: 5px 15px;
border-radius: 5px;
font-size: 1rem;
font-weight: 600;
color: #aaa;
`
const StyledQuantity = styled.span`
padding: 3px 5px;
`;
const StyledQuantityBox = styled.span`
border: 1px solid #eee;
padding: 2px 0;
border-radius: 12px;
`;
const Cart = () => {
  const { cartProd , addToCart , removeProd } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProd) {
      axios.post("/api/cart", { ids: cartProd }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProd]);
  return (
    <>
      <Header />
      <Center>
        <StyledCart>
          <Box>
            <h2>Cart</h2>
            {!cartProd.length > 0 && <div>Your Cart is Empty</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {products?.map((prod) => (
                  <tbody>
                    <ProductDesc>
                      <td>
                        <ProductImage>
                          <img src={prod?.images[0]} alt="prodimg" />
                        </ProductImage>
                        {prod.title}
                      </td>
                      <td>
                        <h2>
                          <StyledQuantityBox>
                            <ButtonIncDec onClick={()=>removeProd(prod._id)}>-</ButtonIncDec>
                            
                             <StyledQuantity>
                               {cartProd?.filter((id) => id === prod._id).length}
                              </StyledQuantity>
                            
                            <ButtonIncDec onClick={()=>addToCart(prod._id)}>+</ButtonIncDec>
                          </StyledQuantityBox>
                        </h2>
                      </td>
                      <td>
                        <h2>
                          $
                          {cartProd?.filter((id) => id === prod._id).length *
                            prod.price}
                        </h2>
                      </td>
                    </ProductDesc>
                  </tbody>
                ))}
              </Table>
            )}
          </Box>
          {cartProd?.length > 0 && (
            <Box>
              <h2>Order Information</h2>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Second Address" />
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
