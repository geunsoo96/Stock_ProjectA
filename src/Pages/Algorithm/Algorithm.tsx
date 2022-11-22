import styled from 'styled-components';
import theme from '@/Theme/theme';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingPage from '../Loading/LoadingPage';
import StockItem from './StockItem';
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
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${theme.lightBlack};
  }
`;
const StockBox = styled.div`
  /* 주식 리스트 보여줄 박스 */
  width: 1200px;
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
      font-size: 3rem;
      font-family: SCD-5;
      color: #333;
    }
  }
`;
const StockList = styled.div`
  /* 주식 종목 리스트 */
  width: 300px;
  height: 500px;
  background-color: white;
  border: 3px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AlgorithmButton = styled.button`
  /* 침팬지 추천받기 페이지로 넘어가는 링크 */
  width: 300px;
  height: 50px;
  border-radius: 10px;
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
  const [kospi, setKospi] = useState([]);
  const [kosdak, setKosdak] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('http://127.0.0.1:5000/close_list/kospi')
      // 코스피 종가 데이터
      .then((res) => res.json())
      .then((res: any) => {
        setKospi(res);
        console.log(res);
        setLoading(false);
      });
    fetch('http://127.0.0.1:5000/close_list/kosdak')
      // 코스닥 종가 데이터
      .then((res) => res.json())
      .then((res: any) => {
        setKosdak(res);
        console.log(res);
        setLoading(false);
      });
  }, []);
  if (loading) {
    // 만약 로딩중이면 스타일링된 로딩페이지 출력
    return <LoadingPage></LoadingPage>;
  }
  return (
    <AlgorithmParent>
      <h1>이달의 추천주식</h1>
      <StockBox>
        <div>
          <h2>KOSPI</h2>
          <StockList>
            {kospi.map((value, index) => {
              return <StockItem key={index} data={value}></StockItem>;
            })}
          </StockList>
        </div>
        <div>
          <h2>KOSDAQ</h2>
          <StockList>
            {kosdak.map((value, index) => {
              return <StockItem key={index} data={value}></StockItem>;
            })}
          </StockList>
        </div>
      </StockBox>
      <AlgorithmButton
        onClick={() => {
          navigate('/lotto');
        }}
      >
        침팬지 추천받기
      </AlgorithmButton>
    </AlgorithmParent>
  );
};
export default Algorithm;
