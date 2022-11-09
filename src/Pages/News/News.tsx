import Header from "@/Layout/Header";
import styled from "styled-components";
import ListButton from "./ListButton";
import NewsBox from "./NewsBox";
import theme from "@/Theme/theme";

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
export interface dummyList {
  id: string,
  text: string,
  date: number
}

const dummyList = [
  {id:'1사단 주식 대박 예정', text: '주식이 쭉쭉 오르고 있어요. 이거 한 번 보세요. 추천드립니다. 지금 구입 하시면 몇 퍼센트나 오를지 몰라요. 이번 주식 대박대박. Lorem Lorem 차차차차. 일간 주간 월간 데이터 표시 중. 테스트. stock_projecta. slack | kdt-project-a-1 | recently viewed - Figma | hahaha ', date: 221108},
  {id:'1사단 주식 대박 예정', text: '주식이 쭉쭉 오르고 있어요. 이거 한 번 보세요. 추천드립니다. 지금 구입 하시면 몇 퍼센트나 오를지 몰라요. 이번 주식 대박대박. Lorem Lorem 차차차차. 일간 주간 월간 데이터 표시 중. 테스트. stock_projecta. slack | kdt-project-a-1 | recently viewed - Figma | hahaha ', date: 221109},
  {id:'1사단 주식 대박 예정', text: '주식이 쭉쭉 오르고 있어요. 이거 한 번 보세요. 추천드립니다. 지금 구입 하시면 몇 퍼센트나 오를지 몰라요. 이번 주식 대박대박. Lorem Lorem 차차차차. 일간 주간 월간 데이터 표시 중. 테스트. stock_projecta. slack | kdt-project-a-1 | recently viewed - Figma | hahaha ', date: 221110},
  {id:'1사단 주식 대박 예정', text: '주식이 쭉쭉 오르고 있어요. 이거 한 번 보세요. 추천드립니다. 지금 구입 하시면 몇 퍼센트나 오를지 몰라요. 이번 주식 대박대박. Lorem Lorem 차차차차. 일간 주간 월간 데이터 표시 중. 테스트. stock_projecta. slack | kdt-project-a-1 | recently viewed - Figma | hahaha ', date: 221111},
]
// https://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=xml&numOfRows=1&pageNo=1

const xhr = new XMLHttpRequest();
for(let i = 1 ; i < 81 ; i ++){
  const url = 'http://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews'; /*URL*/
  let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D'; /*Service Key*/
  queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(`${i}`); /**/
    // queryParams += '&' + encodeURIComponent('search1') + '=' + encodeURIComponent('베트남'); /**/
    // queryParams += '&' + encodeURIComponent('search2') + '=' + encodeURIComponent('축구'); /**/
    // queryParams += '&' + encodeURIComponent('search3') + '=' + encodeURIComponent('홍길동'); /**/
    // queryParams += '&' + encodeURIComponent('search4') + '=' + encodeURIComponent('20180101'); /**/
    // queryParams += '&' + encodeURIComponent('search5') + '=' + encodeURIComponent('식약품'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            // console.log(this.responseXML?.documentElement.textContent);
            let apiText = this.responseXML?.documentElement
            // let parseXML = new DOMParser();
            // let xmlDoc = parseXML.parseFromString(apiText, 'text/xml')
            // let value = xmlDoc.getElementsByTagName("name")[0].textContent; console.log(value);
            // console.log(xmlDoc)
            console.log(apiText)
            let title = apiText?.querySelector("newsTitl data")?.innerHTML
            let writeDate = apiText?.querySelector("newsWrtDt data")?.innerHTML.split(' ')[0]
            let sumar = apiText?.querySelector("cntntSumar data")?.innerHTML
            console.log(title)
            console.dir(writeDate)
            console.dir(sumar)
            // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
            let arr = new Array()
            arr.push({title: title, writeDate: writeDate, sumar: sumar})
            console.log(arr)
            return arr
        }
    };
  }
  xhr.send('');



function News() {
  return (
    <>
      <NewsContainer>
        <div>총 586 건의 주식 동향 소식이 있습니다.</div>
        <hr />
          {dummyList.map((value, index) => {
            return(
              <NewsBox key={index} data={value}></NewsBox>
            )
          })}
        <ListButton></ListButton>
      </NewsContainer>
    </>
  )
}

export default News