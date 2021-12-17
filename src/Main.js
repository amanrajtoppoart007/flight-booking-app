import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import AppIntroNavigator from './navigation/AppIntroNavigator';

import AuthNavigator from './navigation/AuthNavigator';
import {useSelector} from 'react-redux';

function MainNavigator({token}) {
  console.log(token);
  return token ? <DrawerNavigator /> : <AuthNavigator />;
}

function Main() {
  const {appIntro} = useSelector(state => state?.intro);
  const {token} = useSelector(state => state?.auth);
  return (
    <>{appIntro ? <MainNavigator token={token} /> : <AppIntroNavigator />}</>
  );
}

export default Main;
