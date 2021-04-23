import { useMediaContext } from 'src/contexts/media';
import PulseSpinner from 'src/components/pulse-spinner';

import { Screen, SpinnerWrapper, Text } from './style';

const ScreenSpinner = () => {
  const isLargeScreen = useMediaContext();

  return (
    <Screen isLargeScreen={isLargeScreen}>
      <SpinnerWrapper>
        <PulseSpinner size="large" />
        <Text>Loading</Text>
      </SpinnerWrapper>
    </Screen>
  );
};

export default ScreenSpinner;
