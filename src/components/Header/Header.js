import { useState } from 'react';
import styled from 'styled-components';

import Direct from './Direct';
import Search from './Search';
import { $media_medium, $media_small, $media_mobile } from '../constants/breakpoints';
import { SearchInput } from './Search';

import userIcon from '../../img/png/dog.png';
import messageIcon from '../../img/svg/fi-br-comment-alt.svg';
import crownIcon from '../../img/svg/fi-br-crown.svg';
import noticeIcon from '../../img/svg/fi-br-inbox.svg';
import chiPointIcon from '../../img/svg/fi-br-flip-horizontal.svg';
import searchIcon from '../../img/svg/fi-br-search.svg';

const Nav = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0px 1px 3px #d4d4d4;
  display: flex;
  justify-content: space-between;
  padding: 0 0px;
  box-sizing: border-box;
  z-index: 100;
  background-color: white;
`;
//左中右區塊
const NavBlockLeft = styled.div`
  max-width: 33.3%;
  min-width: 325px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${$media_mobile} {
    min-width: fit-content;
  }
`;
const NavBlockMid = styled.div`
  max-width: 33.3%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;
const NavBlockRight = styled.div`
  max-width: 33.3%;
  min-width: 245px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${$media_mobile} {
    min-width: fit-content;
  }
`;

const CoreButton = styled.button`
  height: 30px;
  width: 30px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > img {
    height: 16px;
  }

  ${$media_mobile} {
    display: none;
  }
`;

const CoreButtonSearch = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin: 0 8px;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > img {
    width: 16px;
  }

  ${$media_small} {
    display: flex;
  }

  ${$media_mobile} {
    & > img {
      width: 18px;
    }
  }
`;

const MoreIcon = styled.div`
  height: 100%;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  border-radius: 4px;
`;

//搜索區塊

const BuyPointButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 5px 10px 5px 5px;
  font-size: 8px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  background-color: #f2f2f2;
  margin-left: 5px;
  &:hover {
    background-color: #e5e5e5;
  }

  & > div {
    display: block;
    letter-spacing: 0px;
    font-size: 12px;
  }

  & > img {
    width: 14px;
    margin: 8px;
  }

  @media screen and (max-width: 1200px) {
    height: 30px;
    width: 30px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    & > img {
      height: 16px;
    }

    & > div {
      display: none;
    }
  }

  ${$media_mobile} {
    display: none;
  }
`;
const UserIcon = styled.div`
  width: 35px;
  height: 35px;
  margin: 0 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 30px;
  }
`;

const SearchWrapperRWD = styled.div`
  width: 400px;
  height: 100px;
  position: absolute;
  top: 90%;
  right: 6%;
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), 0 0px 4px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  const [showTemp, setShowTemp] = useState();
  return (
    <Nav>
      <NavBlockLeft>
        <Direct />

        <CoreButton>
          <MoreIcon>...</MoreIcon>
        </CoreButton>
      </NavBlockLeft>

      <NavBlockMid>
        <Search showTemp={showTemp} setShowTemp={setShowTemp}></Search>
      </NavBlockMid>

      <NavBlockRight>
        <CoreButtonSearch onClick={() => {}}>
          <img src={searchIcon} alt=""></img>
        </CoreButtonSearch>
        <CoreButton>
          <img src={crownIcon} alt=""></img>
        </CoreButton>
        <CoreButton>
          <img src={noticeIcon} alt=""></img>
        </CoreButton>
        <CoreButton>
          <img src={messageIcon} alt=""></img>
        </CoreButton>
        <BuyPointButton>
          <img src={chiPointIcon} alt=""></img>
          <div>購買小奇點</div>
        </BuyPointButton>
        <UserIcon>
          <img src={userIcon} alt=""></img>
        </UserIcon>
      </NavBlockRight>
    </Nav>
  );
};

export default Header;
