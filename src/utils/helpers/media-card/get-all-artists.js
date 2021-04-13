export default (artists = []) => (
  artists.map((artist) => artist.name).join(', ')
);
