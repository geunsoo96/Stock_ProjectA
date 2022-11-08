import theme from '@/Theme/theme';
import styled  from 'styled-components';

const TopBox = styled.div`
width: inherit;
height: inherit;
background-color: rgba(222,100,1,0.8)
`

const Top = () => {

    return(
        <TopBox>
            <div>
            <div>오늘의 TOP 거래 주식</div>
            <div>
            <div>1사단</div>
            <div>348769</div>
            </div>
            <hr></hr>
            </div>
        </TopBox>)
}

export default Top;