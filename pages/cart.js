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
`;
const StyledQuantity = styled.span`
  padding: 3px 5px;
`;
const StyledQuantityBox = styled.span`
  border: 1px solid #eee;
  padding: 2px 0;
  border-radius: 12px;
`;
const Input = styled.input`
  padding: 6px 8px;
  margin-bottom: 4px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 7px;
  outline: none;
  border: 1px solid #eee;
`;

const CityInfo = styled.div`
  display: flex;
  gap: 4px;
`;
const Cart = () => {
  const { cartProd, addToCart, removeProd } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (cartProd) {
      axios.post("/api/cart", { ids: cartProd }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProd]);
  let total = 0;
  for (let prod of cartProd) {
    let totalProductPrice = products.find((p) => p._id == prod)?.price || 0;
    total += totalProductPrice;
    console.log(total);
  }
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
                <tbody>
                  {products?.map((prod) => (
                    <ProductDesc>
                      <td>
                        <ProductImage>
                          <img src={prod?.images[0]} alt="prodimg" />
                        </ProductImage>
                        <h2>{prod.title}</h2>
                      </td>
                      <td>
                        <h2>
                          <StyledQuantityBox>
                            <ButtonIncDec onClick={() => removeProd(prod._id)}>
                              -
                            </ButtonIncDec>

                            <StyledQuantity>
                              {cartProd?.filter((id) => id === prod._id).length}
                            </StyledQuantity>

                            <ButtonIncDec onClick={() => addToCart(prod._id)}>
                              +
                            </ButtonIncDec>
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
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h2>${total}</h2>
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {cartProd?.length > 0 && (
            <Box>
              <h2>Order Information</h2>
              <form method="POST" action="/api/checkout" autoComplete="off">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="Name"
                />
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email"
                />
                <CityInfo>
                  <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    name="city"
                    placeholder="City"
                  />
                  <Input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    name="postalCode"
                    placeholder="Postal Code"
                  />
                </CityInfo>

                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  placeholder="Address"
                />
                <Input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                  placeholder="Country"
                />
                <input
                  type="hidden"
                  name="products"
                  value={cartProd.join(',')}
                />
                <Button block size={"l"} type="Submit">
                  Continue Payment
                </Button>
              </form>
            </Box>
          )}
        </StyledCart>
      </Center>
    </>
  );
};

export default Cart;
