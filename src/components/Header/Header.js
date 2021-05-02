import styled from 'styled-components';

import Direct from './Direct';
import Search from './Search';

import userIcon from '../../img/png/dog.png';
import twitchLogo from '../../img/png/twitch-logo.png';
import messageIcon from '../../img/svg/fi-rr-comment-alt.svg';
import crownIcon from '../../img/svg/fi-rr-crown.svg';
import noticeIcon from '../../img/svg/fi-rr-inbox.svg';
import chiPointIcon from '../../img/svg/fi-rr-flip-horizontal.svg';

const TwitchLogo = styled.div`
  height: 40px;
  width: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 24px;
  }
  &:hover {
    transition-duration: 0.3s;
    transform: scale(1.2);
  }
`;
const Nav = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  box-shadow: 0px 1px 3px #d4d4d4;
  display: flex;
  justify-content: column;
  padding: 0 0px;
  box-sizing: border-box;
  z-index: 1000;
  background-color: white;
`;
//左中右區塊
const NavBlockLeft = styled.div`
  max-width: 33.3%;
  flex-grow: 1;
  display: flex;
  align-items: center;
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
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > .Nav_R {
    margin: 0 5px;
  }
`;

const CoreButton = styled.button`
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
    height: 16px;
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

const Header = () => {
  return (
    <Nav>
      <NavBlockLeft>
        <TwitchLogo>
          <img src={twitchLogo} alt=""></img>
        </TwitchLogo>
        <Direct />
        <div>
          <CoreButton>
            <MoreIcon>...</MoreIcon>
          </CoreButton>
        </div>
      </NavBlockLeft>

      <NavBlockMid>
        <Search></Search>
      </NavBlockMid>

      <NavBlockRight>
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
