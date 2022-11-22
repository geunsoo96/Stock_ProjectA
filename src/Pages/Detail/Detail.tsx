import styled from 'styled-components';
import DetailData from './DetailData';
import DetailHeader from './DetailHeader';
import DetailCanvas from './DetailCanvas';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import LoadingPage from "../Loading/LoadingPage";
const Root = styled.div`
  width:inherit;
  height:inherit;
`//디테일 페이지 전체박스 스타일
const Main = styled.div`
  width:inherit;
  height:620px;
  display:flex;
`//디테일 페이지 메인부분 스타일
const Side = styled.div`
  width:300px;
  height:inherit;
  &>div:nth-child(1){
    height:100px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    &>input{
      width:80px;
      height:50px;
      font-size:2em;
      font-family: SCD-5;
      border-radius:5px;
      &:hover{
        background-color: #ccc;
      }
    }
  }//사이드 1주일,1개월,1년 버튼 스타일
  &>div:nth-child(2){
    width:inherit;
    height:520px;
    display:flex;
    background-color: #fff;
    border: 3px #ccc solid ;
    border-radius: 20px;
  }// 사이드 시가,고가,저가 등 박스 스타일
`

const time_format = (time:string) => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return(
    `${year}-${month >= 10 ? month : "0" + month}-${
      day >= 10 ? day : "0" + day
    }`
  )
}// "Fri, 28 Jan 2022 00:00:00 GMT" 이런식으로 들어오는 day값을 "2022-01-28"으로 변경.

const Detail = () => {
  const [loading, setLoading] = useState(true)
  const [graphData,setGraphData] = useState()
  const [detailData,setDetailData] = useState()
  const [nameData,setNameData] = useState()
  let params = useParams();
  let code = params.code
  //URL 뒤쪽의 변수 가져오기
  const data:any = {
    graph:[],
    max:0,
    min:0,
    minus:0
  }//하위컴포넌트(DetailCanvas)로 보낼 데이터
  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/code/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      const close:number[] = [];
      const detail = res[0]
      const graph = res.map((item:any)=>{
        close.push(item.close)
        return {
          "x": time_format(item.day),
          "y": item.close
        }
      })
      //가져온 데이터로 x축은 시간, y축은 종가인 객체들로 배열생성
      data.graph = graph;
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      detail.day = time_format(detail.day)
      const chai = (res[0].close/res[1].close) - 1
      detail.chai = chai;
      setGraphData(data);//DetailCanvas 데이터
      setDetailData(detail);//DetailData 데이터
      setLoading(false);//loading
    })
    fetch(`http://127.0.0.1:5000/nameByCode/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      setNameData(res)
    })// 이름 데이터 불러오기
  },[])

  const button = (number:number) => {
    fetch(`http://127.0.0.1:5000/code/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      let close:number[] = [];
      const graph = res.map((item:any)=>{
        close.push(item.close)
        return {
          "x": time_format(item.day),
          "y": item.close
        }
      })
      data.graph = graph.slice(0,number)
      close = close.slice(0,number)
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      setGraphData(data);
    })
  }// 실행하면 매개변수 number만큼 자른 그래프 표시

  if(loading){
    return (<LoadingPage></LoadingPage>)
  }
  if(!loading){
    return (
      <Root>
    <DetailHeader data={nameData}></DetailHeader>
    <Main>
      <DetailCanvas data={graphData}></DetailCanvas>
      <Side>
        <div>
          <input type="button" value={'1주일'} onClick={()=>button(6)}/>
          <input type="button" value={'1개월'} onClick={()=>button(21)}/>
          <input type="button" value={'1년'} onClick={()=>button(250)}/>
        </div>
        <div>
          <DetailData data={detailData}></DetailData>
        </div>
      </Side>
    </Main>
  </Root>
  );
}
};
export default Detail;







