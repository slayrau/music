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

const lineClamp = (count) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${count};
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export {
  resetList,
  textEllipsis,
  lineClamp,
};
