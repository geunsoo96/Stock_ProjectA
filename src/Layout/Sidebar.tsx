import StockSideItem from '@/Components/StockSideItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import LoadingPageSide from '@/Pages/Loading/LoadingPageSide';

const SidebarBox = styled.div`
  width: 350px;
  height: 800px;
  border-radius: 20px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
  bottom: 50px;
  & > div {
    font-size: 3rem;
    font-family: SCD-7;
  }
`;

const StockBox = styled.div`
  margin-top: 5px;
  width: 95%;
  height: 90%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    width: 95%;
    height: 10%;
  }
`;

export interface rankData {
  DB: string;
  close: number;
  name: string;
  value: number;
  code: number;
}

const Sidebar = () => {
  const [rankData, setRankData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/rank/kospi/m/volume')
      .then((res) => res.json())
      .then((res: any) => {
        setRankData(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SidebarBox>
        <LoadingPageSide></LoadingPageSide>
      </SidebarBox>
    );
  }

  if (!loading) {
    return (
      <>
        <SidebarBox>
          <div>거래량 TOP 10</div>
          <StockBox>
            {rankData.map((value: any, index: any) => {
              return <StockSideItem key={index} data={value}></StockSideItem>;
            })}
          </StockBox>
        </SidebarBox>
      </>
    );
  }
};

export default Sidebar;
