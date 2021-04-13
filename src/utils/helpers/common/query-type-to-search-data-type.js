import { QueryType, SearchDataType } from 'src/utils/constants';

export default {
  [QueryType.artist]: SearchDataType.artists,
  [QueryType.album]: SearchDataType.albums,
  [QueryType.track]: SearchDataType.tracks,
  [QueryType.playlist]: SearchDataType.playlists,
};
