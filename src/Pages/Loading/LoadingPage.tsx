import styled from "styled-components"
import React,{useEffect, useRef, useState} from "react"
<<<<<<< HEAD

=======
>>>>>>> 8694e5cdf8d19e295676c5bc69e1a3231b00739d
const Main = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Center = styled.div`
  width:300px;
  height:300px;
  background-image: url("img/prog.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:700px;
  height:680px;
  background-color: white;
  gap:30px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px rgba(254,172,49,1);  
`

const Coin = styled.div`
  
  border-radius: 50%;
  display:flex;
  position: relative;
  & > div {
    width:70px;
    height:70px;
    border-radius: 50%;
    background-image: url("img/coin.jpg");
    background-position: 50% 50%;
    background-size: 130px;
    background-repeat: no-repeat;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: top;
    position: relative;
    bottom: 0;
    opacity: 0;
  }
  & > div:nth-child(1){
    animation-duration:.6s;
    animation-delay: .2s;
  }
  & > div:nth-child(2){
    animation-duration:.6s;
    animation-delay: .4s;
  }
  & > div:nth-child(3){
    animation-duration:.6s;
    animation-delay: .6s;
  }
  & > div:nth-child(4){
    animation-duration:.6s;
    animation-delay: .8s;
  }
  & > div:nth-child(5){
    animation-duration:.6s;
    animation-delay: 1s;
  }
  @keyframes top {
      0%{
        bottom:60px;
        opacity: .1;
      }
      50%{
        opacity: .6;
      }
      100%{
        bottom:0px;
        opacity: 1;
      }
    }
`

const Text = styled.div`


  font-size: 40px;
  font-weight: bold;
  font-family: YANGJIN;
  animation-name: op;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  opacity: 1;
  animation-duration:.6s;
    @keyframes op {
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
  `
  const LoadingPage = () =>{
    const mainRef = useRef<HTMLDivElement>(null);

  return(
    <Main>
      <Container>
        {/* <canvas ref={canvasRef} style={{background:"white"}} width={1000} height={600} onClick={click}></canvas> */}
        <Coin>
          <div></div><div></div><div></div><div></div><div></div>
        </Coin>
        <Center/>
        <Text>LOADING...</Text>
        
      </Container>
    </Main>
<<<<<<< HEAD
  )
}
=======


  
>>>>>>> 8694e5cdf8d19e295676c5bc69e1a3231b00739d
export default LoadingPage;
