import styled from 'styled-components/macro';
import { resetButton } from 'src/styled/helpers';

const SearchWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  .icon {
    width: 18px;
    height: 18px;
  }
`;

const Label = styled.label`
  position: relative;
  flex: 1;

  ${IconWrapper} {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  margin: 0;
  padding: 0 var(--gutter);
  padding-right: 36px;
  padding-left: 36px;
  padding-bottom: 2px;
  
  color: var(--label-color-primary);
  font-size: 17px;
  line-height: 1.25;
  background-color: var(--background-secondary);
  border: none;
  border-radius: calc(var(--gutter) / 2);
  outline: none;
  appearance: none;

  &::placeholder {
    color: var(--label-color-secondary);
    font-size: 17px;
    line-height: normal;
  }

  &::selection {
    color: var(--background-primary);
    background-color: var(--system-accent);
  }

  &:focus {
    box-shadow: 0 0 0 4px var(--system-accent);
  }

  &[value=""] + ${IconWrapper} .icon {
    color: var(--label-color-secondary);
  }
`;

const ClearButton = styled.button`
  ${resetButton};
  
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  color: var(--label-color-primary);
`;

const CancelButton = styled.button`
  ${resetButton};

  color: var(--system-accent);
  margin-left: var(--gutter);
`;

export {
  SearchWrapper,
  Label,
  IconWrapper,
  Input,
  ClearButton,
  CancelButton,
};
