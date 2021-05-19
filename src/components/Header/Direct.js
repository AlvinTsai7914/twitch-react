import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { $media_medium, $media_mobile } from '../constants/breakpoints';
import { hover } from '../constants/styles';
import directSVG from '../../img/svg/fi-br-direct.svg';
import twitchLogo from '../../img/png/twitch-logo.png';
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
  ${hover} {
    &:hover {
      transition-duration: 0.3s;
      transform: scale(1.2);
    }
  }

  ${$media_mobile} {
    & > img {
      width: 28px;
    }
  }
`;

const DirectBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  height: 100%;
  position: relative;
  font-size: 18px;

  ${$media_medium} {
    font-size: 14px;
  }
  ${$media_mobile} {
    display: none;
  }
`;

const DirectButton = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  ${$media_medium} {
    margin: 0 10px;
  }
`;

const DirectAnchor = styled.div`
  & > a {
    color: ${(props) => props.color};
    font-weight: bold;
    text-decoration: none;
  }
  ${hover} {
    &:hover {
      color: #9147ff;
      cursor: pointer;
    }
  }
`;

const MidLine = styled.div`
  width: 1px;
  height: 30px;
  background-color: #e5e5e5;
`;

const DirectButtonMobile = styled.div`
  margin: 0 20px;
  display: none;
  align-items: center;

  & > img {
    height: 18px;
    width: 18px;
    transform: rotate(180deg) scale(0.9, 1);
  }
  ${$media_mobile} {
    display: flex;
  }
`;

const BottomLineWrapper = styled.div`
  position: absolute;
  height: 2px;
  background-color: #772ce8;
  bottom: 0;
  transition: all 0.5s ease;
  width: ${({ bottomLine }) => `calc(${bottomLine.offsetLeft}px + ${bottomLine.textLenght}em)`};
  &:before {
    position: absolute;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    height: 2px;
    width: ${({ bottomLine }) => `${bottomLine.offsetLeft}px`};
    background-color: white;
    transition: all 0.5s ease;
  }
`;

export default function Direct() {
  const [directory, setDirectory] = useState('');
  const [bottomLine, setBottomLine] = useState({});

  const handleDirectClick = (offsetLeft, textLenght, directory) => {
    setDirectory(directory);
    setBottomLine({
      offsetLeft,
      textLenght,
    });
  };

  return (
    <>
      <TwitchLogo>
        <Link to="/">
          <img src={twitchLogo} alt=""></img>
        </Link>
      </TwitchLogo>
      <DirectButtonMobile>
        <img src={directSVG} alt=""></img>
      </DirectButtonMobile>
      <DirectBlock>
        <DirectButton>
          <DirectAnchor
            color={directory === 'following' ? '#772ce8' : '#0e0e10'}
            onClick={(e) => {
              handleDirectClick(e.target.offsetLeft, e.target.innerText.length, 'following');
            }}
          >
            <Link to="/following">追隨中</Link>
          </DirectAnchor>
        </DirectButton>
        <DirectButton>
          <DirectAnchor
            color={directory === 'directory' ? '#772ce8' : '#0e0e10'}
            onClick={(e) => {
              handleDirectClick(e.target.offsetLeft, e.target.innerText.length, 'directory');
            }}
          >
            <Link to="/directory">瀏覽 </Link>
          </DirectAnchor>
        </DirectButton>
        <MidLine></MidLine>
        <DirectButton>
          <DirectAnchor
            color={directory === 'esports' ? '#772ce8' : '#0e0e10'}
            onClick={(e) => {
              handleDirectClick(e.target.offsetLeft, e.target.innerText.length, 'esports');
            }}
          >
            <Link to="/esport">電競</Link>
          </DirectAnchor>
        </DirectButton>
        <DirectButton>
          <DirectAnchor
            color={directory === 'music' ? '#772ce8' : '#0e0e10'}
            onClick={(e) => {
              handleDirectClick(e.target.offsetLeft, e.target.innerText.length, 'music');
            }}
          >
            <Link to="/music">音樂</Link>
          </DirectAnchor>
        </DirectButton>
        <BottomLineWrapper bottomLine={bottomLine}></BottomLineWrapper>
      </DirectBlock>
    </>
  );
}
