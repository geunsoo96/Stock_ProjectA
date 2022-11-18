import StockItem from '@/Components/StockItem';
import theme from '@/Theme/theme';
import styled from 'styled-components';
import React, { useState, useEffect, SetStateAction } from "react"
import LoadingPage from '@/Pages/Loading/LoadingPage';

const SidebarBox = styled.div`
  width: 350px;
  height: 700px;
  border-radius: 20px;
  border: 5px solid ${theme.mainCol};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  & > div {
    font-size: 3.5rem;
    font-family: SCD-7;
  }
`;

const StockBox = styled.div`
  margin-top: 5px;
  width: 95%;
  height: 90%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>a{
    width: 90%;
    height: 10%;
    background-color: ${theme.mainCol};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;

export interface rankData {
  DB: string,
  close: number,
  name: string,
  value: number,
  code: number
  }

const Sidebar = () => {
  const [rankData,setRankData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/rank/kospi/m/volume")
    .then((res)=>res.json())
    .then((res:any)=>{
      setRankData(res)
      console.log(res)
      setLoading(false)
    })
  },[])

  if(loading){
    return (<LoadingPage></LoadingPage>)
  }

  if(!loading){
    return (
      <>
      <SidebarBox>
        <div>거래량 TOP 10</div>
        <StockBox>
          {rankData.map((value:any, index:any) => {
            return <StockItem key={index} data={value}></StockItem>;
          })}
        </StockBox>
      </SidebarBox>
      </>
    );
  }
};

export default Sidebar;
