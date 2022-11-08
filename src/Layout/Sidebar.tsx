import StockItem from '@/Components/StockItem';
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
background-color: rgba(255,255,255,0.3);
&>div{
    font-size: 3.5rem;
    font-family: SCD-7;
}
`

const StockBox = styled.div`
margin-top: 5px;
width: 95%;
height: 90%;
gap: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

export interface dummyData {
name:string,
price:number,
yesterday:number,    
}

const Sidebar = () => {

    const dummyData = [
        {name:'1사단',price:216000,yesterday:14800},
        {name:'2사단',price:26000,yesterday:8800},
        {name:'3사단',price:2470000,yesterday:1194800},
        {name:'4사단',price:266000,yesterday:194800},
        {name:'5사단',price:446000,yesterday:194800},
        {name:'6사단',price:386000,yesterday:194800},
        {name:'7사단',price:926000,yesterday:194800},
        {name:'8사단',price:196000,yesterday:94800},
        {name:'9사단',price:116000,yesterday:83600},
        {name:'10사단',price:163000,yesterday:144800},
            ]           

    return(<>
    <SidebarBox>
    <div>거래량 TOP 10</div>
    <StockBox>
        {dummyData.map((value,index)=>{
            return <StockItem key={index} data={value}></StockItem>
        })}
    </StockBox>
    </SidebarBox>
    </>)


}

export default Sidebar;