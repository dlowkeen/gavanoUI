import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../containers/home/HomeScreen';
import Other from '../containers/other/Other';
import SignIn from '../containers/authentication/SignIn';
import AuthLoading from '../containers/authentication/AuthLoading';
import SettingsScreen from '../containers/settings/SettingsScreen';
import {ROUTES} from '../utilities/constants';

const AppStack = createStackNavigator({
  [ROUTES.HOME]: HomeScreen,
  [ROUTES.OTHER]: Other,
  [ROUTES.SETTINGS]: SettingsScreen,
});
const AuthStack = createStackNavigator({SignIn: SignIn});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
