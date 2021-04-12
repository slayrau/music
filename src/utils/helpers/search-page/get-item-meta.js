import { QuerySearchType } from 'src/utils/constants';

export default (item) => {
  if (item.type === QuerySearchType.album) {
    return `${item.album_type} - ${new Date(item.release_date).getFullYear()}`;
  }

  if (item.type === QuerySearchType.track) {
    return item.artists.map((artist) => artist.name).join(', ');
  }
};
