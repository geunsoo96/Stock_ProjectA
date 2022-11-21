import Sidebar from '@/Layout/Sidebar';
import Header from '@/Layout/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
const TotalBox = styled.div`
  height: 969px;
`;

const MainBox = styled.div`
  padding-top: 60px;
  width: 1920px;
  height: 85%;
  align-items: flex-start;
  justify-content: center;
  gap: 100px;
  display: flex;
  /* background-image: url("/img/background.png"); */
  `;

const MainItem = styled.div`
  width: 1300px;
  height: 700px;
  background-image: url("/img/생각하는 검은대표님 예제.jpeg");
  box-shadow: 0px 0px 25px 30px white;
  background-size: cover;
`;

const Main = () => {
  return (
    <TotalBox>
      <Header></Header>
      <MainBox>
        <MainItem>
          <Outlet />
        </MainItem>
        <Sidebar></Sidebar>
      </MainBox>
    </TotalBox>
  );
};

export default Main;
