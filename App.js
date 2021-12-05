import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/layout/theme';
import DrawerNavigator from './src/navigation/DrawerNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
