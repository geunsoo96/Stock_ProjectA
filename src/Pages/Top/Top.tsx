import styled from 'styled-components';
import theme from '@/Theme/theme';
import TopItem from './../../Components/TopItem';
import TopBottomItem from '@/Components/TopBottomItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DetailCanvas from '../Detail/DetailCanvas';

const TopBox = styled.div`
  width: inherit;
  height: inherit;
  /* background-color: rgba(222, 100, 1, 0.8); */
  & > div:nth-child(1) {
    & > div {
      font-size: 4rem;
      font-family: 'SCD-7';
      display: flex;
      gap: 30px;
      & > div {
        font-size: 3rem;
        font-family: 'scd-5';
        font-weight: bold;
      }
    }
  }
  & > hr {
    height: 3px;
    background-color: ${theme.mainCol};
    border: 0px;
  }
`;

const ItemBox = styled.div`
  display: flex;
  height: 500px;
  & > div:nth-child(1) {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-family: 'scd-5';
    font-weight: bold;
  }
  & > div:nth-child(2) {
    margin-top: 30px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > div:nth-child(1) {
      display: flex;
      gap: 50px;
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-family: 'scd-3';
        font-weight: bold;
        width: 150px;
        height: 30px;
        background-color: lightgray;
        border-radius: 10px;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;

      gap: 50px;
      & > div {
        display: flex;
        gap: 100px;
      }
    }
  }
`;

const TopBottomBox = styled.div`
  width: inherit;
  height: 14%;
  border-radius: 10px;
  background-color: ${theme.mainCol};
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    gap: 100px;
    width: 90%;
  }
`;

export interface TopdummyData {
  type: string;
  value: number;
}

function Top() {
  const [samsungD, setSamsungD] = useState<any>([{}]);
  const [samsungM, setSamsungM] = useState<any>(null);
  const [samsungAll, setSamsungAll] = useState<any>(null);
  
  const time_format = (time:string) => {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return(
      `${year}-${month >= 10 ? month : "0" + month}-${
        day >= 10 ? day : "0" + day
      }`
    )
  }

  useEffect(()=>{
    const getSamsungD = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:5000/samsungPrice_d")
        setSamsungD(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSamsungD()
  },[])

  useEffect(()=>{
    const getSamsungM = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:5000/samsungPrice_m")
        setSamsungM(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSamsungM()
  },[])

  useEffect(()=>{
    const getSamsungAll = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:5000/samsungPrice_dayAll")
        setSamsungAll(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSamsungAll()
  },[])

  if(samsungM === null){
    return null;
  }
  if(samsungAll === null){
    return null;
  }
  console.log(samsungM[0])
  const SamsungMonthData = [
    { type: '시가', value: samsungM[0].open },
    { type: '고가', value: samsungM[0].high },
    { type: '저가', value: samsungM[0].low },
    { type: '종가', value: samsungM[0].close },
    { type: '거래량', value: samsungM[0].volume },
  ];

  const SamsungDayData = [
    { type: '당일고가', value: samsungD[0].high },
    { type: '당일저가', value: samsungD[0].low },
    { type: '상한가', value: samsungD[0].open*1.3 },
    { type: '하향가', value: samsungD[0].open*0.7 },
  ];

  const graphData = {
    graph:[
      {x:time_format(samsungAll[0].day),y:samsungAll[0].close},
      {x:time_format(samsungAll[1].day),y:samsungAll[1].close},
      {x:time_format(samsungAll[2].day),y:samsungAll[2].close},
      {x:time_format(samsungAll[3].day),y:samsungAll[3].close},
      {x:time_format(samsungAll[4].day),y:samsungAll[4].close},
    ],
    max:80000,
    min:60000,
    minus:20000
  }

  return (
    <TopBox>
      <div>
        <div>오늘의 TOP 거래 주식</div>
        <div>
          <div>삼성전자</div>
          <div>005930</div>
        </div>
      </div>
      <hr />
      <ItemBox>
      <DetailCanvas data={graphData}></DetailCanvas>
        <div>
          <div>
            <div>항목</div>
            <div>주가</div>
          </div>
          <div>
            {SamsungMonthData.map((value, index) => {
              return <TopItem key={index} data={value}></TopItem>;
            })}
          </div>
        </div>
      </ItemBox>
      <TopBottomBox>
        <div>
          {SamsungDayData.map((value, index) => {
            return <TopBottomItem key={index} data={value}></TopBottomItem>;
          })}
        </div>
      </TopBottomBox>
    </TopBox>
  );
}

export default Top;
