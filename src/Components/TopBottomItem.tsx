import styled from 'styled-components';
import { TopdummyData } from './../Pages/Top/Top';

const ItemBox = styled.div`
  /* 차트 하단 삼성전자 일봉 데이터 스타일드 컴포넌트 */
  display: flex;
  gap: 50px;
  width: 220px;
  & > div {
    font-size: 2rem;
    font-family: 'scd-7';
  }
`;

const TopBottomItem = ({ data }: { data: TopdummyData }) => {
  return (
    <>
      <ItemBox>
        <div>{data.type}</div>
        <div>{data.value}</div>
      </ItemBox>
    </>
  );
};
export default TopBottomItem;
