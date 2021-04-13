import { QueryType } from 'src/utils/constants';

export default (track) => ({
  id: track.id,
  uri: track.uri,
  queryType: QueryType.track,
  name: track.name,
  artists: track.artists,
  images: track?.album?.images,
  trackNumber: track.track_number,
  durationMs: track.duration_ms,
  previewUrl: track.preview_url,
  albumName: track?.album?.name,
  albumId: track?.album?.id,
});
