import styled from "styled-components";
import theme from "@/Theme/theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef, useEffect } from "react";


import { current } from "@reduxjs/toolkit";
const LottoParent = styled.div`
  width: inherit;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > img {
    /* 대표님 */
    cursor: pointer;
  }
  & > div {
    font-size: 3rem;
    font-family: SCD-7;
    color: ${theme.lightBlack};
  }
  & > div:nth-child(2) {
    font-size: 2rem;
  }
  & > div:nth-child(4) {
    /* 추천종목 나오는 박스 */
    width: 500px;
    height: 100px;
    border: 3px solid ${theme.mainCol};
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;
// 
const LottoButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: ${theme.mainCol};
  cursor: pointer;
  color: white;
  font-size: 2rem;
  font-family: SCD-5;
  &:hover {
    background-color: ${theme.lightBlack};
  }
`;
const Lotto = () => {
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);
  const [lotto,setLotto] = useState(null);
  const [data, setData] = useState("");
    const getData = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:5000/randomName")
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  if(data === undefined) {
    return null;
  }
  const animate = () => {
    if(shake === false)
    {
    setShake((current) => !current);
    setTimeout(() => {
      getData();
      setShake(false);
    }, 3000);
    }else{
      alert("중복 클릭 안대용~")
    }
  };

  return (
    <LottoParent>
      {/* position: relative;
    bottom: 40px;
    height: 160px;
    width: 160px;
    transform: rotate(360deg);
    transition: 10s; */}
      <img
        src="/img/image.png"
        style={{
          transform: shake ? "rotate(360deg)" : "",
          transition: shake ? "3s" : "",
        }}
        onClick={() => animate()}
      ></img>
      <div>↑↑↑클릭↑↑↑</div>
      <div>침팬지의 추천종목</div>
      <div>
        {data}
      </div>
      <LottoButton
        onClick={() => {
          navigate("/algorithm");
        }}
      >
        뒤로가기
      </LottoButton>
    </LottoParent>
  );
};
// 충돌 테스트
export default Lotto;
