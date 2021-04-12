import PulseSpinner from 'src/components/pulse-spinner';

import { Screen, SpinnerWrapper, Text } from './style';

const ScreenSpinner = () => {
  return (
    <Screen>
      <SpinnerWrapper>
        <PulseSpinner size="large" />
        <Text>Loading</Text>
      </SpinnerWrapper>
    </Screen>
  );
};

export default ScreenSpinner;
