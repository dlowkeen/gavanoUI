import React from 'react';
import AppNavigation from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
