import styled from 'styled-components';

const Root = styled.div`
  width:inherit;
  height:inherit;
`
const Header = styled.div`
  width:1300px;
  height:60px;
`
const Main = styled.div`
  width:1300px;
  height:660px;
`

const Detail = () => {
  return (
    <Root>
      <Header></Header>
      <Main>
        <canvas></canvas>
        <div></div>
      </Main>
    </Root>
  );
};

export default Detail;
