import { QueryType } from 'src/utils/constants';

export default (card) => {
  const { queryType, id, albumId } = card;

  if (queryType === QueryType.artist) {
    return `/artist/${id}`;
  }

  if (queryType === QueryType.album) {
    return `/album/${id}`;
  }

  if (queryType === QueryType.track) {
    return `/album/${albumId}/${id}`;
  }

  if (queryType === QueryType.playlist) {
    return '#';
  }
};
