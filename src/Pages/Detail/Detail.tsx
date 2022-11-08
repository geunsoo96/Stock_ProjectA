import styled from 'styled-components';
const Root = styled.div`
  width:inherit;
  height:inherit;
`
const Header = styled.div`
  width:inherit;
  height:80px;
  border-bottom:5px #4D4D4D solid;
  display:flex;
  align-items:flex-end;
  &>h1{
    font-size:5em;
  }
  &>p{
    font-size:3em;
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
  }
}
&>div:nth-child(2){
  width:inherit;
  height:520px;
  &>div{
    display:flex;
    height:80px;
    &>div:nth-child(1){
      width:120px;
      display:flex;
      align-items:center;
      font-size:3em;
    }
    &>div:nth-child(2){
      display:flex;
      align-items:center;
      font-size:3em;
    }
  }
}
`

const Detail = (props:any) => {
  return (
    <Root>
      <Header>
        <h1>주식명</h1>
        <p>123456</p>
      </Header>
      <Main>
        <Canvas></Canvas>
        <Side>
          <div>
            <input type="button" value={'1주일'}/>
            <input type="button" value={'1개월'}/>
          </div>
          <div>
            <div>
              <div>시가</div>
              <div>{props.value}</div>
            </div>
            <div>
              <div>고가</div>
              <div>{props.value}</div>
            </div>
            <div>
              <div>저가</div>
              <div>{props.value}</div>
            </div>
            <div>
              <div>종가</div>
              <div>{props.value}</div>
            </div>
            <div>
              <div>거래량</div>
              <div>{props.value}</div>
            </div>
          </div>
        </Side>
      </Main>
    </Root>
  );
};

export default Detail;
