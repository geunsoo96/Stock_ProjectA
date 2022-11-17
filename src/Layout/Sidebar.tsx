import StockItem from '@/Components/StockItem';
import theme from '@/Theme/theme';
import styled from 'styled-components';
import React, { useState, useEffect, SetStateAction } from "react"

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
`;

export interface rankData {
  DB: string,
  close: number,
  name: string,
  value: number
  }

const Sidebar = () => {
  const dummyData = [
    {
      "DB": "kospi_252670_m",
      "close": 2530,
      "name": "KODEX 200선물인버스2X",
      "value": 212304098
    }
  ];
  const [rankData,setRankData] = useState(dummyData)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/rank/kospi/m/volume")
    .then((res)=>res.json())
    .then((res:any)=>{
      setRankData(res)
      console.log(res)
    })
  },[])

  return (
    <>
      <SidebarBox>
        <div>거래량 TOP 10</div>
        <StockBox>
          {rankData.map((value, index) => {
            return <StockItem key={index} data={value}></StockItem>;
          })}
        </StockBox>
      </SidebarBox>
    </>
  );
};

export default Sidebar;
