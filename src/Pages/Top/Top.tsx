import styled from 'styled-components';
import theme from '@/Theme/theme';
import TopItem from './../../Components/TopItem';
import TopBottomItem from '@/Components/TopBottomItem';
import { useEffect, useState } from 'react';
import DetailCanvas from '../Detail/DetailCanvas';

const TopBox = styled.div`
  /* 전체 차트가 구현될 부모 스타일드 컴포넌트 */
  width: inherit;
  height: inherit;
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
    background-color: #ccc;
    border: 0px;
  }
`;

const ItemBox = styled.div`
  /* 차트 상단 데이터 스타일드 컴포넌트 */
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
  /* 일봉 데이터가 보여질 스타일드 컴포넌트 */
  width: inherit;
  height: 14%;
  background-color: ${theme.mainCol};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px 20px ${theme.mainCol};
  & > div {
    display: flex;
    gap: 100px;
    width: 90%;
  }
`;

export interface TopdummyData {
  // ex) 상한가:string ___ 41990원:number
  type: string;
  value: number;
}

function Top() {
  const [samsungD, setSamsungD] = useState<any>([{}]);
  const [samsungM, setSamsungM] = useState<any>(null);
  const [samsungAll, setSamsungAll] = useState<any>(null);

  const time_format = (time: string) => {
    // 일,월봉 데이터가 구현될 차트 함수
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
  };

  useEffect(() => {
    fetch('http://127.0.0.1:5000/samsungPrice_d')
      // 삼성전자 일봉기준 가격 데이터
      .then((res) => res.json())
      .then((res: any) => {
        setSamsungD(res);
      });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/samsungPrice_m')
      // 삼성전자 월봉기준 가격 데이터
      .then((res) => res.json())
      .then((res: any) => {
        setSamsungM(res);
      });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/samsungPrice_dayAll')
      // 삼성전자 날짜 데이터
      .then((res) => res.json())
      .then((res: any) => {
        setSamsungAll(res);
      });
  }, []);

  if (samsungD === null) {
    return null;
  }
  if (samsungM === null) {
    return null;
  }
  if (samsungAll === null) {
    return null;
  }

  const SamsungMonthData = [
    // 월봉 구현될 객체
    { type: '시가', value: samsungM[0].open },
    { type: '고가', value: samsungM[0].high },
    { type: '저가', value: samsungM[0].low },
    { type: '종가', value: samsungM[0].close },
    { type: '거래량', value: samsungM[0].volume },
  ];

  const SamsungDayData = [
    // 일봉 구현될 객체
    { type: '당일고가', value: samsungD[0].high },
    { type: '당일저가', value: samsungD[0].low },
    { type: '상한가', value: samsungD[0].open * 1.3 },
    // 30% 상승
    { type: '하한가', value: samsungD[0].open * 0.7 },
    // 30% 하락
  ];

  const graphMap = (data: any) => {
    // 그래프에 구현될 삼성전자 종가기준 일봉 데이터 넣는 함수
    console.log(data);
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({ x: time_format(data[i].day), y: data[i].close });
    }
    return arr;
  };

  const graphData = {
    graph: graphMap(samsungAll),
    // 위에 함수 호출
    max: 80000,
    min: 60000,
    minus: 20000,
  };

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
