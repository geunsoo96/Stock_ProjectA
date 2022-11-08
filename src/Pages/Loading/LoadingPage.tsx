import styled from "styled-components"
import React,{useRef} from "react"




const LoadingPage = () =>{

  const coin = useRef();

  
  return(
    <Container>loading
      <Coin ref={coin}></Coin>            
    </Container>
  )
}
export default LoadingPage;

const Container = styled.div`
`

const Coin = styled.div`
  width:100px;
  height:100px;
  
`