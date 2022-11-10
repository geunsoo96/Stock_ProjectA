import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Search = styled.div`
  width: 400px;
  height: 80px;
  position:relative;
  &>div{
    width:400px;
    height:auto;
    display:flex;
    flex-direction: column;
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
  p{
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
  ]

  const [search,setSearch] = useState("");
  const [clicked,setClicked] = useState(false);
  const onChange = (e:any) => {
    setSearch(e.target.value);
    setClicked(true);
  }

  const outFocus = () => {
    setClicked(false);
  }

  const filter = arr.filter((p)=>{
    return p.name.replace(" ","").toLocaleLowerCase().includes(search.replace(" ","").toLocaleLowerCase())
  })

  if(filter.length === 0){
    filter[0] = {name:'검색결과가 없습니다.',code:404}
  }

  return (
    <Search>
      <div>
        <Input placeholder="통합검색" type='text' onChange={onChange} onClick={onChange}/>
        {clicked &&
        <Div>
          {filter.map(value =>
            <Link to={`/Detail/${value.code}`}>
              <p onClick={outFocus}>{value.name}</p>
            </Link>
            )
          }
        </Div>
        }
      </div>
    </Search>
  );
};

export default SearchBox;