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

// import { StackNavigator } from "react-navigation";
// import LaunchScreen from "../Containers/LaunchScreen";

// import styles from "./Styles/NavigationStyles";

// // Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   LaunchScreen: { screen: LaunchScreen },
// }, {
//   // Default config for all screens
//   headerMode: "none",
//   initialRouteName: "LaunchScreen",
//   navigationOptions: {
//     headerStyle: styles.header,
//   },
// });

// export default PrimaryNav;
