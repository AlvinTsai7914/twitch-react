import styled from 'styled-components';
//轉換數字

import { $media_mobile } from '../constants/breakpoints';
import formatNum from '../constants/formatNum';
import moreIcon from '../../img/png/more.png';

const ThumbCardWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
  margin-bottom: 20px;
`;

const CardImage = styled.div`
  width: 100%;
  position: relative;

  & > div {
    position: absolute;
    width: 6px;
    height: 6px;
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

    & > img {
      transition-delay: 75ms;
      transition: all 0.2s ease;
      transform: translate(6px, -6px);
    }
  }

  & > img {
    width: 100%;
    cursor: pointer;
  }

  ::before {
    content: '';
    display: block;
    height: calc(100% - 4px);
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
`;
const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  width: 0;
  flex: 1;

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
    width: fit-content;
    color: #53535f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #a970ff;
    }
  }
  ${$media_mobile} {
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

  ${$media_mobile} {
    display: none;
  }
`;

export default function ThumbCard({ game }) {
  const { gameName, viewers, img } = game;

  return (
    <ThumbCardWrapper>
      <CardImage>
        <img src={img} alt=""></img>
        <div> </div>
      </CardImage>
      <CardContent>
        <CardInfo>
          <h3>{gameName}</h3>
          <p>{formatNum(viewers)} 觀眾人數</p>
          <CardLabels>
            <div>動作</div>
            <div>FPS</div>
            <div>刺激冒險</div>
          </CardLabels>
        </CardInfo>
        <ButtonMoreSmall>
          <img src={moreIcon} alt=""></img>
        </ButtonMoreSmall>
      </CardContent>
    </ThumbCardWrapper>
  );
}
