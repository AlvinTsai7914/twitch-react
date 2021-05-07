//react hook 和 插件
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//modules 和 components
import ThumbCard from './ThumbCard';

//圖片
import downArrow from '../../img/png/down-arrow.png';

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
  margin-bottom: 10px;

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
export default function ThumbList({ game, streams }) {
  const [showMore, setShowMore] = useState(false);

  const filterStreams = streams.filter((stream) => {
    return stream.gameName === game.gameName;
  });

  const showFilterStreams = showMore ? filterStreams.slice(0, 6) : filterStreams.slice(0, 3);

  let key = 0;

  return (
    <ThumbListWrapper>
      {game !== undefined ? (
        <ThumbListTitle>
          推薦的 《<a href="@">{game.gameName}</a>》 頻道
        </ThumbListTitle>
      ) : (
        <ThumbListTitle>推薦的頻道</ThumbListTitle>
      )}

      <ThumbListContents>
        {showMore === false
          ? showFilterStreams.map((stream) => {
              return <ThumbCard key={key++} stream={stream}></ThumbCard>;
            })
          : showFilterStreams.map((stream) => {
              return <ThumbCard key={key++} stream={stream}></ThumbCard>;
            })}
      </ThumbListContents>
      <ThumbListFooter>
        {showMore ? null : (
          <>
            <div></div>
            <button
              onClick={() => {
                setShowMore(!showMore);
                console.log(showMore);
              }}
            >
              <p>顯示更多</p>
              <img src={downArrow} alt=""></img>
            </button>
          </>
        )}
        <div></div>
      </ThumbListFooter>
    </ThumbListWrapper>
  );
}
