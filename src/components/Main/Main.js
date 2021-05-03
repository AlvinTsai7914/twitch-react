import { useState } from 'react';
import styled from 'styled-components';
import ThumbList from './ThumbList';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const MainWrapper = styled.div`
  height: 100%;
  width: calc(100vw - 240px);
  position: fixed;
  left: 240px;
  top: 50px;
  background-color: #f7f7f8;
  z-index: 1;
  overflow: hidden;
`;

const MainInsideWrapper = styled.div`
  padding: 0 30px;
`;

const Main = () => {
  const [games, setGames] = useState([
    { name: 'Apex Legends' },
    { name: 'League of Legends' },
    { name: 'NieR Replicant Ver.1.22474487139...' },
  ]);

  var key = 0;
  return (
    <MainWrapper>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <MainInsideWrapper>
          <ThumbList></ThumbList>
          {games.map((game) => (
            <ThumbList key={key++} game={game}></ThumbList>
          ))}
        </MainInsideWrapper>
      </SimpleBar>
    </MainWrapper>
  );
};

export default Main;
