import { View, Text, Button } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { WebView} from 'react-native-webview'

const WebVw = () => {

    const openBrowser = async () => { 
        let result = await WebBrowser.openBrowserAsync(
          "https://reactnative.dev/"
        );
        console.log(result);
    }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>WebView</Text>
      <Button title="Open Browser" onPress={openBrowser} />
      <WebView style={{
        width: '100',
        height:'auto'
      }} source={{ uri: "https://reactnative.dev/" }}/>
     
    </View>
  );
}

export default WebVw;