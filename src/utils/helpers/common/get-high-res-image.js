export default (imagesArray) => {
  const imagesCount = imagesArray.length;

  if (!imagesCount) {
    return '';
  }

  return imagesArray[0].url;
};
