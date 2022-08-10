import React, {useState} from 'react';
import {Modal} from 'react-native';
import WebView from 'react-native-webview';

interface WebViewType {}

const SignWebView = () => {
  const [code, setCode] = useState<string>('');
  const onSuccess = (e: any) => {
    const code = e.nativeEvent.url;
    const accessCode = code.substring(code.indexOf('code=') + 5);
    setCode(accessCode);
  };

  return (
    <Modal animationType="slide">
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://localhost:3000/auth/login/kakao/callback'}}
        onMessage={onSuccess}
        style={{marginTop: 80}}
      />
    </Modal>
  );
};

export default SignWebView;
