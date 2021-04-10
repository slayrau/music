import instance, { getCredentials } from './instance';

export default {
  getAlbum: ({ albumId, tokenType, accessToken }) => (
    instance.get(`/albums/${albumId}`, getCredentials({ tokenType, accessToken }))
  ),
};
