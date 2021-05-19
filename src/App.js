import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Following from './components/Main/following/Following';
import Directory from './components/Main/directory/Directory';
import Esport from './components/Main/esport/Esport';
import Music from './components/Main/music/Music';

const Content = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  margin-top: 50px;
`;

function App() {
  return (
    <Router>
      <Header />
      <Content>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/esport">
            <Esport />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
