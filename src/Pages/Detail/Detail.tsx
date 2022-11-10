import styled from 'styled-components';
import theme from "@/Theme/theme";
import DetailData from './DetailData';
import DetailHeader from './DetailHeader';
import { useParams } from 'react-router-dom';

const Root = styled.div`
  width:inherit;
  height:inherit;
`
const Main = styled.div`
  width:inherit;
  height:620px;
  display:flex;
`
const Canvas = styled.canvas`
  width:1000px;
  height:inherit;
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

const Detail = () => {
  const dummyData = [
    {
      name:'1사단',
      code:1001,
      open:6666,
      high:9999,
      low:1111,
      close:3333,
      volume:4444,
    },{
      name:'2사단',
      code:1002,
      open:6643466,
      high:549999,
      low:1521211,
      close:3423333,
      volume:4423444,
    },{
      name:'3사단',
      code:1003,
      open:66421366,
      high:9423999,
      low:111211,
      close:3432333,
      volume:4123444,
    },{
      name:'4사단',
      code:1004,
      open:6643266,
      high:91999,
      low:12311111,
      close:3436333,
      volume:447844,
    },{
      name:'5사단',
      code:1005,
      open:12,
      high:4444,
      low:1231,
      close:333,
      volume:484,
    },{
      name:'6사단',
      code:1006,
      open:9,
      high:99,
      low:11,
      close:33,
      volume:4,
    },{
      name:'7사단',
      code:1007,
      open:66,
      high:99,
      low:1,
      close:33,
      volume:444,
    },{
      name:'8사단',
      code:1008,
      open:663,
      high:999,
      low:77,
      close:333,
      volume:44,
    },
  ]
  let params = useParams();
  let code = Number(params.code);

  function isIndex(element:any){
    if(element.code === code){
      return true;
    }
  }

  const trueData : any = dummyData.find(isIndex);

  return (
    <Root>
      <DetailHeader data={trueData}></DetailHeader>
      <Main>
        <Canvas></Canvas>
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
            <DetailData data={trueData}></DetailData>
          </div>
        </Side>
      </Main>
    </Root>
  );
};

export default Detail;
