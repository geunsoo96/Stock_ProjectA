import styled from "styled-components";
import theme from "@/Theme/theme";
import { trueData } from "@/Pages/Detail/Detail";

const DetailHeaderBox = styled.div`
  width:inherit;
  height:80px;
  border-bottom:5px ${theme.mainCol} solid;
  display:flex;
  align-items:flex-end;
  &>h1{
    font-size:5em;
    font-family: YANGJIN;
    color:${theme.lightBlack};
  }
  &>p{
    font-size:3em;
    font-family: SCD-7;
    color:${theme.lightBlack};
  }
`
// 
const DetailHeader = ({ data }: { data : trueData }) => {
  return (
    <>
      <DetailHeaderBox>
        <h1>{data.name}</h1>
        <p>{data.code}</p>
      </DetailHeaderBox>
    </>
  );
};

export default DetailHeader;
