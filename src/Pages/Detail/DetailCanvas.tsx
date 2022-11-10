import styled from 'styled-components';

const Canvas = styled.canvas`
width:1000px;
height:inherit;
`
const DetailCanvas = () => {
  return (
    <Canvas id="canvas"/>
  );
};

export default DetailCanvas;