import Sidebar from '@/Layout/Sidebar';
import Header from '@/Layout/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
const TotalBox = styled.div`
  height: 969px;
`;

const MainBox = styled.div`
  margin-top: 40px;
  width: 1920px;
  height: 750px;
  align-items: center;
  justify-content: center;
  gap: 100px;
  display: flex;
  background-color: rgba( 255, 255, 255, 5 );
  `;

const MainItem = styled.div`
  width: 1300px;
  height: 700px;
  background-image: url("/img/생각하는 검은대표님.jpeg");

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
