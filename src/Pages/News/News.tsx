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
}
& > hr {
  border: 0.1rem solid ${theme.mainCol};
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