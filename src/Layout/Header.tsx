import styled from 'styled-components';
import theme from '@/Theme/theme';
import { useNavigate, Link } from 'react-router-dom';
import { useRef } from 'react';
import SearchBox from '@/Components/SearchBox';

const HeaderBox = styled.div`
  width: 1920px;
  height: 150px;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.mainCol};
  color: white;

  & > ul {
    &:hover {
      transform: rotate(1800deg);
      transition: 5s;

      &::before {
        background-image: url('/img/image.png');
        background-size: 100% 100%;
        content: '';
        position: relative;
        bottom: 40px;
        height: 160px;
        width: 160px;
        transform: rotate(360deg);
        transition: 10s;
      }

      & > * {
        display: none;
      }
    }
    width: 300px;
    height: 90px;
    cursor: pointer;
    display: flex;
    gap: 20px;
    & > div {
      font-size: 3rem;
      font-family: 'YANGJIN';
      align-self: flex-end;
      position: relative;
      top: 8px;
    }
  }

  & > a {
    & > {
      div {
        font-size: 2rem;
        font-weight: bold;
        font-family: SCD-3;
        width: 200px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: gray;
        border-radius: 20px;

        &:hover {
          color: black;
          cursor: pointer;
        }
      }
    }
  }

  & > img {
    cursor: pointer;
    margin-left: 100px;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBox>
        <div>
        <SearchBox></SearchBox>
        </div>
        <Link to={'/algorithm'}>
          <div>추천 알고리즘</div>
        </Link>
        <Link to={'/news'}>
          <div>최근 주식 동향</div>
        </Link>
        <ul
          onClick={() => {
            navigate('/');
          }}
        >
          <img src="/img/logo.png" alt="이미지 없음" />
          <div>
            우가우가<br></br> 투자증권
          </div>
        </ul>
      </HeaderBox>
    </>
  );
};

export default Header;
