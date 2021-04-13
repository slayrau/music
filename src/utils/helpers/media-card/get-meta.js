import { QueryType } from 'src/utils/constants';

export default (card) => {
  const { queryType } = card;

  if (queryType === QueryType.artist) {
    return '';
  }

  if (queryType === QueryType.album) {
    return '';
  }

  if (queryType === QueryType.track) {
    return card.artists.map((artist) => artist.name).join(', ');
  }

  if (queryType === QueryType.playlist) {
    return '';
  }
};
