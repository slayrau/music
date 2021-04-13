import instance from './instance';

export default {
  getNewReleases: (credentials) => (
    instance.get('/browse/new-releases?country=US&limit=24', credentials)
  ),

  getFeaturedPlaylists: (credentials) => (
    instance.get('/browse/featured-playlists?country=US&limit=24', credentials)
  ),
};
