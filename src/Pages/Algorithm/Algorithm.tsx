import styled from "styled-components";
import theme from "@/Theme/theme";
import { useNavigate } from "react-router-dom";
const AlgorithmParent = styled.div`
  /* 알고리즘 추천주 페이지 전체 설정 */
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > h1 {
    /* 이달의 추천주식 */
    font-size: 2.5rem;
    font-family: YANGJIN;
    color: ${theme.lightBlack};
  }
`;
const StockBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & > h2 {
      font-size: 2rem;
      font-family: SCD-5;
      color: #333;
    }
  }
`;
const StockList = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  border: 3px solid ${theme.mainCol};
  border-radius: 20px;
`;
const AlgorithmButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: ${theme.mainCol};
  cursor: pointer;
  color: white;
  font-size: 2rem;
  font-family: SCD-5;
  &:hover {
    background-color: ${theme.lightBlack};
  }
`;
const Algorithm = () => {
  const navigate = useNavigate();
  return (
    <AlgorithmParent>
      <h1>이달의 추천주식</h1>
      <StockBox>
        <div>
          <h2>KOSPI</h2>
          <StockList></StockList>
        </div>
        <div>
          <h2>KOSDAQ</h2>
          <StockList></StockList>
        </div>
      </StockBox>
      <AlgorithmButton
        onClick={() => {
          navigate("/lotto");
        }}
      >
        침팬지 추천받기
      </AlgorithmButton>
    </AlgorithmParent>
  );
};
export default Algorithm;