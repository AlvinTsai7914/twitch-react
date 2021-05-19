import { useState } from 'react';
import styled from 'styled-components';

import searchIcon from '../../img/svg/fi-br-search.svg';
import cross from '../../img/svg/fi-br-cross-small.svg';
import { $media_small } from '../constants/breakpoints';
import { hover } from '../constants/styles';
const SearchRelatvie = styled.div`
  flex-flow: column||wrap;
  height: fit-content;
  width: 100%;
  max-width: 400px;
  padding: 0 5px 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.showTemp === true ? '0 6px 16px rgb(0 0 0 / 19%), 0 0 4px rgb(0 0 0 / 25%);' : 'none'};

  ${$media_small} {
    display: none;
  }

  ${$media_small} {
    display: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
`;
const SearchInput = styled.input`
  height: 36px;
  width: 100%;
  max-width: 355px;
  padding: 5px 30px 5px 10px;
  background-color: #e5e5e5;
  border: 2px #e5e5e5 solid;
  border-radius: 6px 0 0 6px;
  transition: background-color 0.1s ease;
  transition: border 0.2s ease;

  ${hover} {
    &:hover {
      transition: border 0.2s ease;
      border: 2px #ccc solid;
    }
  }

  &:focus {
    transition: background-color 0.2s ease;
    transition: border 0.1s ease;
    outline: none;
    border: 2px #9147ff solid;
    background-color: white;
  }
`;

const ClearInput = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 45px;
  cursor: pointer;
`;
const SearchButton = styled.button`
  background-color: #f9f9f9;
  border: none;
  margin-left: 1px;
  width: 36px;
  height: 36px;
  border-radius: 0 6px 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.value !== '' ? 'pointer' : 'not-allowed;')};
  & > img {
    width: 18px;
    opacity: ${(props) => (props.value !== '' ? '1' : '0.2')};
  }
  ${hover} {
    &:hover {
      background-color: ${(props) => (props.value !== '' ? '#e5e5e5' : '#f9f9f9')};
    }
  }
`;

const SearchList = styled.ul`
  margin: -2px 0 0 0;
`;

const SearchItem = styled.li`
  list-style: none;
  height: 40px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  ${hover} {
    &:hover {
      background-color: #e5e5e5;
    }
  }
  &:last-child {
    margin-bottom: 5px;
  }
`;
const SearchIcon = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 16px;
  }
`;
const SearchName = styled.p`
  white-space: nowrap;
  margin-right: 5px;
`;

export default function Search({ showTemp, setShowTemp }) {
  const [value, setValue] = useState('');

  const handleInputChange = (value) => {
    setValue(value);
    value === '' ? setShowTemp(false) : setShowTemp(true);
    // fetch(`https://api.twitch.tv/kraken/games/top?limit=30`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/vnd.twitchtv.v5+json',
    //     'Client-ID': 'hbycoguhoaxnspsvd4nxknw4mtpsfs',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    // .then((data) => {
    //   setIsLoadingPostMessage(false);
    //   if (data.ok === 0) {
    //     setPostMessageError(data.message);
    //     return;
    //   }
    // })
    // .catch((err) => {
    //   setIsLoadingPostMessage(false);
    //   setPostMessageError(err.message);
    // });
  };
  return (
    <SearchRelatvie showTemp={showTemp}>
      <InputWrapper>
        <SearchInput
          placeholder={'搜尋'}
          value={value}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
          onFocus={(e) => {
            e.target.value === '' ? setShowTemp(false) : setShowTemp(true);
          }}
          onBlur={() => {
            setShowTemp(false);
          }}
        />
        {value !== '' ? (
          <ClearInput
            onClick={() => {
              setValue('');
            }}
          >
            <img src={cross} alt=""></img>
          </ClearInput>
        ) : null}
        <SearchButton
          value={value}
          onClick={() => {
            if (value !== '') {
              setValue('');
              console.log('search');
            }
          }}
        >
          <img src={searchIcon} alt=""></img>
        </SearchButton>
      </InputWrapper>
      <SearchList>
        {showTemp === true ? (
          <SearchItem>
            <SearchIcon>
              <img src={searchIcon} alt=""></img>
            </SearchIcon>
            <SearchName>前往 {value}</SearchName>
          </SearchItem>
        ) : null}
      </SearchList>
    </SearchRelatvie>
  );
}

export { SearchInput };
