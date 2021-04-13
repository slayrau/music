import instance from './instance';

export default {
  getAlbum: (albumId, credentials) => (
    instance.get(`/albums/${albumId}`, credentials)
  ),
  getAlbumTracks: (albumId, credentials) => (
    instance.get(`/albums/${albumId}/tracks?limit=50`, credentials)
  ),
};
