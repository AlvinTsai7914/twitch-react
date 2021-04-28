import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: calc(100vw - 240px);
  position: relative;
  left: 240px;
  top: 0px;
  background-color: white;
  z-index: 1;
`;

const Main = () => {
  return <MainWrapper></MainWrapper>;
};

export default Main;
