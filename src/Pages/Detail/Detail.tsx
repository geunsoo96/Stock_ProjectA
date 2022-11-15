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
export interface trueData {
  name:string,
  code:number,
  open:number,
  high:number,
  low:number,
  close:number,
  volume:number,
}
export interface realData {
  close: number,
  day: string,
  high: number,
  low: number,
  no: number,
  open: number,
  volume: number,
}

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

  let params = useParams();
  let code = Number(params.code)
  const trueData = {
    name:'1사단',
    code:1001,
    open:6666,
    high:9999,
    low:1111,
    close:3333,
    volume:4444,
  }
  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/code/${code}`)
    .then((res)=>res.json())
    .then((res:any)=>{
      const close:number[] = [];
      const detail = res[res.length-1]
      const data:any = {
        graph:[],
        max:0,
        min:0,
        minus:0
      }
      data.graph = res.map((item:any)=>{
        close.push(item.close)
        return {
          "x": time_format(item.day),
          "y": item.close
        }
      })
      let max = Math.max(...close);
      let min = Math.min(...close);
      let minus = max - min;
      data.max = max+(minus*0.1);
      data.min = min-(minus*0.1);
      data.minus = data.max - data.min;
      setGraphData(data);
      setDetailData(detail);
      setLoading(false);
    })
  },[])

  if(loading){
    return (<LoadingPage></LoadingPage>)
  }

  if(!loading){
    return (
      <Root>
    <DetailHeader data={trueData}></DetailHeader>
    <Main>
      <DetailCanvas data={graphData}></DetailCanvas>
      <Side>
        <div>
          <input type="button" value={'1주일'}/>
          <input type="button" value={'1개월'}/>
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
