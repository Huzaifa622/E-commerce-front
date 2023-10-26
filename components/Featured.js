import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

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
  grid-template-columns: 0.8fr 1.2fr;
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
`;
const Featured = () => {
  return (
    <Bg>
      <Center>
        <StyledDiv>
          <StyledDesc>
            <Title>Pro Book</Title>
            <Description>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Description>
            <ButtonWrapper>
              <Button primary >
                Read more
              </Button>
              <Button >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Add to cart
              </Button>
            </ButtonWrapper>
          </StyledDesc>
          <StyledDesc>
            <div>
              <img src="/laptop.png" />
            </div>
          </StyledDesc>
        </StyledDiv>
      </Center>
    </Bg>
  );
};

export default Featured;
