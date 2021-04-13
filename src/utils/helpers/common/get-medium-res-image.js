export default (imagesArray) => {
  const imagesCount = imagesArray.length;

  if (!imagesCount) {
    return '';
  }

  if (imagesCount === 1) {
    return imagesArray[0].url;
  }

  if (imagesCount > 1) {
    return imagesArray[1].url;
  }
};
