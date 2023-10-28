import React from 'react'
import styled from 'styled-components'

const ProductWrapper = styled.div`

`

const WhiteBox = styled.div`

background-color: #fff;
img {
    max-width: 200px;
    max-height: 150px;
    margin-bottom: 12px;
  }
`

const ProductTemplate = ({_id , title, images , description , price}) => {
  return (
 
    <ProductWrapper>
    
   <WhiteBox>
    <img src={images[0]}/>
    </WhiteBox>
    <div>{title}</div>
    <div>{price}$</div>
    </ProductWrapper>
  )
}

export default ProductTemplate