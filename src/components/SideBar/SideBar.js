import styled from 'styled-components';

import SideBarContents from './SideBarContents';
import SideBarSearch from './SideBarSearch';
import { $media_medium } from '../constants/breakpoints';
const SideBarWrapper = styled.div`
  height: calc(100% - 51px);
  width: 240px;
  position: fixed;
  background-color: #efeff1;
  z-index: 2;

  ${$media_medium} {
    width: 50px;
  }
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarContents />
      <SideBarSearch />
    </SideBarWrapper>
  );
};

export default SideBar;
