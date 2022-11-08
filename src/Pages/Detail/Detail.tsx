import styled from 'styled-components';
import DetailData from '@/Components/DetailData';
import DetailHeader from '@/Components/DetailHeader';
const Root = styled.div`
  width:inherit;
  height:inherit;
`
const Header = styled.div`
  width:inherit;
  height:80px;
  border-bottom:5px #222 solid;
  display:flex;
  align-items:flex-end;
  &>h1{
    font-size:5em;
    font-family: YANGJIN;
    color:#333;
  }
  &>p{
    font-size:3em;
    font-family: SCD-7;
    color:#333;
  }
`
const Main = styled.div`
  width:inherit;
  height:620px;
  display:flex;
`
const Canvas = styled.canvas`
  width:1000px;
  height:inherit;
  border:1px solid black;
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
  &>div:nth-child(1){
    width:120px;
    &>p{
      height:80px;
      display:flex;
      align-items:center;
      font-size:3em;
      font-family: SCD-5;
    }
  }
}
`
export interface dummyData {
  name:string,
  code:number,
  open:number,
  high:number,
  low:number,
  close:number,
  volume:number,
}

const Detail = () => {

  const dummyData = {
    name:'1사단',
    code:123456,
    open:6666,
    high:9999,
    low:1111,
    close:3333,
    volume:4444,
  }

  return (
    <Root>
      <DetailHeader data={dummyData}></DetailHeader>
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
            </div>
            <DetailData data={dummyData}></DetailData>
          </div>
        </Side>
      </Main>
    </Root>
  );
};

export default Detail;
