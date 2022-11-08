import styled from "styled-components";
import { dummyData } from "../Pages/Detail/Detail";

const DetailHeaderBox = styled.div`
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

const DetailHeader = ({ data }: { data: dummyData }) => {
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
