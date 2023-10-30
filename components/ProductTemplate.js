import React from 'react'
import styled from 'styled-components'

const ProductWrapper = styled.div`
`

const WhiteBox = styled.div`

background-color: #fff;
padding: 20px;
height: 150px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 12px;
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
    <div>
    <img src={images[0]}/>
    </div>
    </WhiteBox>
    <div>{title}</div>
    <div>{price}$</div>
    </ProductWrapper>
  )
}

export default ProductTemplate