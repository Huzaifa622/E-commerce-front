import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext, useGlobalContext } from "./CartContext";
const StyledHeader = styled.header`
  background-color: #191919;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #f8f8f8;
  text-decoration: none;
  padding: 20px 0;
  font-weight: bolder;
  font-size: larger;
`;
const NavLink= styled(Link)`
color: #686461;
text-decoration: none;
padding: 10px 0;
`;

const StyledNav = styled.nav`
display: flex;
gap: 15px;
`
export default function Header() {
  const {cart} = useContext(CartContext)
  return (
    <>
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={"/"}>E-Commerce</Logo>
            <StyledNav>
              <NavLink href={""}>Home</NavLink>
              <NavLink href={""}>All Products</NavLink>
              <NavLink href={""}>Categories</NavLink>
              <NavLink href={""}>Account</NavLink>
              <NavLink href={'/cart'}>Cart ({cart.length})</NavLink>
            </StyledNav>
          </Wrapper>
        </Center>
      </StyledHeader>
    </>
  );
}
