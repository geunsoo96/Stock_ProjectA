import  styled  from 'styled-components';
import theme from '@/Theme/theme';

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
  height:80px;
  display:flex;
  align-items:flex-end;
  font-size:16px;
  font-family: SCD-5;
  color:${theme.lightBlack};
}
`

const DetailData = ({data}: { data : any }) => {
  return(
    <>
      <DetailBox>
        <p>{data.open}</p>
        <p>{data.high}</p>
        <p>{data.low}</p>
        <p>{data.close}</p>
        <p>{data.volume}</p>
        <h1>{data.day} 기준</h1>
      </DetailBox>
    </>
  )
}

export default DetailData;