import styled from "styled-components";

const HeaderBox = styled.div`
  width: 1920px;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 200px;
  flex-direction: row;
  background-color: rgba(254, 172, 49, 1);
  color: white;

  & > div {
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

  & > input {
    width: 400px;
    height: 80px;
    margin-left: 150px;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 10px;
    padding-left: 20px;
  }
  & > img {
    cursor: pointer;
    margin-left: 100px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <input placeholder="통합검색"></input>
        <div>추천 알고리즘</div>
        <div>최근 주식 동향</div>
        <img src="/img/logo.png" alt="이미지 없음" />
      </HeaderBox>
    </>
  );
};

export default Header;
