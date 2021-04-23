import styled, { css } from 'styled-components/macro';

const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isLargeScreen }) => isLargeScreen && css`
    left: 180px;
  `}
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  margin-top: var(--gutter);
  text-transform: uppercase;
  color: var(--label-color-secondary);
`;

export {
  Screen,
  SpinnerWrapper,
  Text,
};
