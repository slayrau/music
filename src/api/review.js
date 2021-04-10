import instance, { getCredentials } from './instance';

export default {
  getNewReleases: ({ tokenType, accessToken }) => (
    instance.get('/browse/new-releases?country=US&limit=24', getCredentials({ tokenType, accessToken }))
  ),

  getFeaturedPlaylists: ({ tokenType, accessToken }) => (
    instance.get('/browse/featured-playlists?country=US&limit=24', getCredentials({ tokenType, accessToken }))
  ),
};
