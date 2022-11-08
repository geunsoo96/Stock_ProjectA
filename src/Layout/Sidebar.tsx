import theme from '@/Theme/theme';
import styled from 'styled-components';

const SidebarBox = styled.div`
width: 350px;
height: 700px;
border-radius: 20px;
border: 5px solid ${theme.mainCol};
display: flex;
flex-direction: column;
align-items: center;
&>div{
    font-size: 3.5rem;
    font-family: SCD-7;
    
}
`

const Sidebar = () => {

    return(<>
    <SidebarBox>
    <div>거래량 TOP 10</div>
    </SidebarBox>
    </>)


}

export default Sidebar;