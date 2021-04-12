import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1px;
  padding-top: calc(100% - 2px);
  background-color: var(--background-secondary);
  border: 1px solid var(--background-separator);
  border-radius: ${(props) => (props.circle ? '50%' : 'calc(var(--gutter) / 2)')};
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export {
  Wrapper,
};
