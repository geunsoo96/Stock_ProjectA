import styled from 'styled-components';
import theme from '@/Theme/theme';
const ItemBox = styled.div`
  /* 랜덤 주식종목 박스 스타일링 */
  width: 300px;
  padding: 10px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.lightBlack};
  gap: 20px;
  & > div {
    font-family: SCD-5;
    font-size: 1.1rem;
  }
  & > div:nth-child(1) {
    width: 120px;
  }
  & > div:nth-child(2) {
    width: 120px;
    padding-left: 30px;
  }
`;
const StockItem = ({ data }: any) => {
  return (
    <>
      <ItemBox>
        {/* 종목이름과 종가기준 주식가격 출력 */}
        <div>{data.company_name}</div>
        <div>{data.close}원</div>
      </ItemBox>
    </>
  );
};
export default StockItem;
