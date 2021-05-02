import styled from 'styled-components';

import moreIcon from '../../img/png/more.png';

const ThumbCardWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
`;

const CardImage = styled.div`
  width: 100%;

  :hover {
    transform: translate(px, -2px);
    transition: all 0.2s ease-in-out;
  }
  & > img {
    width: 100%;
    cursor: pointer;
    :hover {
      transform: translate(px, -2px);
      transition: all 0.2s ease-in-out;
    }
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
  width: 100%;
  flow: 1;

  & > h3 {
    width: fit-content;
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

export default function ThumbCard() {
  return (
    <ThumbCardWrapper>
      <CardImage>
        <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_zrush-440x248.jpg"></img>
        <div></div>
        <div></div>
      </CardImage>
      <CardContent>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/0c4ee176-07e4-4345-921f-9e47de50cab4-profile_image-50x50.png"></img>
        <CardInfo>
          <h3>【聶寶】聯盟戰棋讚啦</h3>
          <p>聶寶 (nielnieh345)</p>
          <p>Teamfight Tactics</p>
          <CardLabels>
            <div>中文</div>
          </CardLabels>
        </CardInfo>
        <ButtonMoreSmall>
          <img src={moreIcon}></img>
        </ButtonMoreSmall>
      </CardContent>
    </ThumbCardWrapper>
  );
}
