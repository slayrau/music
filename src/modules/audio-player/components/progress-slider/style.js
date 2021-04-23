import styled from 'styled-components/macro';
import 'rc-slider/assets/index.css';

const ProgressContainer = styled.div`
  position: relative;
`;

const SliderWrapper = styled.div`
  .rc-slider-rail {
    background-color: var(--label-color-tertiary);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: ${({ buffered }) => buffered}%;
      height: 100%;
      background-color: var(--label-color-secondary);
      border-radius: inherit;
    }
  }

  .rc-slider-track {
    background-color: var(--label-color-primary);
  }

  .rc-slider-handle {
    margin-top: -6px;
    width: var(--gutter);
    height: var(--gutter);
    border: none;
    box-shadow: 0 0 0 #fff;

    &[data-focus-visible-added] {
      box-shadow: 0 0 0 4px var(--system-accent);
      background-color: var(--system-accent);
    }
  }
`;

const Info = styled.div`
  position: absolute;

  display: flex;
  justify-content: space-between;
  width: 100%;

  color: var(--label-color-secondary);
`;

const Duration = styled.span``;

export {
  ProgressContainer,
  SliderWrapper,
  Info,
  Duration,
};
