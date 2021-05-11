import { useState } from 'react';
import styled from 'styled-components';

import { $media_medium, $media_small, $media_mobile } from '../constants/breakpoints';

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
  &:hover {
    transition-duration: 0.3s;
    transform: scale(1.2);
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
  &:after {
    content: '';
    display: ${(props) => (props.directory === '' ? 'none' : 'block')};
    position: absolute;
    background-color: #772ce8;
    height: 2px;
    width: ${(props) =>
      props.directory === 'following'
        ? '55px'
        : props.directory === 'directory'
        ? '38px'
        : props.directory === 'esports'
        ? '38px'
        : props.directory === 'music'
        ? '38px'
        : '0'};
    bottom: 0;
    left: ${(props) =>
      props.directory === 'following'
        ? '6%'
        : props.directory === 'directory'
        ? '35%'
        : props.directory === 'esports'
        ? '58.55%'
        : props.directory === 'music'
        ? '82.5%'
        : '0'};
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

const DirectAnchor = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: #9147ff;
    cursor: pointer;
  }

  ${$media_medium} {
    font-size: 14px;
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

export default function Direct() {
  const [directory, setDirectory] = useState('');
  const handleDirectoryClick = (direct) => {
    setDirectory(direct);
    console.log(directory);
  };

  return (
    <>
      <TwitchLogo>
        <img src={twitchLogo} alt=""></img>
      </TwitchLogo>
      <DirectButtonMobile>
        <img src={directSVG}></img>
      </DirectButtonMobile>
      <DirectBlock directory={directory}>
        <DirectButton>
          <DirectAnchor
            color={directory === 'following' ? '#772ce8' : '#0e0e10'}
            onClick={() => {
              handleDirectoryClick('following');
            }}
          >
            追隨中
          </DirectAnchor>
        </DirectButton>
        <DirectButton>
          <DirectAnchor
            color={directory === 'directory' ? '#772ce8' : '#0e0e10'}
            onClick={() => {
              handleDirectoryClick('directory');
            }}
          >
            瀏覽
          </DirectAnchor>
        </DirectButton>
        <MidLine></MidLine>
        <DirectButton>
          <DirectAnchor
            color={directory === 'esports' ? '#772ce8' : '#0e0e10'}
            onClick={() => {
              handleDirectoryClick('esports');
            }}
          >
            電競
          </DirectAnchor>
        </DirectButton>
        <DirectButton>
          <DirectAnchor
            color={directory === 'music' ? '#772ce8' : '#0e0e10'}
            onClick={() => {
              handleDirectoryClick('music');
            }}
          >
            音樂
          </DirectAnchor>
        </DirectButton>
      </DirectBlock>
    </>
  );
}
