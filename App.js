import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/layout/theme';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {RTLProvider} from 'react-native-easy-localization-and-rtl';

function App() {
  return (
    <RTLProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </RTLProvider>
  );
}

export default App;
