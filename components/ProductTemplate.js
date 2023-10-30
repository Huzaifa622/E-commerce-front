import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'

const ProductWrapper = styled.div`
`

const WhiteBox = styled.div`

background-color: #fff;
padding: 20px;
height: 120px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 12px;
img {
    max-width: 200px;
    max-height: 80px;
    margin-bottom: 12px;
  }
`
const ProductInfo = styled.div`
margin-top: 5px;
`

const PriceBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2px;
`

const PriceTitle = styled.h1`
font-weight: 700; 
font-size: 1.2rem;
`
const ProductTemplate = ({_id , title, images , description , price}) => {
  return (
 
    <ProductWrapper>
    
   <WhiteBox>
    <div>
    <img src={images[0]}/>
    </div>
    </WhiteBox>
    <ProductInfo>
    <div>{title}</div>
    <PriceBox>
    <PriceTitle>${price}</PriceTitle>
    <Button primary white><CartIcon/> Add to cart</Button>
    </PriceBox>
    </ProductInfo>
    </ProductWrapper>
  )
}

export default ProductTemplate