import styled from 'styled-components';
import theme from '@/Theme/theme';
import { rankData } from './../Layout/Sidebar';
import { Link } from 'react-router-dom';

const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: SCD-5;
  //사이드바 거래량 박스 1개
  &>div{
    width: 100%;
    height: 100%;
    background-color: ${theme.mainCol};
    color: black;
    font-family: SCD-7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      transition: 0.3s;
    }// 마우스 올리면 커짐
    &>div:nth-child(1){
      width:50%;
    }// 종목 이름
    &>div:nth-child(2){
      width:40%;
      font-size:16px;
    }// 거래량, 종가
  }
`;

const StockItem = ({ data }: { data: rankData }) => {
  return (
    <>
      <Link to={`/Detail/${data.code}`}>
        <ItemBox>
          <div>
            <div>{data.name}</div>
            <div>
              <p>거래량 {data.value.toLocaleString()}</p>
              <p>종가 {data.close.toLocaleString()}원</p>
            </div>
          </div>
        </ItemBox>
      </Link>
    </>
  );
};

export default StockItem;
