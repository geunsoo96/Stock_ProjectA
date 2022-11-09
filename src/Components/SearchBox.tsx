import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

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
  background-color: rgba(0,0,0,0.7);
  width:400px;
  margin-top: 10px;
  border-radius: 10px;
  z-index:3;
  div{
    padding:10px;
    font-size: 30px;
  }
`

const SearchBox = () => {
  const arr = [
    {name:'1사단',code:1001},
    {name:'2사단',code:1002},
    {name:'3사단',code:1003},
    {name:'4사단',code:1004},
    {name:'5사단',code:1005},
    {name:'6사단',code:1006},
    {name:'7사단',code:1007},
    {name:'8사단',code:1008},
  ]

  const [search,setSearch] = useState("");
  const [clicked,setClicked] = useState(false);
  const onChange = (e:any) => {
    setSearch(e.target.value);
    setClicked(true);
  }

  const outFocus = () => {
    setTimeout(() => {
      setClicked(false);
    }, 100);
  }

  const filter = arr.filter((p)=>{
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
          {filter.map((item) =>
            <Link to={`/Detail/${item.code}`}>
              <div key={item.code} onClick={outFocus}>{item.name}</div>
            </Link>
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