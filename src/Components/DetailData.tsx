import  styled  from 'styled-components';
import  theme  from '@/Theme/theme';
import { dummyData } from './../Pages/Detail/Detail';

const DetailBox = styled.div`
&>p{
  height:80px;
  display:flex;
  align-items:center;
  font-size:3em;
  font-family: SCD-5;
}
`

const DetailData = ({data}: {data:dummyData}) => {
  return(
    <>
      <DetailBox>
        <p>{data.open}</p>
        <p>{data.high}</p>
        <p>{data.low}</p>
        <p>{data.close}</p>
        <p>{data.volume}</p>
      </DetailBox>
    </>
  )
}

export default DetailData;