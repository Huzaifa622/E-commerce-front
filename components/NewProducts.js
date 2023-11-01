import React from "react";
import Center from "./Center";
import styled from "styled-components";
import ProductTemplate from "./ProductTemplate";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
  
  

`;
const Title = styled.h1`
font-weight: 900;
margin:40px 5px;

`

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Title>New Arrival</Title>
      <ProductGrid>
        {products &&
          products?.map((product) => (
          
              <ProductTemplate {...product} />
           
          ))}
      </ProductGrid>
    </Center>
  );
};

export default NewProducts;
