
import styled from "styled-components";
import theme from "@/Theme/theme";
const ItemBox = styled.div`
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.lightBlack};
  font-size: 1.5rem;
  font-family: SCD-5;
  &>div:nth-child(1){
    width: 100px;
  };
  & > div:nth-child(2) {
    width: 100px;
    padding-left: 40px;
  }
`
// test
const KospiItem = ({data}:any) => {
  return (
    <>
      <ItemBox>
        <div>{data.id}</div>
        <div>{data.price.toLocaleString()}원</div>
      </ItemBox>
    </>
  )
};
export default KospiItem;