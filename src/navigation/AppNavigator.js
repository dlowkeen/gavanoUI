import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../containers/home/Home';
import Other from '../containers/other/Other';
import SignIn from '../containers/authentication/SignIn';
import AuthLoading from '../containers/authentication/AuthLoading';

const AppStack = createStackNavigator({Home: Home, Other: Other});
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
