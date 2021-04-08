import styled from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';

const Section = styled.section`
  padding: var(--gutter);
`;

const Header = styled.div`
  padding-bottom: var(--gutter);
`;

const Title = styled.h2`
  margin: 0;
`;

const Body = styled.div``;

const List = styled.ul`
  ${resetList};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Item = styled.li``;

export {
  Section,
  Header,
  Title,
  Body,
  List,
  Item,
};
