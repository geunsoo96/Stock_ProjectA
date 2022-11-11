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
  margin-bottom : 2rem;
  font-size: 3rem;
  font-family: YANGJIN;
  color: greenyellow
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
}

function News() {
  const [newsData, setNewsData] = useState<any>([/* {title: '', date:'', sumar: ''} */])

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

  // console.log(ListButton().props.children.props.children[1][0].key)
  // console.log(ListButton())

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      await axios.get('https://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=xml&numOfRows=80&pageNo=1')
        .then(res => {
          let datavalue: any = []
          let findkey = buttonState *4
          for (let i = findkey-4 ; i < findkey; i++) {
            let data = res.request.responseXML
            let item = data.getElementsByTagName("item")
            let title = item[i].querySelector('newsTitl data').innerHTML
            let writeDate = item[i].querySelector('newsWrtDt data')?.innerHTML.split(' ')[0]
            let sumar = item[i].querySelector('cntntSumar data').innerHTML
            let value = { id: i, title: title, date: writeDate, sumar: sumar }
            datavalue[i] = value
          }
          console.log(datavalue)
          setNewsData(datavalue)
        })
      setLoading(false)
    }
    getData()
  }, [buttonState])

  // console.log(ListButton().props.children.props.children)

  if(loading){
    return (<LoadingPage></LoadingPage>)
  }
  
  if(!loading){
    return (
    <>
      <NewsContainer>
        <div>총 80 건의 시장 동향 소식이 있습니다.</div>
        <hr />
        {newsData.map((value: any, index: any) => {
          return (
            <NewsBox key={index} value={value}></NewsBox>
          )
        })}
        <ListButtonStyle>
          <div>

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
              if (listNum === 10) {
              } else {
                setListNum(listNum + 5); setClick(!click)
              }
            }}>
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636Z" fill="white" />
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