import styled from 'styled-components';

import { $media_medium, $media_small } from '../../constants/breakpoints';
import esportImg from '../../../img/jpg/esport.jpg';
//替換滾動條
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const MainWrapper = styled.div`
  height: calc(100% - 50px);
  width: calc(100% - 240px);
  max-width: calc(100vw - 240px);
  position: fixed;
  left: 240px;
  background-color: #f7f7f8;
  z-index: 1;

  ${$media_medium} {
    width: calc(100% - 50px);
    max-width: calc(100% - 50px);
    left: 50px;
  }
`;

const MainInsideWrapper = styled.div`
  padding: 0 30px 30px 30px;
  & > img {
    width: 100%;
  }
  ${$media_small} {
    padding: 0 5px;
  }
`;

const Esport = () => {
  return (
    <MainWrapper>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <MainInsideWrapper>
          <img src={esportImg} alt=""></img>
        </MainInsideWrapper>
      </SimpleBar>
    </MainWrapper>
  );
};

export default Esport;
