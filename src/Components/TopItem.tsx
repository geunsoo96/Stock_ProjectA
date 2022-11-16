import { TopdummyData } from './../Pages/Top/Top';
import styled from 'styled-components';

const ItemBox = styled.div`
  & > div {
    width: 110px;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: 'scd-5';
    font-weight: bold;
  }
`;

const TopItem = ({ data }: { data: TopdummyData }) => {
  return (
    <>
      <ItemBox>
        <div>{data.type}</div>
        <div>{data.value.toLocaleString()}</div>
      </ItemBox>
    </>
  );
};

export default TopItem;
