import styled from "styled-components";
import theme from "@/Theme/theme";
import React, { useState, useEffect, SetStateAction } from "react"

const Search = styled.div`
  width: 400px;
  height: 80px;
  &>div:nth-child(1){
    width:400px;
    display:flex;
    flex-direction: column;
    z-index:3;
  }
`
const Input = styled.input`
  width: 400px;
  height: 80px;
  font-size: 2.5rem;
  font-weight: bold;
  border-radius: 10px;
  padding-left: 20px;
`
const Div = styled.div`
  background-color: rgba(0,0,0,0.8);
  width:400px;
  margin-top: 10px;
  border-radius: 10px;
  z-index:3;
  div{
    padding:10px;
    font-size: 30px;
    font-family: 'SCD-5';
    &:hover{
      background-color: rgba(0,0,0,0.3);
      color: ${theme.mainCol};
      cursor: pointer;
    }
  }
  `

const SearchBox = () => {
  const [search,setSearch] = useState("");
  const [clicked,setClicked] = useState(false);
  const arr : any = [];
  const [searchData,setSearchData] = useState(arr);
  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/allName`)
    .then((res)=>res.json())
    .then((res:any)=>{
      setSearchData(res);
    })
  },[])

  const onChange = (e:any) => {
    setSearch(e.target.value);
    setClicked(true);
  }

  const outFocus = () => {
    setTimeout(() => {
      setClicked(false);
    }, 200);
  }

  const filter = searchData.filter((p : any)=>{
    return p.name.replace(" ","").toLocaleLowerCase().includes(search.replace(" ","").toLocaleLowerCase())
  })

  if(filter.length === 0){
    return (
      <Search>
        <div tabIndex={0} onBlur={outFocus}>
          <Input placeholder="통합검색" type='text' onChange={onChange} onClick={onChange}/>
          {clicked &&
          <Div>
            <div onClick={outFocus}>검색결과가 없습니다.</div>
          </Div>
          }
        </div>
      </Search>
    );
  } else {
    return (
      <Search>
      <div onBlur={outFocus}>
        <Input placeholder="통합검색" type='text' onChange={onChange} onClick={onChange}/>
        {clicked &&
        <Div>
          {filter.map((item:any) =>
            <a key={item.code}href={`/Detail/${item.code}`}>
              <div onClick={outFocus}>{item.name}</div>
            </a>
            )
          }
        </Div>
        }
      </div>
    </Search>
    );
  }
};

export default SearchBox;