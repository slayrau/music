import instance from './instance';

export default {
  getPlaylist: (playlistId, credentials) => (
    instance.get(`/playlists/${playlistId}`, credentials)
  ),
};
