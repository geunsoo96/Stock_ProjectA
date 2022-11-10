import styled from "styled-components";
import ListButton from "./ListButton";
import NewsBox from "./NewsBox";
import theme from "@/Theme/theme";
import React, { useState, useEffect, SetStateAction } from "react"
import axios from 'axios'

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
  const [num, setNum] = useState<number>(4)

  useEffect(() => {
    const getData = async () => {
      await axios.get('https://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=xml&numOfRows=80&pageNo=1')
      .then(res => {
        let datavalue:any = []
        for (let i = 0; i < num; i++) {
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
      })}
      getData()
  }, [])

  return (
    <>
      <NewsContainer>
        <div>총 586 건의 주식 동향 소식이 있습니다.</div>
        <hr />
        {newsData.map((value:any, index:any) => {
          return (
            <NewsBox key={index} value={value}></NewsBox>
          )
        })}
        <ListButton ></ListButton>
      </NewsContainer>
    </>
  )
}

export default News