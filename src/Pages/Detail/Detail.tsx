import styled from 'styled-components';
import theme from "@/Theme/theme";
import DetailData from './DetailData';
import DetailHeader from './DetailHeader';
import DetailCanvas from './DetailCanvas';
import React, { useState, useEffect, SetStateAction } from "react"
import { resolvePath, useParams } from 'react-router-dom';
import LoadingPage from "../Loading/LoadingPage";

const Root = styled.div`
  width:inherit;
  height:inherit;
`
const Main = styled.div`
  width:inherit;
  height:620px;
  display:flex;
`
const Side = styled.div`
  width:300px;
  height:inherit;
&>div:nth-child(1){
  height:100px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  &>input{
    width:100px;
    height:50px;
    font-size:2em;
    font-family: SCD-5;
    border-radius:5px;
    &:hover{
      background-color: #ccc;
    }
  }
}
&>div:nth-child(2){
  width:inherit;
  height:520px;
  display:flex;
  background-color: #fff;
  border: 5px ${theme.mainCol} solid ;
  border-radius: 20px;
  &>div:nth-child(1){
    width:140px;
    &>p{
      margin-left: 20px;
      height:80px;
      display:flex;
      align-items:center;
      font-size:3em;
      font-family: SCD-5;
      color:${theme.lightBlack};
    }
  }
}
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
}

const Detail = () => {
  const [loading, setLoading] = useState(true)
  const [graphData,setGraphData] = useState()
  const [detailData,setDetailData] = useState()
  const [nameData,setNameData] = useState()

  let params = useParams();
  let code = params.code
  const data:any = {
    graph:[],
    max:0,
    min:0,
    minus:0
  }
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
      data.graph = graph;
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      detail.day = time_format(detail.day)
      setGraphData(data);
      setDetailData(detail);
      setLoading(false);
    })
    fetch(`http://127.0.0.1:5000/nameByCode/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      setNameData(res)
    })
  },[])

  const week = () => {
    fetch(`http://127.0.0.1:5000/code/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      const close:number[] = [];
      const graph = res.map((item:any)=>{
        close.push(item.close)
        return {
          "x": time_format(item.day),
          "y": item.close
        }
      })
      data.graph = graph.slice(0,5)
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      setGraphData(data);
    })
  }
  const month = () => {
    fetch(`http://127.0.0.1:5000/code/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      const close:number[] = [];
      const graph = res.map((item:any)=>{
        close.push(item.close)
        return {
          "x": time_format(item.day),
          "y": item.close
        }
      })
      data.graph = graph
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      setGraphData(data);
    })
  }

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
          <input type="button" value={'1주일'} onClick={week}/>
          <input type="button" value={'1개월'} onClick={month}/>
        </div>
        <div>
          <div>
            <p>시가</p>
            <p>고가</p>
            <p>저가</p>
            <p>종가</p>
            <p>거래량</p>
            <p></p>
          </div>
          <DetailData data={detailData}></DetailData>
        </div>
      </Side>
    </Main>
  </Root>
  );
}
};
export default Detail;
