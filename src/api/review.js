import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export default {
  getNewReleases: ({ tokenType, accessToken }) => (
    instance.get('/browse/new-releases?country=US&limit=24', {
      headers: {
        Accept: 'application/json',
        Authorization: `${tokenType} ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
  ),

  getFeaturedPlaylists: ({ tokenType, accessToken }) => (
    instance.get('/browse/featured-playlists?country=US&limit=24', {
      headers: {
        Accept: 'application/json',
        Authorization: `${tokenType} ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
  ),
};
