import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/layout/theme';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import Intro from './src/storage/intro';
import AppIntroNavigator from './src/navigation/AppIntroNavigator';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux/store';

export const persistor = persistStore(store);

function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await performAPICalls();
      setAppIsReady(true);
    })();
  }, [appIsReady]);

  async function performAPICalls() {
    const intro = await Intro.getIntroStatus();
    if (intro) {
      setIntroCompleted(true);
    }
  }

  if (!appIsReady) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer theme={theme}>
              {introCompleted ? <DrawerNavigator /> : <AppIntroNavigator />}
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
