import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: calc(var(--gutter) / 2);
  background-color: var(--background-secondary);
  border: 1px solid var(--background-separator);
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export {
  Wrapper,
};
