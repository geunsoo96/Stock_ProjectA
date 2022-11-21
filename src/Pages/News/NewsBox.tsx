import theme from "@/Theme/theme"
import styled from "styled-components"
import { newsdata } from "./News"
import { useRef } from 'react'

const NewsBoxStyle = styled.div`
  width: inherit;
  height: 140px;
  /* background-color: cadetblue; */
  margin: 5px 0px 5px 0px;
  & > div:nth-child(1) {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* color: white; */
    /* background-color: cadetblue; */
    & > div:nth-child(1){
      width: inherit;
      /* background-color: blue; */
      font-size: 2.5rem;
      &:hover{
        cursor: pointer;
      }

    }
    & > div:nth-child(2){
      width: inherit;
      /* background-color: green; */
      font-size: 1.4rem;
    }
    & > div:nth-child(3){
      width: inherit;
      /* background-color: yellow; */
      font-size: 1.5rem;

    }
  }
  & > hr {
    border: 0;
    height: 1px;
    background: ${theme.mainCol};
  }
`


function NewsBox({value} : {value:newsdata}) {
  const printRef = useRef()
  // 새 탭으로 기사 열기
  // 본래 기사 페이지는 삭제 되었기 때문에
  // api 안에 있는 기사 body를 가지고 열기
  const newsData = () => {
    let printContent = printRef.current;
    let windowObj = window.open(
      '',
      'Print',
    );
    windowObj?.document.writeln(value.news);
  }
  return (
    <NewsBoxStyle>
      <div>
        <div onClick={newsData}>{value.title}</div>
        <div>{value.sumar}</div>
        <div>{value.date}</div>
      </div>
      <hr />
    </NewsBoxStyle>
  )
}

export default NewsBox