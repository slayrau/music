import { QueryType } from 'src/utils/constants';

export default (artist) => ({
  id: artist.id,
  uri: artist.uri,
  queryType: QueryType.artist,
  spotifyUrl: artist?.external_urls?.spotify,
  name: artist.name,
  images: artist.images,
  genres: artist.genres,
  followers: artist.followers,
});
