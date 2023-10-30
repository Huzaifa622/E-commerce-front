import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";

const Bg = styled.div`
  background-color: #191919;
  color: #686461;
  padding: 80px 0;
`;
const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 3rem;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
    margin-left: 20px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
`;
const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;
const Featured = ({product}) => {
  return (
    <Bg>
      <Center>
        <StyledDiv>
          <StyledDesc>
            <Title>{product.title}</Title>
            <Description>
             {product.description}
            </Description>
            <ButtonWrapper>
              <ButtonLink href={'/product/'+ product._id}  primary={1}>
                Read more
              </ButtonLink>
              <Button primary>
              <CartIcon/>
                Add to cart
              </Button>
            </ButtonWrapper>
          </StyledDesc>
          <StyledDesc>
            <div>
              <img src={"https://firebasestorage.googleapis.com/v0/b/ecommerce-app-13fa8.appspot.com/o/userImages%2Fsam.webp?alt=media&token=04dadda6-d4f7-4a45-97bd-6d3b804933bd"} />
            </div>
          </StyledDesc>
        </StyledDiv>
      </Center>
    </Bg>
  );
};

export default Featured;
