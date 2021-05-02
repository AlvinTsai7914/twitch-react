import styled from 'styled-components';
import ThumbList from './ThumbList';

const MainWrapper = styled.div`
  height: 100%;
  width: calc(100vw - 240px);
  position: relative;
  left: 240px;
  top: 0px;
  background-color: #f7f7f8;
  z-index: 1;
  padding: 0 30px;
`;

const Main = () => {
  return (
    <MainWrapper>
      <ThumbList></ThumbList>
      <ThumbList></ThumbList>
      <ThumbList></ThumbList>
    </MainWrapper>
  );
};

export default Main;
