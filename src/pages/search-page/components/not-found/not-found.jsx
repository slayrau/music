import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const Container = styled.div`
  padding: calc(var(--gutter) * 4) var(--gutter);
  width: 100%;
  word-wrap: break-word;
`;

const Text = styled.p`
  margin: 0;
  color: var(--label-color-secondary);
  text-align: center;
`;

const Query = styled(Text)`
  color: var(--label-color-primary);
`;

const QuotationMark = styled.span`
  color: var(--system-accent);
`;

const NotFound = ({ query }) => {
  return (
    <Container>
      <Text>No results found for:</Text>
      <Query>
        <QuotationMark>«</QuotationMark>
        {query}
        <QuotationMark>»</QuotationMark>
      </Query>
    </Container>
  );
};

NotFound.propTypes = {
  query: PropTypes.string.isRequired,
};

export default NotFound;
