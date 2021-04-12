import styled, { keyframes, css } from 'styled-components/macro';

const fade = keyframes`
  0%, 1%, 100% {
    opacity: 0.65;
  }

  95% {
    opacity: 0.1;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 0;
  left: 50%;
  top: 50%;
  z-index: 1;
`;

const Spinner = styled.div`
  position: relative;
  width: var(--gutter);
  height: var(--gutter);

  ${({ size }) => {
    if (size === 'small') {
      return css`
        width: var(--gutter);
        height: var(--gutter);

        ${Container} {
          transform: scale(0.075);
        }
      `;
    }

    if (size === 'medium') {
      return css`
        width: calc(var(--gutter) * 1.5);
        height: calc(var(--gutter) * 1.5);

        ${Container} {
          transform: scale(0.1125);
        }
      `;
    }

    if (size === 'large') {
      return css`
        width: calc(var(--gutter) * 2);
        height: calc(var(--gutter) * 2);

        ${Container} {
          transform: scale(0.15);
        }
      `;
    }
  }}
`;

const Nib = styled.div`
  position: absolute;
  top: -12.5px;
  width: 66px;
  height: 28px;
  background: 0 0;
  border-radius: 25% / 50%;
  transform-origin: left center;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 25% / 50%;

    animation-duration: 0.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${fade};
  }

  &:nth-child(1) {
    transform: rotate(0) translateX(40px);

    &::before {
      animation-delay: -0.8s;
    }
  }
  
  &:nth-child(2) {
    transform: rotate(45deg) translateX(40px);
    
    &::before {
      animation-delay: -0.7s;
    }
  }
  
  &:nth-child(3) {
    transform: rotate(90deg) translateX(40px);

    &::before {
      animation-delay: -0.6s;
    }
  }
  
  &:nth-child(4) {
    transform: rotate(135deg) translateX(40px);

    &::before {
      animation-delay: -0.5s;
    }
  }
  
  &:nth-child(5) {    
    transform: rotate(180deg) translateX(40px);

    &::before {
      animation-delay: -0.4s;
    }
  }
  
  &:nth-child(6) {
    transform: rotate(225deg) translateX(40px);

    &::before {
      animation-delay: -0.3s;
    }
  }
  
  &:nth-child(7) {
    transform: rotate(270deg) translateX(40px);

    &::before {
      animation-delay: -0.2s;
    }
  }
  
  &:nth-child(8) {
    transform: rotate(315deg) translateX(40px);

    &::before {
      animation-delay: -0.1s;
    }
  }
`;

export {
  Spinner,
  Container,
  Nib,
};
