import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

const Content = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  margin-top: 50px;
`;

function App() {
  return (
    <>
      <Header />
      <Content>
        <SideBar />
        <Main />
      </Content>
    </>
  );
}

export default App;
