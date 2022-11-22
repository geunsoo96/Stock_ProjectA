import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

//?flex 인터페이스
interface flex {
  direction: string;
  justify: string;
  align: string;
}
//?애니메이션 인터페이스
interface animation {
  duration: string;
  delay: string;
}

//?사이즈 인터페이스
interface size {
  width: string;
  height: string;
}

//!애니메이션  함수
export const animation = (animation: animation) => css`
  animation-duration: ${animation.duration};
  animation-delay: ${animation.delay};
`;
//!플렉스 함수
export const flexCenter = (flex: flex) => css`
  display: flex;
  flex-direction: ${flex.direction};
  justify-content: ${flex.justify};
  align-items: ${flex.align};
`;
//!사이즈 함수
export const size = (size: size) => css`
  width: ${size.width};
  height: ${size.height};
`;

const Main = styled.div`
  ${size({ width: '100%', height: '100%' })}
  ${flexCenter({ direction: 'row', justify: 'center', align: 'center' })}
`;

const Container = styled.div`
  ${flexCenter({ direction: 'row', justify: 'center', align: 'center' })}
  ${size({ width: '700px', height: '680px' })}
  flex-direction: column;
  background-color: white;
  gap: 30px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px rgba(254, 172, 49, 1);
`;

//중앙 이미지
const Center = styled.div`
  ${size({ width: '300px', height: '300px' })}
  background-image: url("/img/prog.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
`;

const Coin = styled.div`
  border-radius: 50%;
  display: flex;
  position: relative;
  & > div {
    ${size({ width: '70px', height: '70px' })}
    border-radius: 50%;
    background-image: url('/img/coin.jpg');
    background-position: 50% 50%;
    background-size: 130px;
    background-repeat: no-repeat;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: top;
    position: relative;
    bottom: 0;
    opacity: 0;
  }
  //div 하나씩 딜레이와 지속시간 지정
  & > div:nth-child(1) {
    ${animation({ duration: '.6s', delay: '.2s' })}
  }
  & > div:nth-child(2) {
    ${animation({ duration: '.6s', delay: '.4s' })}
  }
  & > div:nth-child(3) {
    ${animation({ duration: '.6s', delay: '.6s' })}
  }
  & > div:nth-child(4) {
    ${animation({ duration: '.6s', delay: '.8s' })}
  }
  & > div:nth-child(5) {
    ${animation({ duration: '.6s', delay: '1s' })}
  }

  @keyframes top {
    0% {
      bottom: 60px;
      opacity: 0.1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      bottom: 0px;
      opacity: 1;
    }
  }
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: YANGJIN;
  animation-name: op;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 0.6s;
  opacity: 1;
  @keyframes op {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const LoadingPage = () => {
  return (
    <Main>
      <Container>
        <Coin>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Coin>
        <Center />
        <Text>LOADING...</Text>
      </Container>
    </Main>
  );
};
export default LoadingPage;
