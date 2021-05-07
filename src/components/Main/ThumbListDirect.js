import React from 'react';
import styled from 'styled-components';

import ThumbCardDirect from './ThumbCardDirect';

const ThumbListWrapper = styled.div`
  width: 100%;
  diplay: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
`;
const ThumbListTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;

  & > a {
    color: #772ce8;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
const ThumbListContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbListFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  & > button {
    min-width: 109px;
    height: 30px;
    color: #772ce8;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    & > p {
      margin-right: 5px;
    }
    & > img {
      width: 12px;
    }
  }

  & > div {
    height: 1px;
    width: 100%;
    flow-shrink: 1;
    background-color: #dededf;
  }
`;
export default function ThumbList({ topGames }) {
  let i = 0;
  return (
    <ThumbListWrapper>
      <ThumbListTitle>您可能會喜歡的分類</ThumbListTitle>

      <ThumbListContents>
        {topGames.map((game) => (
          <ThumbCardDirect key={i++} game={game} />
        ))}
      </ThumbListContents>
      <ThumbListFooter>
        <div></div>
      </ThumbListFooter>
    </ThumbListWrapper>
  );
}
