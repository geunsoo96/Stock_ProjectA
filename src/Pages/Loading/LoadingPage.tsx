import styled from "styled-components"
import React,{useEffect, useRef} from "react"
import { combineReducers, configureStore } from "@reduxjs/toolkit";


  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
  
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
  const TextBox = styled.div`
    font-size: 30px;
  `
  
  const MainBox = styled.div`
    width:200px;
    height:200px;
    background-color: #333;
  `

const LoadingPage = () =>{

  const main = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    for(let i=0;i<10;i++){
      let coin = document.createElement("div");
      coin.style.width="50px";
      coin.style.height="50px";
      coin.style.backgroundColor="red";
      coin.style.borderRadius="50%";
      coin.style.position="absolute";
      coin.style.top="50%";
      main.current?.appendChild(coin);
    }
  })
  
  
 //클릭시 변동
  function click(){
    // for(let i:number =0;i<10;i++){
    //   let box = document.createElement('div')
    //   box.style.width="50px";
    //   box.style.height="50px";
    //   box.style.borderRadius="50%";
    //   box.style.backgroundColor="red";
    //   box.style.position="absolute";
    //   box.style.backgroundImage="url('coin.png')"
    //   box.style.top='50%';
    //   main.current?.appendChild(box);
    // }
    
  }
  
  return(
    <Container ref={main}>
      <div>
        <MainBox onClick={click}>
        </MainBox>
        <TextBox>Loading</TextBox>
      </div>
    </Container>

  )
}
export default LoadingPage;
