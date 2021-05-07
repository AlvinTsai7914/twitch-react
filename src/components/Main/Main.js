import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getTopGames, getStreamsByGame } from '../../WebAPI';
import ThumbList from './ThumbList';
import ThumbListDirect from './ThumbListDirect';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const MainWrapper = styled.div`
  height: calc(100% - 50px);
  width: calc(100vw - 240px);
  position: fixed;
  left: 240px;
  top: 50px;
  background-color: #f7f7f8;
  z-index: 1;
  overflow: hidden;
  padding-bottom: 50px;
`;

const MainInsideWrapper = styled.div`
  padding: 0 30px;
`;

const Main = () => {
  const [topGames, setTopGames] = useState([]);
  const [streamsByGame, setStreamsByGame] = useState([]);
  //抓前10熱門遊戲

  useEffect(() => {
    getTopGames()
      .then((data) => {
        data.top.map((game) =>
          setTopGames((topGames) => [
            ...topGames,
            { gameName: game.game.name, img: game.game.box.large, viewers: game.viewers },
          ])
        );
        data.top.map((game) =>
          getStreamsByGame(game.game.name)
            .then((data) =>
              data.streams.map((stream) =>
                setStreamsByGame((StreamsByGame) => [
                  ...StreamsByGame,
                  {
                    gameName: stream.game,
                    streamer: stream.channel.name,
                    viewers: stream.viewers,
                    stream_type: stream.channel.stream_type,
                    url: stream.channel.url,
                    status: stream.channel.status,
                    preview: stream.preview.large,
                    logo: stream.channel.logo,
                  },
                ])
              )
            )
            .catch((err) => console.log(err))
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <MainWrapper>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <MainInsideWrapper>
          <ThumbList game={topGames[0]} streams={streamsByGame}></ThumbList>
          <ThumbListDirect topGames={topGames} />
          <ThumbList game={topGames[1]} streams={streamsByGame}></ThumbList>
          <ThumbList game={topGames[2]} streams={streamsByGame}></ThumbList>
          <ThumbList game={topGames[3]} streams={streamsByGame}></ThumbList>
        </MainInsideWrapper>
      </SimpleBar>
    </MainWrapper>
  );
};

export default Main;
