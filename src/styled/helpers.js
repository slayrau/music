import { css } from 'styled-components';

const resetList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  resetList,
  textEllipsis,
};
