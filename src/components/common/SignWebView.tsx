import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Modal} from 'react-native';
import WebView from 'react-native-webview';

interface WebViewType {
  onLoginSuccess: () => void;
}

const INJECTED_JAVASCRIPT =
  '(function() {window.document.getElementsByTagName("pre")[0].style.color="white"; if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

const SignWebView = ({onLoginSuccess}: WebViewType) => {
  const onSuccess = async (e: any) => {
    let token = JSON.parse(e.nativeEvent.data);
    await AsyncStorage.setItem('access_token', token.accessToken);
    await AsyncStorage.setItem('refresh_token', token.refreshToken);
    onLoginSuccess();
  };
  return (
    <Modal animationType="slide">
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://localhost:3000/auth/login/kakao/'}}
        onMessage={onSuccess}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        style={{marginTop: 80}}
      />
    </Modal>
  );
};

export default SignWebView;
