import { QueryType } from 'src/utils/constants';

export default (album) => ({
  id: album.id,
  uri: album.uri,
  queryType: QueryType.album,
  name: album.name,
  artists: album.artists,
  images: album.images,
  releaseDate: album.release_date,
  totalTracks: album.total_tracks,
  spotifyUrl: album?.external_urls?.spotify,
  copyrights: album.copyrights,
});
