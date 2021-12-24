import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import AppIntroNavigator from './navigation/AppIntroNavigator';
import {useSelector} from 'react-redux';

function Main() {
  const {appIntro} = useSelector(state => state?.intro);
  return <>{appIntro ? <DrawerNavigator /> : <AppIntroNavigator />}</>;
}

export default Main;
