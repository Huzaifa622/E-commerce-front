// import React, { Children } from 'react'

import { primary, secondary } from "@/lib/colors";
import styled from "styled-components";
import css from "styled-jsx/css";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  color: #fff;
  padding: 5px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  /* outline: none; */

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

svg {
    height: 20px;
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
