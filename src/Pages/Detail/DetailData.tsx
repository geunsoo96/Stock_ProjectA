import  styled  from 'styled-components';
import theme from '@/Theme/theme';


const Div = styled.div`
  width:120px;
    &>p{
      margin-left: 20px;
      height:80px;
      display:flex;
      align-items:center;
      font-size:3em;
      font-family: SCD-5;
      color:${theme.lightBlack};
    }
`

const DetailBox = styled.div`
&>p{
  height:80px;
  display:flex;
  justify-content: flex-end;
  align-items:center;
  font-size:3em;
  font-family: SCD-5;
  color:${theme.lightBlack};
}
&>h1{
  height:50px;
  display:flex;
  align-items:flex-end;
  font-size:16px;
  font-family: SCD-5;
  color:${theme.lightBlack};
}
`

const DetailData = ({data}: { data : any }) => {
  const percent = data.chai*100
  let color = 'black'
  let text = '-'
  if(percent<0){
    color = 'blue'
    text = '▼'
  }else if(percent>0){
    color = 'red'
    text = '▲'
  }
  // 가져온 데이터(chai)의 값에 따라서 color와 text 변경.
  return(
    <>
      <Div>
        <p>시가</p>
        <p>고가</p>
        <p>저가</p>
        <p>종가</p>
        <p>거래량</p>
      </Div>
      <DetailBox>
        <p>{data.open}</p>
        <p>{data.high}</p>
        <p>{data.low}</p>
        <p>{data.close}</p>
        <p>{data.volume}</p>
        <h1 style={{color}}>전날 대비 {percent.toFixed(2)}% {text}</h1>
        <h1>{data.day} 기준</h1>
      </DetailBox>
    </>
  )
}

export default DetailData;