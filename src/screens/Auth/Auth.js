import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {TabView} from 'react-native-tab-view';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import CustomStatusBar from '../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import Font from '../../layout/Font';

function Auth() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'login', title: 'Sign In'},
    {key: 'register', title: 'Sign Up'},
  ]);

  const _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.title, {opacity}]}>
                {route.title}
              </Animated.Text>
              {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    );
  };
  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'login':
        return <Login jumpTo={jumpTo} />;
      case 'register':
        return <Register jumpTo={jumpTo} />;
    }
  };

  const _handleIndexChange = i => setIndex(i);

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={[styles.flex, commonStyle.wrapper]}>
        <View style={[styles.flex, commonStyle.content]}>
          <View style={styles.tabViewWrapper}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={_handleIndexChange}
              initialLayout={{width: layout.width}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  tabViewWrapper: {
    height: heightPercentageToDP('100%'),
  },
  tabBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  underline: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    marginTop: 10,
  },
  underlineTransparent: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
    marginTop: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 2,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
});

export default Auth;
