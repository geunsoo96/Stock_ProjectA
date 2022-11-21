
import styled from "styled-components";
import theme from "@/Theme/theme";
const ItemBox = styled.div`
  width: 300px;
  padding: 10px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.lightBlack};
  gap:20px;
  &>div{
    font-family: SCD-5;
    font-size: 1.1rem;
  }
  &>div:nth-child(1){
    width: 120px;
  };
  & > div:nth-child(2) {
    width: 120px;
    padding-left: 30px;
  }
`
// test
const KospiItem = ({data}:any) => {
  return (
    <>
      <ItemBox>
        <div>{data.company_name}</div>
        <div>{data.close}원</div>
      </ItemBox>
    </>
  )
};
export default KospiItem;