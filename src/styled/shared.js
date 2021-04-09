import styled from 'styled-components/macro';
import { textEllipsis } from 'src/styled/helpers';

const Page = styled.div`
  padding-bottom: var(--tab-bar-size);
`;

const Title = styled.h1`
  ${textEllipsis};
  
  margin: 0;
  font-size: var(--font-size-large-title);
  line-height: var(--line-height-large-title);
`;

const Header = styled.div`
  position: relative;
  padding: var(--gutter);

  &::after {
    content: '';
    position: absolute;
    left: var(--gutter);
    right: var(--gutter);
    bottom: 0;
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const Main = styled.main``;

export {
  Page,
  Header,
  Title,
  Main,
};
