import instance from './instance';

export default {
  getArtist: (artistId, credentials) => (
    instance.get(`/artists/${artistId}`, credentials)
  ),
  getArtistAlbums: (artistId, credentials) => (
    instance.get(`/artists/${artistId}/albums?include_groups=album,single`, credentials)
  ),
  getTopTracks: (artistId, credentials) => (
    instance.get(`/artists/${artistId}/top-tracks?market=US`, credentials)
  ),
  getRelatedArtists: (artistId, credentials) => (
    instance.get(`artists/${artistId}/related-artists`, credentials)
  ),
};
