import axios from 'axios';

export const getCredentials = ({ tokenType, accessToken }) => ({
  headers: {
    Accept: 'application/json',
    Authorization: `${tokenType} ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

export default axios.create({
  baseURL: 'https://api.spotify.com/v1',
});
