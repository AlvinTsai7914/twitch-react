import { useState } from 'react';
import styled from 'styled-components';

import searchIcon16 from '../img/png/loupe16.png';
import cross from '../img/svg/fi-br-cross-small.svg';

const SearchRelatvie = styled.div`
  flex-flow: column||wrap;
  height: fit-content;
  padding: 0 5px 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.showTemp === true ? '0 6px 16px rgb(0 0 0 / 19%), 0 0 4px rgb(0 0 0 / 25%);' : 'none'};
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  height: 36px;
  width: 355px;
  padding: 5px 10px;
  background-color: #e5e5e5;
  border: 0;
  border-radius: 6px 0 0 6px;
  &:hover {
    border: 1px #9147ff grey;
  }
  &:focus {
    outline: none;
    border: 2px #9147ff solid;
    background-color: white;
  }
`;

const ClearInput = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 12%;
  cursor: pointer;
`;
const SearchButton = styled.button`
  background-color: #f9f9f9;
  border: none;
  margin-left: 1px;
  width: 36px;
  height: 36px;
  border-radius: 0 6px 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 18px;
    opacity: ${(props) => (props.showTemp === true ? '1' : '0.2')};
  }
`;

const SearchList = styled.ul`
  margin: -2px 0 0 0;
`;

const SearchItem = styled.li`
  list-style: none;
  height: 40px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  &:hover {
    background-color: #e5e5e5;
  }
`;
const SearchIcon = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 16px;
  }
`;
const SearchName = styled.p``;

export default function Search() {
  const [value, setValue] = useState('');
  const [showTemp, setShowTemp] = useState();
  return (
    <SearchRelatvie showTemp={showTemp}>
      <SearchWrapper>
        <SearchInput
          placeholder={'搜尋'}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            e.target.value === '' ? setShowTemp(false) : setShowTemp(true);
          }}
          onFocus={(e) => {
            e.target.value === '' ? setShowTemp(false) : setShowTemp(true);
          }}
          onBlur={() => {
            setShowTemp(false);
          }}
        ></SearchInput>
        {value !== '' ? (
          <ClearInput
            onClick={() => {
              setValue('');
            }}
          >
            <img src={cross} alt=""></img>
          </ClearInput>
        ) : null}
        <SearchButton showTemp={showTemp}>
          <img src={searchIcon16} alt=""></img>
        </SearchButton>
      </SearchWrapper>
      <SearchList>
        {showTemp === true ? (
          <SearchItem>
            <SearchIcon>
              <img src={searchIcon16} alt=""></img>
            </SearchIcon>
            <SearchName>前往 {value}</SearchName>
          </SearchItem>
        ) : null}
      </SearchList>
    </SearchRelatvie>
  );
}
