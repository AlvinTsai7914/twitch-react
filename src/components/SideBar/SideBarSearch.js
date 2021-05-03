import styled from 'styled-components';

import searchIcon16 from '../../img/png/loupe16.png';

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
`;

const SideBarSearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  & > img {
    width: 15.5px;
  }
`;

const SideBarSearch = () => {
  return (
    <SideBarSearchWrapper>
      <SideBarSearchIcon>
        <img src={searchIcon16}></img>
      </SideBarSearchIcon>
      <input placeholder="搜尋以新增好友"></input>
    </SideBarSearchWrapper>
  );
};

export default SideBarSearch;
