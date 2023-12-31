// import React, { Children } from 'react'

import { primary, secondary } from "@/lib/colors";
import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  
background-color: #eee;
  color: #000;
  padding: 5px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
  border: #eee;

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1rem;
      padding: 10px 20px;
    `}

  ${(props) =>
    props.primary &&
    !props.white &&
    css`
      background-color: ${primary};
      color: #000;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.primary &&
    props.white &&
    css`
      background-color: transparent;
      color: ${secondary};
      border: 1px solid ${secondary};
     
    `}
  ${(props) =>
    props.block &&
    !props.white &&
    css`
    display: block;
    width: 100%;
      background-color: #000;
      color: #fff;
      border: 1px solid #000;
    `}
  ${(props) =>
    props.block &&
    props.white &&
    css`
    display: block;
    width: 100%;
      background-color: transparent;
      color: #fff
      border: 1px solid #fff
     
    `}

svg {
    height: 20px;
  }
`;

const Button = ({ children, ...rest }) => {
  return (
  <>
  <StyledButton
   {...rest}>
    {children}</StyledButton>;
  </>
  )
};

export default Button;
