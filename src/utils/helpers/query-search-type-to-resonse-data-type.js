import { QuerySearchType, ResponseDataType } from 'src/utils/constants';

export default {
  [QuerySearchType.artist]: ResponseDataType.artists,
  [QuerySearchType.album]: ResponseDataType.albums,
  [QuerySearchType.track]: ResponseDataType.tracks,
  [QuerySearchType.playlist]: ResponseDataType.playlists,
};
