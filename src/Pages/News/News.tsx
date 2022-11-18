import styled from "styled-components";
// import ListButton from "./ListButton";
import NewsBox from "./NewsBox";
import theme from "@/Theme/theme";
import React, { useState, useEffect, SetStateAction } from "react"
import axios from 'axios'
import LoadingPage from "../Loading/LoadingPage";

const ListButtonStyle = styled.div`
  width: inherit;
  height: 50px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 450px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    /* background-color: yellow; */

    & > button {
      width: 35px;
      height: 35px;
      background-color: ${theme.mainCol};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: white;
      border-color: ${theme.mainCol}
    }
  }
`

const NewsContainer = styled.div`
width: inherit;
height: inherit;
/* background-color: white; */

& > div:nth-child(1) {
  margin : 5px 0 2rem 5px;
  font-size: 3rem;
  font-family: YANGJIN;
  color: black;
}
& > hr {
  border: 0.2rem solid ${theme.mainCol};
}
`
export interface newsdata {
  id: number,
  title: string,
  date: string,
  sumar: string
  news: string
}

function News() {
  const [newsData, setNewsData] = useState<any>([])

  const [listNum, setListNum] = useState(5)
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(false)


  const [buttonState, setButtonState] = useState(1)

  let Number: any[] = []
  const NumberMaker = function () {
    for (let i = listNum - 5; i < listNum; i++) {
      Number.push(i)
      if (Number.length === 5) {
        break
      }
    }
    return Number
  }

  useEffect(() => {
    NumberMaker()
    console.log(listNum)
    // console.log(click)
  }, [listNum])

  useEffect(() => {
    console.log(buttonState) // 이걸로 api 불러오기
  }, [buttonState])

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      await axios.get(`https://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=json&numOfRows=4&pageNo=${buttonState}`)
        .then(res => {
          let datavalue: any = []
          for (let i = 0; i < 4; i++) {

            let data = res.data.items
            let title = data[i].newsTitl
            let writeDate = data[i].newsWrtDt.split(' ')[0]
            let sumar = data[i].cntntSumar
            let news = data[i].newsBdt
            let value = { id: i, title: title, date: writeDate, sumar: sumar, news: news }
            datavalue[i] = value
          }
          setNewsData(datavalue)
        })
      setLoading(false)
    }
    getData()
  }, [buttonState])

  if (loading) {
    return (<LoadingPage></LoadingPage>)
  }

  if (!loading) {
    return (
      <>
        <NewsContainer>
          <div>시장 동향 소식.</div>
          <hr />
          {newsData.map((value: any, index: any) => {
            return (
              <NewsBox key={index} value={value}></NewsBox>
            )
          })}
          <ListButtonStyle>
            <div>
              <button onClick={() => {
                setListNum(5); setClick(!click)
              }}>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.01705 19.8864V18.75L15.1648 14.0909V15.9091L8.14773 19.2898L8.20455 19.1761V19.4602L8.14773 19.3466L15.1648 22.7273V24.5455L6.01705 19.8864ZM19.2006 19.8864V18.75L28.3484 14.0909V15.9091L21.3313 19.2898L21.3881 19.1761V19.4602L21.3313 19.3466L28.3484 22.7273V24.5455L19.2006 19.8864Z" fill="white" />
                </svg>
              </button>
              <button onClick={() => {
                if (listNum === 5) {
                } else {
                  setListNum(listNum - 5); setClick(!click)
                }
              }}>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0170455 5.88636V4.75L9.16477 0.0909088V1.90909L2.14773 5.28977L2.20455 5.17614V5.46023L2.14773 5.34659L9.16477 8.72727V10.5455L0.0170455 5.88636Z" fill="white" />
                </svg>
              </button>

              {NumberMaker().map((value, index) => {
                return (
                  <button key={index + 1} onClick={() => setButtonState(value + 1)}>{value + 1}</button>
                )
              })}

              <button onClick={() => {
                if (listNum === 500) {
                } else {
                  setListNum(listNum + 5); setClick(!click)
                }
              }}>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636Z" fill="white" />
                </svg>
              </button>
              <button onClick={() => {
                setListNum(500); setClick(!click)
              }}>
                <svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636ZM22.3484 5.88636L13.2006 10.5455V8.72727L20.2177 5.34659L20.1609 5.46023V5.17614L20.2177 5.28977L13.2006 1.90909V0.0909088L22.3484 4.75V5.88636Z" fill="white" />
                </svg>
              </button>

            </div>
          </ListButtonStyle>
        </NewsContainer>
      </>
    )
  }

}

export default News