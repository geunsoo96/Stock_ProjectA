import styled from 'styled-components';
import NewsBox from './NewsBox';
import theme from '@/Theme/theme';
import { useState, useEffect } from 'react';
import LoadingPage from '../Loading/LoadingPage';

const NewsContainer = styled.div`
  width: inherit;
  height: inherit;

  & > div:nth-child(1) {
    // "시장 동향 소식"
    margin: 5px 0 2rem 5px;
    font-size: 3rem;
    font-family: YANGJIN;
    color: black;
  }
  & > hr {
    border: 0.2rem solid ${theme.mainCol};
  }
`;

const ListButtonStyle = styled.div`
  // button의 최상위 컴포넌트
  width: inherit;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    // 버튼 중앙 정렬용
    width: 450px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    & > button {
      // 버튼 스타일
      width: 35px;
      height: 35px;
      background-color: ${theme.mainCol};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: white;
      border-color: ${theme.mainCol};
    }
  }
`;

export interface newsdata {
  id: number;
  title: string;
  date: string;
  sumar: string;
  news: string;
}
// 뉴스 데이터 타입 지정 인터페이스

function News() {
  const newsLimit = 500;
  //button 목록 수
  const pageNewsLimit = 5;
  // 한 페이지에 보이는 news 목록 수
  // newsLimit * pageNewsLimit = 기사 총 개수
  // new 개수를 늘릴려면 newsLimit만  늘릴 것.

  const [newsData, setNewsData] = useState<newsdata[]>([]);
  // fetch로 가져온 데이터를 저장
  const [listNum, setListNum] = useState(5);
  // 하단 목록의 번호 변화 시 사용
  const [loading, setLoading] = useState(false);
  // 로딩 값 설정
  const [buttonState, setButtonState] = useState(1);
  // fetch를 함유하고 있는 useEffect 실행에 사용

  const NumberMaker = function () {
    let Number: any[] = [];
    for (let i = listNum - 5; i < listNum; i++) {
      Number.push(i);
      if (Number.length === 5) {
        break;
        // 한 화면에 5개의 버튼만 보여주기 위해서 5개가 되면 정지
      }
    }
    return Number;
  };

  useEffect(() => {
    NumberMaker();
    // <, <<, >, >> 버튼 클릭 시 번호 변화에 사용
  }, [listNum]);

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=json&numOfRows=${pageNewsLimit}&pageNo=${buttonState}`,
        // pageNewsLimit의 개수만큼 화면에 출력
      ).then(async (res) => {
        let jsonRes = await res.json();
        let datavalue: any = [];
        console.log(jsonRes);
        for (let i = 0; i < pageNewsLimit - 1; i++) {
          let data = jsonRes.items;
          let title = data[i].newsTitl;
          let writeDate = data[i].newsWrtDt.split(' ')[0];
          let sumar = data[i].cntntSumar;
          let news = data[i].newsBdt;
          let value = { id: i, title: title, date: writeDate, sumar: sumar, news: news };
          datavalue[i] = value;
          setLoading(false);
          // 로딩 끝
        }
        setNewsData(datavalue);
        // fetch로 가지고 온 데이터를 NewsData에 저장
      });
    };
    setLoading(true);
    // 로딩 시작
    getData();
  }, [buttonState]);

  // 로딩 리턴
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  // 데이터 받아 왔을 시
  if (!loading) {
    return (
      <>
        <NewsContainer>
          <div>시장 동향 소식.</div>
          <hr />

          {/* 뉴스 데이터 */}
          {newsData.map((value: any, index: any) => {
            return <NewsBox key={index} value={value}></NewsBox>;
          })}

          {/* 뉴스 목록 버튼 */}
          <ListButtonStyle>
            <div>
              {/* << 버튼 */}
              <button
                onClick={() => {
                  setListNum(5);
                }}
              >
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.01705 19.8864V18.75L15.1648 14.0909V15.9091L8.14773 19.2898L8.20455 19.1761V19.4602L8.14773 19.3466L15.1648 22.7273V24.5455L6.01705 19.8864ZM19.2006 19.8864V18.75L28.3484 14.0909V15.9091L21.3313 19.2898L21.3881 19.1761V19.4602L21.3313 19.3466L28.3484 22.7273V24.5455L19.2006 19.8864Z"
                    fill="white"
                  />
                </svg>
              </button>
              {/* < 버튼 */}
              <button
                onClick={() => {
                  if (listNum === 5) {
                  } else {
                    setListNum(listNum - 5);
                  }
                }}
              >
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.0170455 5.88636V4.75L9.16477 0.0909088V1.90909L2.14773 5.28977L2.20455 5.17614V5.46023L2.14773 5.34659L9.16477 8.72727V10.5455L0.0170455 5.88636Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* 한 페이지에 보이는 button 개수 */}
              {NumberMaker().map((value, index) => {
                return (
                  <button key={index + 1} onClick={() => setButtonState(value + 1)}>
                    {value + 1}
                  </button>
                );
              })}

              {/* > 버튼 */}
              <button
                onClick={() => {
                  if (listNum === newsLimit) {
                  } else {
                    setListNum(listNum + 5);
                  }
                }}
              >
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636Z"
                    fill="white"
                  />
                </svg>
              </button>
              {/* >> 버튼 */}
              <button
                onClick={() => {
                  setListNum(newsLimit);
                }}
              >
                <svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636ZM22.3484 5.88636L13.2006 10.5455V8.72727L20.2177 5.34659L20.1609 5.46023V5.17614L20.2177 5.28977L13.2006 1.90909V0.0909088L22.3484 4.75V5.88636Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </ListButtonStyle>
        </NewsContainer>
      </>
    );
  }
}

export default News;
