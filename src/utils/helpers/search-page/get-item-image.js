export default (item) => {
  const images = item.images || item.album.images;
  const lastImageIndex = images.length - 1;
  const lastImageUrl = images[lastImageIndex]?.url || '';
  return lastImageUrl;
};
