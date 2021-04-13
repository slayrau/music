import { QueryType } from 'src/utils/constants';

export default (playlist) => ({
  id: playlist.id,
  uri: playlist.uri,
  queryType: QueryType.playlist,
  name: playlist.name,
  description: playlist.description,
  spotifyUrl: playlist?.external_urls?.spotify,
  images: playlist.images,
});
