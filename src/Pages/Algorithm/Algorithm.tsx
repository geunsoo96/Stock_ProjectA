import styled from "styled-components";
import theme from "@/Theme/theme";
import { useNavigate } from "react-router-dom";
import KospiItem from "./KospiItem";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const dummyKospi = [
    {
      id: "삼성전자",
      price: 65000
    },
    {
      id: "SK하이닉스",
      price: 123000
    },  
    {
      id: "네이버",
      price: 110000
    },  
    {
      id: "카카오",
      price: 54000
    },    
    {
      id: "DB하이텍",
      price: 13000
    },    
    {
      id: "카카오뱅크",
      price: 32000
    },    
    {
      id: "카카오페이",
      price: 8000
    },    
    {
      id: "삼성중공업",
      price: 2300
    },    
    {
      id: "삼성화재",
      price: 17000
    },    
    {
      id: "현대차",
      price: 360000
    }
  ]

  const navigate = useNavigate();
  return (
    <AlgorithmParent>
      <h1>이달의 추천주식</h1>
      <StockBox>
        <div>
          <h2>KOSPI</h2>
          <StockList>
            {dummyKospi.map((value, index)=>{
              return <KospiItem key={index} data={value}></KospiItem>
            })}
          </StockList>
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
