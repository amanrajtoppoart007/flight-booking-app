import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

const CustomStatusBar = ({backgroundColor = null}) => {
  useEffect(() => {
    setStatusBarColor(backgroundColor);
  }, [backgroundColor]);

  const [statusBarColor, setStatusBarColor] = useState(
    backgroundColor ?? '#1C8CCC',
  );
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={
          backgroundColor
            ? backgroundColor === 'white'
              ? 'dark-content'
              : 'light-content'
            : 'light-content'
        }
        hidden={false}
      />
    </>
  );
};

export default CustomStatusBar;
