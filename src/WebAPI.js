const BASE_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'hbycoguhoaxnspsvd4nxknw4mtpsfs';

const getTopGames = () => {
  return fetch(`${BASE_URL}/games/top?limit=6`, {
    method: 'GET',
    headers: { Accept: 'application/vnd.twitchtv.v5+json', 'Client-ID': CLIENT_ID },
  }).then((res) => res.json());
};

const getStreamsByGame = (query) => {
  return fetch(`${BASE_URL}/search/streams?query=${query}&limit=10`, {
    method: 'GET',
    headers: { Accept: 'application/vnd.twitchtv.v5+json', 'Client-ID': CLIENT_ID },
  }).then((res) => res.json());
};
export { getTopGames, getStreamsByGame };
