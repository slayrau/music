import styled from 'styled-components/macro';

const Screen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  box-shadow: 0 0 160px var(--system-accent);
`;

export {
  Screen,
  Logo,
};
