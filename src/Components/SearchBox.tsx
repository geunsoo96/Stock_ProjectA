import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import theme from "@/Theme/theme";

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
  const arr = [
    {
    "code": "000810",
    "name": "삼성화재"
    },
    {
    "code": "000815",
    "name": "삼성화재우"
    },
    {
    "code": "001360",
    "name": "삼성제약"
    },
    {
    "code": "005930",
    "name": "삼성전자"
    },
    {
    "code": "005935",
    "name": "삼성전자우"
    },
    {
    "code": "006400",
    "name": "삼성SDI"
    },
    {
    "code": "006405",
    "name": "삼성SDI우"
    },
    {
    "code": "006660",
    "name": "삼성공조"
    },
    {
    "code": "009150",
    "name": "삼성전기"
    },
    {
    "code": "009155",
    "name": "삼성전기우"
    },
    {
    "code": "010140",
    "name": "삼성중공업"
    },
    {
    "code": "010145",
    "name": "삼성중공우"
    }
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
    }, 200);
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