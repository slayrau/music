import styled from 'styled-components/macro';
import { resetButton } from 'src/styled/helpers';

const SearchWrapper = styled.div`
  display: flex;
`;

const Label = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  margin: 0;
  padding: 0 var(--gutter);
  padding-right: 36px;
  
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

  &:focus {
    box-shadow: 0 0 0 4px var(--system-accent);
  }
`;

const ClearButton = styled.button`
  ${resetButton};
  
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: #555;
  border-radius: 50%;

  color: var(--system-accent);
`;

const CancelButton = styled.button`
  ${resetButton};

  color: var(--system-accent);
  margin-left: var(--gutter);
`;

export {
  SearchWrapper,
  Label,
  Input,
  ClearButton,
  CancelButton,
};
