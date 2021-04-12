import { QuerySearchType } from 'src/utils/constants';

export default (item) => {
  if (item.type === QuerySearchType.album) {
    return item.artists.map((artist) => artist.name).join(', ');
  }

  if (item.type === QuerySearchType.playlist) {
    return item.description;
  }
};
