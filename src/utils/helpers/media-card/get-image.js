import { QueryType } from 'src/utils/constants';
import { getLowResImage, getMediumResImage } from 'src/utils/helpers/common';

export default (card) => {
  const { queryType } = card;

  if (queryType === QueryType.artist) {
    return getLowResImage(card);
  }

  if (queryType === QueryType.album) {
    return getMediumResImage(card);
  }

  if (queryType === QueryType.track) {
    return getLowResImage(card);
  }

  if (queryType === QueryType.playlist) {
    return getMediumResImage(card);
  }
};
