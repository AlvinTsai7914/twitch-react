import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

const SideBar = styled.div``;

const MainPage = styled.div``;

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <SideBar></SideBar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
