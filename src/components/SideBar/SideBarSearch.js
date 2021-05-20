import styled from 'styled-components';
import { useState } from 'react';
import searchIcon from '../../img/svg/fi-br-search.svg';
import cross from '../../img/svg/fi-br-cross-small.svg';
import { $media_medium } from '../constants/breakpoints';
const SideBarSearchWrapper = styled.div`
  width: 240px;
  height: 51px;
  border-top: 1px solid #d7d7d8;
  position: fixed;
  bottom: 0;
  padding: 10px;
  background-color: #efeff1;

  & > input {
    width: 100%;
    height: 100%;
    background-color: #d7d7d8;
    border-radius: 4px;
    border: 2px #d7d7d8 solid;
    padding: 5px 10px 5px 30px;
    color: black;
    transition: background-color 0.1s ease;
    transition: border 0.2s ease;
    ::placeholder {
      color: #000000ba;
    }

    &:hover {
      transition: border 0.2s ease;
      border: 2px #ccc solid;
    }

    &:focus {
      transition: background-color 0.2s ease;
      transition: border 0.1s ease;
      outline: none;
      border: 2px #9147ff solid;
      background-color: white;
    }
  }
  ${$media_medium} {
    display: none;
  }
`;

const SideBarSearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  & > img {
    width: 15.5px;
  }
`;

const ClearInput = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const SideBarSearch = () => {
  const [value, setValue] = useState('');

  return (
    <SideBarSearchWrapper>
      <SideBarSearchIcon>
        <img src={searchIcon} alt=""></img>
      </SideBarSearchIcon>
      <input
        placeholder="搜尋以新增好友"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <ClearInput
        onClick={() => {
          setValue('');
        }}
      >
        <img src={cross} alt=""></img>
      </ClearInput>
    </SideBarSearchWrapper>
  );
};

export default SideBarSearch;
