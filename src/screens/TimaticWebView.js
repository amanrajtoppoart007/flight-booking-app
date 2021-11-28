import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import commonStyle from '../layout/Style';
import WebView from 'react-native-webview';
import CustomStatusBar from '../components/CustomStatusBar';
import FullScreenActivityIndicator from '../components/FullScreenActivityIndicator';

function TimaticWebView() {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar />
      <FullScreenActivityIndicator loading={loading} />
      <View style={[styles.container, commonStyle.wrapper]}>
        <View style={[styles.container, commonStyle.content]}>
          <WebView
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            style={styles.container}
            source={{uri: 'https://www.iata.org/en/publications/timatic/'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TimaticWebView;
