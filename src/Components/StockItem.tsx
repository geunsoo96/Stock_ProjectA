import styled from 'styled-components';
import theme from '@/Theme/theme';
import { rankData } from './../Layout/Sidebar';
import { useNavigate, Link } from 'react-router-dom';

const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: SCD-5;
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
    }
    &>div:nth-child(1){
      width:50%;
    }
    &>div:nth-child(2){
      width:40%;
      font-size:16px;
    }
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
