import { useState } from 'react';
import styled from 'styled-components';

import SideBarCard from './SideBarCard';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SideBarContentsWrapper = styled.div`
  height: calc(100% - 51px);
  width: 100%;
`;

const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 4px 0 0;
  & > h5 {
    height: 29px;
    width: 220px;
    padding-top: 6px;
    margin: 10px;
    font-weight: bold;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
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
`;

const SideBarContents = () => {
  const [followingState, setfFollowingState] = useState([
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
    { userId: 2, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '0' },
    { userId: 3, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '0' },
    { userId: 4, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '0' },
    { userId: 5, name: 'ANGRYPUG', game: 'Call of Duty: Warzone', status: 'offline', audience: '0' },
  ]);

  return (
    <SideBarContentsWrapper>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <SideBarSection>
          <h5>已追隨的頻道</h5>
          <div>
            {followingState.map((value) => (
              <SideBarCard key={value.userId} value={value} />
            ))}
          </div>
          <div className="more">
            <button>顯示更多</button>
          </div>
        </SideBarSection>
        <SideBarSection>
          <h5>推薦的頻道</h5>
          <div>
            {advicingState.map((value) => (
              <SideBarCard key={value.userId} value={value} />
            ))}
          </div>
          <div className="more">
            <button>顯示更多</button>
          </div>
        </SideBarSection>
        <SideBarSection>
          <h5>線上好友</h5>
          <div>
            {friendState.map((value) => (
              <SideBarCard key={value.userId} value={value} />
            ))}
          </div>
          <div className="more">
            <button>顯示更多</button>
          </div>
        </SideBarSection>
      </SimpleBar>
    </SideBarContentsWrapper>
  );
};

export default SideBarContents;
