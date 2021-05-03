import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 50px;
  display: flex;
  over-flox: hidden;
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content>
        <SideBar></SideBar>
        <Main></Main>
      </Content>
    </div>
  );
}

export default App;
