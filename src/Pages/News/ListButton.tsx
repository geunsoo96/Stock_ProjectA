// import theme from "@/Theme/theme"
// import { useEffect, useState } from "react"
// import styled from "styled-components"

// const ListButtonStyle = styled.div`
//   width: inherit;
//   height: 50px;
//   /* background-color: greenyellow; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   & > div {
//     width: 450px;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     /* background-color: yellow; */

//     & > button {
//       width: 35px;
//       height: 35px;
//       background-color: ${theme.mainCol};
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 2rem;
//       color: white;
//       border-color: ${theme.mainCol}
//     }
//   }
// `
// console.log(ListButton)

// function ListButton() {

//   const[listNum, setListNum] = useState(5)
//   const[click, setClick] = useState(false)


//   const[buttonState, setButtonState] = useState(1)

//   let Number:any[] = []
//   const NumberMaker = function(){
//       for(let i = listNum-5 ; i < listNum ; i++){
//         Number.push(i)
//         if(Number.length === 5){
//           break
//         }
//       }
//       return Number
//     }
    
//     useEffect(() => {
//       NumberMaker()
//       console.log(listNum)
//       // console.log(click)
//     }, [listNum])

//   useEffect(() => {
//     console.log(buttonState) // 이걸로 api 불러오기
//   }, [buttonState])


//   return (
//     <ListButtonStyle>
//       <div>

//         <button onClick={() => {
//           if (listNum === 5) {
//           } else {
//             setListNum(listNum - 5); setClick(!click)
//           }
//         }}>
//           <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0.0170455 5.88636V4.75L9.16477 0.0909088V1.90909L2.14773 5.28977L2.20455 5.17614V5.46023L2.14773 5.34659L9.16477 8.72727V10.5455L0.0170455 5.88636Z" fill="white" />
//           </svg>
//         </button>


//         {NumberMaker().map((value, index) => {
//           return (
//             <button key={index + 1} onClick={() => setButtonState(value + 1)}>{value + 1}</button>
//           )
//         })}

//         <button onClick={() => {
//           if (listNum === 10) {
//           } else {
//             setListNum(listNum + 5); setClick(!click)
//           }
//         }}>
//           <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M9.16477 5.88636L0.0170455 10.5455V8.72727L7.03409 5.34659L6.97727 5.46023V5.17614L7.03409 5.28977L0.0170455 1.90909V0.0909088L9.16477 4.75V5.88636Z" fill="white" />
//           </svg>
//         </button>

//       </div>
//     </ListButtonStyle>
//   )
// }

// export default ListButton