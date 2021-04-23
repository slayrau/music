import { memo } from 'react';
import PropTypes from 'prop-types';

import IconType from 'src/utils/constants/icon-type';
import Icons from 'src/assets/icons';

import { StyledIcon } from './style';

const Icon = ({ icon, className, ...props }) => {
  const IconComponent = Icons[icon];

  return (
    <StyledIcon
      as={IconComponent}
      className={`icon ${className}`}
      {...props}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(IconType)).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default memo(Icon);
