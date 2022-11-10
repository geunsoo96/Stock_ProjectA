import styled from 'styled-components';
import theme from '@/Theme/theme';
import TopItem from './../../Components/TopItem';
import TopBottomItem from '@/Components/TopBottomItem';

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
  const TopdummyData = [
    { type: '시가', value: 6542 },
    { type: '고가', value: 6808 },
    { type: '저가', value: 6024 },
    { type: '종가', value: 6438 },
    { type: '거래량', value: 56148 },
  ];

  const BottomdummyData = [
    { type: '당일고가', value: 6542 },
    { type: '당일저가', value: 6808 },
    { type: '상한가', value: 6024 },
    { type: '하향가', value: 6438 },
  ];

  return (
    <TopBox>
      <div>
        <div>오늘의 TOP 거래 주식</div>
        <div>
          <div>1사단</div>
          <div>348769</div>
        </div>
      </div>
      <hr />
      <ItemBox>
        <div>차트</div>
        <div>
          <div>
            <div>일간</div>
            <div>월간</div>
          </div>
          <div>
            {TopdummyData.map((value, index) => {
              return <TopItem key={index} data={value}></TopItem>;
            })}
          </div>
        </div>
      </ItemBox>
      <TopBottomBox>
        <div>
          {BottomdummyData.map((value, index) => {
            return <TopBottomItem key={index} data={value}></TopBottomItem>;
          })}
        </div>
      </TopBottomBox>
    </TopBox>
  );
}

export default Top;
