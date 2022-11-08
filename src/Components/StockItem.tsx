import styled from 'styled-components';
import theme from '@/Theme/theme';
import { dummyData } from './../Layout/Sidebar';

const ItemBox = styled.div`
  width: 90%;
  height: 10%;
  background-color: ${theme.mainCol};

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.3s;
  }
`;

const StockItem = ({ data }: { data: dummyData }) => {
  return (
    <>
      <ItemBox>
        <div>{data.name}</div>
        <div>{data.price.toLocaleString()}원</div>
        <div>{(data.price - data.yesterday).toLocaleString()}원 상승!</div>
      </ItemBox>
    </>
  );
};

export default StockItem;
