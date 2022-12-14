import styled from "styled-components";
import theme from "@/Theme/theme";

const DetailHeaderBox = styled.div`
  width:inherit;
  height:80px;
  border-bottom:3px #ccc solid;
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
const DetailHeader = ({ data }: { data : any }) => {
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
