import theme from "@/Theme/theme"
import styled from "styled-components"

const ListButtonStyle = styled.div`
  width: inherit;
  height: 50px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 450px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    /* background-color: yellow; */
    
    & > div {
      width: 35px;
      height: 35px;
      background-color: ${theme.mainCol};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: white;
    }
  }
`
const dummyNumberMaker = function(){
  let dummyNumber = []
  for(let i = 1 ; i < 10 ; i++){
    dummyNumber.push(i)
    if(dummyNumber.length === 5){
      break
    }
  }
  return dummyNumber
}


function ListButton() {
  return (
    <ListButtonStyle>
      <div>
        <div>
          <svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0170455 5.88636V4.75L9.16477 0.0909088V1.90909L2.14773 5.28977L2.20455 5.17614V5.46023L2.14773 5.34659L9.16477 8.72727V10.5455L0.0170455 5.88636ZM13.2006 5.88636V4.75L22.3484 0.0909088V1.90909L15.3313 5.28977L15.3881 5.17614V5.46023L15.3313 5.34659L22.3484 8.72727V10.5455L13.2006 5.88636Z" fill="white" />
          </svg>
        </div>
        <div>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0170455 5.88636V4.75L9.16477 0.0909088V1.90909L2.14773 5.28977L2.20455 5.17614V5.46023L2.14773 5.34659L9.16477 8.72727V10.5455L0.0170455 5.88636Z" fill="white" />
          </svg>
        </div>

        {dummyNumberMaker().map((value) => {
          return(
            <div>{value}</div>
          )
        })}

        <div>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636Z" fill="white" />
          </svg>
        </div>
        <div>
          <svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636ZM22.3484 5.88636L13.2006 10.5455V8.72727L20.2177 5.34659L20.1609 5.46023V5.17614L20.2177 5.28977L13.2006 1.90909V0.0909088L22.3484 4.75V5.88636Z" fill="white" />
          </svg>
        </div>
        
      </div>
    </ListButtonStyle>
  )
}

export default ListButton