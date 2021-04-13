import styled from 'styled-components/macro';

const Info = styled.div`
  padding-top: calc(var(--gutter) / 2);
`;

const Description = styled.p`
  margin: 0;
`;

const Content = styled.div`
  padding: 0 var(--gutter);
  border-bottom: 1px solid var(--background-separator);
`;

const Footer = styled.div`
  padding: calc(var(--gutter) * 2) var(--gutter);
`;

export {
  Info,
  Description,
  Content,
  Footer,
};
