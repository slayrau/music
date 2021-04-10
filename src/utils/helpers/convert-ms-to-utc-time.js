export default (ms) => {
  const date = new Date(0);
  date.setUTCMilliseconds(ms);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  return { hours, minutes, seconds };
};
