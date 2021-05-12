import styled from 'styled-components';

import { $media_medium, $media_small, $media_mobile } from '../constants/breakpoints';
//轉換數字
import formatNum from '../constants/formatNum';
import moreIcon from '../../img/png/more.png';

const ThumbCardWrapper = styled.li`
  flex: 1;
  max-width: 100%;
  width: 0;
  padding: 0 5px;
`;

const CardImage = styled.div`
  max-width: 100%;
  position: relative;

  & > a {
    & > img {
      max-width: 100%;
      cursor: pointer;
      flex: 1;
    }
  }
  ::before {
    content: '';
    display: block;
    height: 98%;
    width: 0px;
    background-color: #9147ff;
    position: absolute;
    top: -3px;
    transform: skewY(-45deg);
  }

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 0px;
    background-color: #9147ff;
    position: absolute;
    bottom: 4px;
    left: 3px;
    transform: skewX(-45deg);
  }

  & > div {
    position: absolute;
    width: 6px;
    height: 10px;
    background-color: #9147ff;
    bottom: 4px;
    z-index: -10;
  }
  :hover {
    ::before {
      transition-delay: 75ms;
      transition: all 0.2s ease;
      width: 6px;
    }

    ::after {
      transition-delay: 75ms;
      transition: all 0.2s ease;
      height: 7px;
    }

    & > a {
      & > * {
        transition-delay: 75ms;
        transition: all 0.2s ease;
        transform: translate(6px, -6px);
      }
    }
  }
`;

const StreamType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: red;
  top: 0;
  width: 45px;
  height: 24px;
  margin: 10px;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
  ${$media_mobile} {
    font-size: 12px;
    width: 32px;
    height: 18px;
    margin: 5px;
    border-radius: 4px;
  }
`;

const Viewers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 24px;
  margin: 10px;
  padding: 0 4px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  color: #fff;
  text-align: center;
  ${$media_mobile} {
    font-size: 12px;
    margin: 5px;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  & > img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 0;
  over-flow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > h3 {
    width: 100%;
    font-size: 16px;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #9147ff;
    }
  }

  & > p {
    height: 24px;
    color: #53535f;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #a970ff;
    }
  }
`;

const CardLabels = styled.div`
  display: flex;
  margin-top: 5px;
  flex-wrap: wrap;

  & > div {
    height: 24px;
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin: 0 5px 5px 0;
    padding: 0 8px;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const ButtonMoreSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > img {
    height: 14px;
    width: 16px;
  }
`;

export default function ThumbCard({ stream }) {
  const { gameName, logo, streamer, preview, status, url, viewers } = stream;
  return (
    <ThumbCardWrapper>
      <CardImage>
        <a href={url}>
          <img src={preview} alt=""></img>
          <StreamType>LIVE</StreamType>
          <Viewers>觀眾人數: {formatNum(viewers)}</Viewers>
        </a>
        <div></div>
      </CardImage>
      <CardContent>
        <img src={logo} alt=""></img>
        <CardInfo>
          <h3>{status}</h3>
          <p>{streamer}</p>
          <p>{gameName}</p>
          <CardLabels>
            <div>中文</div>
          </CardLabels>
        </CardInfo>
        <ButtonMoreSmall>
          <img src={moreIcon} alt=""></img>
        </ButtonMoreSmall>
      </CardContent>
    </ThumbCardWrapper>
  );
}
