import { useState } from 'react';
import styled from 'styled-components';

const DirectBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  height: 100%;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.directory === '' ? 'none' : 'block')};
    position: absolute;
    background-color: #772ce8;
    height: 2px;
    width: ${(props) =>
      props.directory === 'following'
        ? '55px'
        : props.directory === 'directory'
        ? '38px'
        : props.directory === 'esports'
        ? '38px'
        : props.directory === 'music'
        ? '38px'
        : '0'};
    bottom: 0;
    left: ${(props) =>
      props.directory === 'following'
        ? '6%'
        : props.directory === 'directory'
        ? '35%'
        : props.directory === 'esports'
        ? '58.55%'
        : props.directory === 'music'
        ? '82.5%'
        : '0'};
  }
`;

const DirectButton = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

const DirectAnchor = styled.div`
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover {
    color: #9147ff;
    cursor: pointer;
  }
`;

const MidLine = styled.div`
  width: 1px;
  height: 30px;
  background-color: #e5e5e5;
`;

export default function Direct() {
  const [directory, setDirectory] = useState('');
  const handleDirectoryClick = (direct) => {
    setDirectory(direct);
    console.log(directory);
  };

  return (
    <DirectBlock directory={directory}>
      <DirectButton>
        <DirectAnchor
          color={directory === 'following' ? '#772ce8' : '#0e0e10'}
          onClick={() => {
            handleDirectoryClick('following');
          }}
        >
          追隨中
        </DirectAnchor>
      </DirectButton>
      <DirectButton>
        <DirectAnchor
          color={directory === 'directory' ? '#772ce8' : '#0e0e10'}
          onClick={() => {
            handleDirectoryClick('directory');
          }}
        >
          瀏覽
        </DirectAnchor>
      </DirectButton>
      <MidLine></MidLine>
      <DirectButton>
        <DirectAnchor
          color={directory === 'esports' ? '#772ce8' : '#0e0e10'}
          onClick={() => {
            handleDirectoryClick('esports');
          }}
        >
          電競
        </DirectAnchor>
      </DirectButton>
      <DirectButton>
        <DirectAnchor
          color={directory === 'music' ? '#772ce8' : '#0e0e10'}
          onClick={() => {
            handleDirectoryClick('music');
          }}
        >
          音樂
        </DirectAnchor>
      </DirectButton>
    </DirectBlock>
  );
}
