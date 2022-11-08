import styled from 'styled-components';
import theme from '@/Theme/theme';

const TopBox = styled.div`
  width: inherit;
  height: inherit;
  background-color: rgba(222, 100, 1, 0.8);
  & > div:nth-child(1) {
    & > div {
      font-size: 4rem;
      font-family: 'SCD-7';
      display: flex;
      gap: 30px;
      & > div {
        font-size: 3rem;
        font-family: 'scd-5';
        font-weight: bold;
      }
    }
  }
  & > hr {
    height: 3px;
    background-color: ${theme.mainCol};
    border: 0px;
  }
`;

const ItemBox = styled.div`
  display: flex;
  height: 500px;
  & > div:nth-child(1) {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-family: 'scd-5';
    font-weight: bold;
  }
  & > div:nth-child(2) {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & > div:nth-child(1) {
      display: flex;
    }
    & > div:nth-child(2) {
      display: flex;
    }
  }
`;

function Top() {
  return (
    <TopBox>
      <div>
        <div>오늘의 TOP 거래 주식</div>
        <div>
          <div>1사단</div>
          <div>348769</div>
        </div>
      </div>
      <hr />
      <ItemBox>
        <div>차트</div>
        <div>
          <div>
            <div>일간</div>
            <div>월간</div>
          </div>
          <div>
            <div>데이터 타입</div>
            <div>데이터</div>
          </div>
        </div>
      </ItemBox>
      <div>
        <div>
          <div>당일고가</div>
          <div>데이터</div>
        </div>
        <div>
          <div>당일저가</div>
          <div>데이터</div>
        </div>
        <div>
          <div>상한가</div>
          <div>데이터</div>
        </div>
        <div>
          <div>하한가</div>
          <div>데이터</div>
        </div>
      </div>
    </TopBox>
  );
}

export default Top;
