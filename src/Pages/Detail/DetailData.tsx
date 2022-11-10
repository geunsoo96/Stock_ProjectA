import  styled  from 'styled-components';
import { trueData } from "@/Pages/Detail/Detail";
import theme from '@/Theme/theme';

const DetailBox = styled.div`
&>p{
  height:80px;
  display:flex;
  align-items:center;
  font-size:3em;
  font-family: SCD-5;
  color:${theme.lightBlack};
}
`

const DetailData = ({data}: { data : trueData }) => {
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