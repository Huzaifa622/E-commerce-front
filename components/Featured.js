import styled from "styled-components"
import Center from "./Center"

const Bg = styled.div`
background-color: #191919;
color: #686461;
`
const Title = styled.h1`
margin: 0;
`
const Featured = () => {
  return (
    <Bg>
        <Center>
    <Title>Pro Book</Title>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
    </Center>
    </Bg>
  )
}

export default Featured