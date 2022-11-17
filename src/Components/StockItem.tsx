import styled from 'styled-components';
import theme from '@/Theme/theme';
import { rankData } from './../Layout/Sidebar';
import { useNavigate, Link } from 'react-router-dom';

const ItemBox = styled.div`
  width: 90%;
  height: 10%;
  background-color: ${theme.mainCol};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.3s;
  }
  &>div:nth-child(1){
    width:50%;
  }
  &>div:nth-child(2){
    width:40%;
  }
`;

const StockItem = ({ data }: { data: rankData }) => {
  return (
    <>
      <a href={`/Detail/${data.code}`}>
        <ItemBox>
          <div>{data.name}</div>
          <div>
            <div>거래량 {data.value.toLocaleString()}</div>
            <div>종가 {data.close.toLocaleString()}원</div>
          </div>
        </ItemBox>
      </a>
    </>
  );
};

export default StockItem;
