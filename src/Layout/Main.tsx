import Sidebar from "@/Layout/Sidebar"
import Header from "@/Layout/Header"
import styled from 'styled-components'
import {Outlet} from 'react-router-dom'

const MainBox = styled.div`
margin-top: 40px;
width: 1800px;
height: 750px;
align-items: center;
justify-content: center;
gap: 100px;
display: flex;
`

const MainItem = styled.div`
width: 1300px;
height: 700px;
background-color: gray;
`

const Main = () => {

    return(<>
    <Header></Header>
    <MainBox>
    <MainItem>
    <Outlet/>
    </MainItem>
    <Sidebar></Sidebar>
    </MainBox>
    </>)
}

export default Main