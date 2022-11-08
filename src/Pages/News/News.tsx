import Header from "@/Layout/Header";
import styled from "styled-components";

const NewsBox = styled.div`
  & > div {
    font-size: 3rem;
    font-family: YANGJIN;
  }
`


function News() {
  return (
    <>
      <NewsBox>
        <div>news</div>
      </NewsBox>
    </>
  )
}

export default News