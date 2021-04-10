export default (time) => {
  const hours = time.hours > 0 ? `${String(time.hours).padStart(2, 0)}:` : '';
  const minutes = time.minutes > 0 ? `${String(time.minutes).padStart(2, 0)}:` : '';
  const seconds = time.seconds > 0 ? `${String(time.seconds).padStart(2, 0)}` : '';

  return `${hours}${minutes}${seconds}`;
};
