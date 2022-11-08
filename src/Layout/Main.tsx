import Sidebar from '@/Layout/Sidebar';
import Header from '@/Layout/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const TotalBox = styled.div`
  height: 969px;
  /* background: url('/img/background.png'); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.)), url('/img/background.png'); */
`;

const MainBox = styled.div`
  margin-top: 40px;
  width: 1800px;
  height: 750px;
  align-items: center;
  justify-content: center;
  gap: 100px;
  display: flex;
`;

const MainItem = styled.div`
  width: 1300px;
  height: 700px;
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
