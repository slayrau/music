import styled, { css } from 'styled-components/macro';

const Header = styled.div`
  padding: var(--gutter);
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: calc(var(--gutter) / 2);
  font-size: var(--font-size-large-title);
  line-height: var(--line-height-large-title);
`;

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
  ${({ isLargeMedia }) => isLargeMedia && css`
    ${Header} {
      display: flex;
      align-items: center;
    }

    ${Info} {
      margin-left: var(--gutter);
    }

    ${PosterWrapper} {
      margin: 0;
    }
  `}
`;

export {
  Header,
  Title,
  PosterWrapper,
  Info,
  Description,
  Content,
  Footer,
  PageContent,
};
