import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Modal} from 'react-native';
import WebView from 'react-native-webview';
import Config from 'react-native-config';

interface WebViewType {
  onLoginSuccess: () => void;
}

const INJECTED_JAVASCRIPT =
  '(function() {window.document.getElementsByTagName("pre")[0].style.color="white"; if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

const SignWebView = ({onLoginSuccess}: WebViewType) => {
  const onSuccess = async (e: any) => {
    let token = JSON.parse(e.nativeEvent.data);
    await AsyncStorage.setItem('access_token', token.data.accessToken);
    await AsyncStorage.setItem('refresh_token', token.data.refreshToken);
    onLoginSuccess();
  };
  return (
    <Modal animationType="slide">
      <WebView
        originWhitelist={['*']}
        source={{uri: `${Config.SERVER_HOST}/auth/login/kakao/`}}
        onMessage={onSuccess}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        style={{marginTop: 80}}
      />
    </Modal>
  );
};

export default SignWebView;
