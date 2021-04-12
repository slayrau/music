import PropTypes from 'prop-types';
import { Spinner, Container, Nib } from './style';

const PulseSpinner = ({ size, ...props }) => (
  <Spinner size={size} {...props}>
    <Container>
      <Nib />
      <Nib />
      <Nib />
      <Nib />
      <Nib />
      <Nib />
      <Nib />
      <Nib />
    </Container>
  </Spinner>
);

PulseSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

PulseSpinner.defaultProps = {
  size: 'medium',
};

export default PulseSpinner;
