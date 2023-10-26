// import React, { Children } from 'react'

import styled from "styled-components"
import css from "styled-jsx/css"

const StyledButton = styled.button`
display: flex;
align-items: center;
gap: 4px;
background-color: #0000ff;
color: #fff;
padding: 5px 16px;
border-radius: 5px;
cursor: pointer;
font-size: .9rem;
/* outline: none; */
border: 1px solid #0000ff;

${props => props.size === 'l' && css`
font-size: 1rem;
padding: 10px 20px;

`}

${props => props.primary && css`
background-color: transparent;
border: 1px solid #fff;

`
}

svg{
  height : 20px
}
`

const Button = ({children , ...rest}) => {
  return (
    <StyledButton{...rest}>
        {children}
    </StyledButton>
  )
}

export default Button