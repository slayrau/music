import styled, { css } from 'styled-components/macro';

const PosterWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

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

const PageContent = styled.div`
`;

export {
  PosterWrapper,
  Info,
  Description,
  Content,
  Footer,
  PageContent,
};
