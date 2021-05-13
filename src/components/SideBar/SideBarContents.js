import { useState } from 'react';
import styled from 'styled-components';

import SideBarCard from './SideBarCard';
import { $media_medium, $media_small, $media_mobile } from '../constants/breakpoints';
//圖片
import followIcon from '../../img/svg/fi-br-heart.svg';
import adviceIcon from '../../img/svg/fi-br-video-camera.svg';
import friendIcon from '../../img/svg/fi-br-users.svg';
//替換滾動條
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SideBarContentsWrapper = styled.div`
  height: calc(100% - 51px);
  width: 100%;
  align-items: center;
  justify-content: center;

  ${$media_medium} {
    height: calc(100%);
  }
`;

const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transform: height;
  padding: 0 10px 0 5px;
  transition: all 3s ease;

  & > h5 {
    height: 29px;
    width: 220px;
    padding-top: 6px;
    margin: 10px;
    font-weight: bold;
  }

  & > img {
    display: none;
  }
  & > .more {
    height: 37px;
    width: 100%;
    padding: 5px 10px;
    justify-content: center;
    & > button {
      line-height: 1;
      border: none;
      color: #772ce8;
      cursor: pointer;
    }
  }

  ${$media_medium} {
    padding: 0;
    & > h5 {
      display: none;
    }
    & > img {
      display: flex;
      width: 18px;
      margin: 10px;
    }

    & > .more {
      display: none;
    }
  }
`;

const SideBarSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SideBarContents = () => {
  const [followingSlice, setFollowingSlice] = useState(true);
  const [followingState, setfFollowingState] = useState([
    { userId: 1, name: '凱蛇 (kaizersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 2, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '11,111' },
    { userId: 3, name: 'iiTzTimmy', game: 'Apex Legends', status: 'online', audience: '6,178' },
    { userId: 4, name: 'Moonryde', game: 'Call of Duty: Warzone', status: 'online', audience: '5,593' },
    { userId: 5, name: 'Symfuhny', game: 'Leage of Legends', status: 'online', audience: '3,067' },
    { userId: 1, name: '凱蛇 (kaizersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 2, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '11,111' },
    { userId: 3, name: 'iiTzTimmy', game: 'Apex Legends', status: 'online', audience: '6,178' },
    { userId: 4, name: 'Moonryde', game: 'Call of Duty: Warzone', status: 'online', audience: '5,593' },
    { userId: 5, name: 'Symfuhny', game: 'Leage of Legends', status: 'online', audience: '3,067' },
    { userId: 1, name: '凱蛇 (kaizersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 2, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '11,111' },
    { userId: 3, name: 'iiTzTimmy', game: 'Apex Legends', status: 'online', audience: '6,178' },
    { userId: 4, name: 'Moonryde', game: 'Call of Duty: Warzone', status: 'online', audience: '5,593' },
    { userId: 5, name: 'Symfuhny', game: 'Leage of Legends', status: 'online', audience: '3,067' },
  ]);

  const [advicingState, setAdvicingState] = useState([
    { userId: 1, name: '凱蛇 (kaizersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 2, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '0' },
    { userId: 3, name: 'iiTzTimmy', game: 'Apex Legends', status: 'online', audience: '6,178' },
    { userId: 4, name: 'Moonryde', game: 'Call of Duty: Warzone', status: 'online', audience: '5,593' },
    { userId: 5, name: 'Symfuhny', game: 'Leage of Legends', status: 'online', audience: '3,067' },
    { userId: 6, name: 'stormen', game: 'Minecraft', status: 'online', audience: '3,142' },
  ]);

  const [friendState, setFriendState] = useState([
    { userId: 1, name: '凱蛇 (kaizersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 2, name: '魯蛇 (luzersjr)', game: 'Apex Legends', status: 'online', audience: '1565' },
    { userId: 3, name: '眼鏡蛇 (glasseszersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 4, name: '響尾蛇 (ringthetailzersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
    { userId: 5, name: '瞎雞巴蛇 (XGBzersjr)', game: 'Apex Legends', status: 'online', audience: '145' },
  ]);

  return (
    <SideBarContentsWrapper>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <SideBarSection>
          <h5>已追隨的頻道</h5>
          <img src={followIcon} alt=""></img>
          <SideBarSectionContent>
            {followingSlice
              ? followingState.slice(0, 5).map((value) => <SideBarCard key={value.userId} value={value} />)
              : followingState.map((value) => <SideBarCard key={value.userId} value={value} />)}
          </SideBarSectionContent>
          <div className="more">
            <button
              onClick={() => {
                console.log(followingSlice);
                setFollowingSlice(!followingSlice);
              }}
            >
              顯示更{followingSlice ? '多' : '少'}
            </button>
          </div>
        </SideBarSection>
        <SideBarSection>
          <h5>推薦的頻道</h5>
          <img src={adviceIcon} alt=""></img>
          <SideBarSectionContent>
            {advicingState.map((value) => (
              <SideBarCard key={value.userId} value={value} />
            ))}
          </SideBarSectionContent>
          <div className="more">
            <button>顯示更多</button>
          </div>
        </SideBarSection>
        <SideBarSection>
          <h5>線上好友</h5>
          <img src={friendIcon} alt=""></img>
          <SideBarSectionContent>
            {friendState.map((value) => (
              <SideBarCard key={value.userId} value={value} />
            ))}
          </SideBarSectionContent>
          <div className="more">
            <button>顯示更多</button>
          </div>
        </SideBarSection>
      </SimpleBar>
    </SideBarContentsWrapper>
  );
};

export default SideBarContents;
