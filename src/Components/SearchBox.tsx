import styled from 'styled-components';
import theme from '@/Theme/theme';
import React, { useState, useEffect, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

const Search = styled.div`
  width: 400px;
  height: 80px;
  & > div:nth-child(1) {
    width: 400px;
    display: flex;
    flex-direction: column;
    z-index: 3;
  }
`;
const Input = styled.input`
  width: 400px;
  height: 80px;
  font-size: 2.5rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding-left: 20px;
`;
const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 400px;
  margin-top: 10px;
  border-radius: 10px;
  z-index: 3;
  overflow: hidden;
  div {
    padding: 10px;
    font-size: 30px;
    font-family: 'SCD-5';
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: ${theme.mainCol};
      cursor: pointer;
    }
  }
`;
const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const arr: any = [];
  const [searchData, setSearchData] = useState(arr);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/allName`)
      .then((res) => res.json())
      .then((res: any) => {
        setSearchData(res);
      });
  }, []);
  //모든 회사 데이터 가져오기.
  const onChange = (e: any) => {
    setSearch(e.target.value);
    setClicked(true);
  };
  // 검색창에 값을 입력할때 실행되는 함수. 검색창에 적힌 값을 가져오면서 clicked를 true로 해서 검색목록 표시
  const outFocus = () => {
    setTimeout(() => {
      setClicked(false);
    }, 200);
  };
  //검색창 이외의 공간 클릭시 실행되는 함수. 0.2초 후에 clicked를 false로 해서 검색목록 닫기.딜레이가 없으면 검색결과를 클릭해도 이동보다 먼저 검색창이 닫혀서 클릭이 불가능.
  const filter = searchData.filter((p: any) => {
    return p.name.replace(' ', '').toLocaleLowerCase().includes(search.replace(' ', '').toLocaleLowerCase());
  });
  // 모든 회사의 데이터와 검색창에 적힌 값 비교 후 포함되는것만 배열화
  const filter10 = filter.slice(0, 10);
  //filter배열 10개로 자르기
  if (filter.length === 0) {
    return (
      <Search>
        <div onBlur={outFocus}>
          <Input placeholder="통합검색" type="text" onChange={onChange} onClick={onChange} />
          {clicked && (
            <Div>
              <div onClick={outFocus}>검색결과가 없습니다.</div>
            </Div>
          )}
        </div>
      </Search>
    );
    //filter에 값이 없으면 "검색결과가 없습니다." 표시
  } else {
    return (
      <Search>
        <div onBlur={outFocus}>
          <Input placeholder="통합검색" type="text" onChange={onChange} onClick={onChange} />
          {clicked && (
            <Div>
              {filter10.map((item: any) => (
                <Link key={item.code} to={`/Detail/${item.code}`}>
                  <div onClick={outFocus}>{item.name}</div>
                </Link>
              ))}
            </Div>
          )}
        </div>
      </Search>
    );
  }
};
export default SearchBox;
