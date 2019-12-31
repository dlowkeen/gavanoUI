import React from 'react';
// import LaunchScreen from './src/components/launchscreen';
// import Home from './src/containers/home/Home.js';
import AppNavigation from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
      <AppNavigation />
      {/* <LaunchScreen />
      <Home /> */}
    </>
  );
};

export default App;
