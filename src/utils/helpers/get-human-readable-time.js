export default (time) => {
  const hours = time.hours > 0 ? `${time.hours} Hours ` : '';
  const minutes = time.minutes > 0 ? `${time.minutes} Minutes` : '';

  return `${hours}${minutes}`;
};
