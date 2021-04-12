import logo from 'src/assets/images/logo.svg';
import { Screen, Logo } from './style';

const LaunchScreen = () => {
  return (
    <Screen>
      <Logo src={logo} />
    </Screen>
  );
};

export default LaunchScreen;
