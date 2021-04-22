import styled, { css } from 'styled-components/macro';

const AppContainer = styled.div`
  ${({ isLargeMedia }) => isLargeMedia && css`
    padding-left: 180px;
  `}
`;

export {
  AppContainer,
};
