const BASE_URL = "https://api.github.com";

const getGistURL = (gistId) => {
  return `${BASE_URL}/gists${gistId}`;
};

const getAllGistsURL = (username) => {
  return `${BASE_URL}/users/${username}/gists`;
};

export {getAllGistsURL, getGistURL};