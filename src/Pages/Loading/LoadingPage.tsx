import styled from "styled-components"
import React,{useEffect, useRef, useState} from "react"
import { combineReducers, configureStore } from "@reduxjs/toolkit";


  const LoadingPage = () =>{
    const mainRef = useRef<HTMLDivElement>(null);
    

  return(
    <Container>
      {/* <canvas ref={canvasRef} style={{background:"white"}} width={1000} height={600} onClick={click}></canvas> */}
      <Coin>
        <div>
          <img  className="image_rotate" src="img/coin.jpg"></img>
          <img className="image_rotate" src="img/coin.jpg"></img>
          <img className="image_rotate"src="img/coin.jpg"></img>
        </div>
      </Coin>
      
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
  background-color: white;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color: red;
    width:300px;
    height:300px;
    background-image: url("img/prog.png");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
    & > img{
      width:100%;
      height:100%;
    }
    
  }
`

const Coin = styled.div`
  border-radius: 50%;
  
  & > div {
    position: absolute;
    width:600px;
    height:600px;
    //background-color: red;
    border-radius: 50%;
    & > img {
      width: 200px;
      height:220px
      
    }
    animation: rotate_image 10s linear infinite;transform-origin: 50% 50%;
   
    
    
  }

`