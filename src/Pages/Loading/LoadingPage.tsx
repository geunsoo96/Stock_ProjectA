import styled from "styled-components"
import React,{useEffect, useRef} from "react"
import { combineReducers } from "@reduxjs/toolkit";



const LoadingPage = () =>{

  const main = useRef<HTMLDivElement>(null);
  
 //클릭시 생성
  function click(){
    for(let i:number =0;i<10;i++){
      let box = document.createElement('div')
      box.style.width="50px";
      box.style.height="50px";
      box.style.borderRadius="50%";
      box.style.backgroundColor="red";
      box.style.position="absolute";
      box.style.backgroundImage="url('coin.png')"
      box.style.top=`50%`;

      main.current?.appendChild(box);
    }
    
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