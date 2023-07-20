import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Linking,
} from "react-native";

export default function App() {
  const [name, setName] = useState('ReactJS');
  const onClickHandler = () => { 
    setName('React Native');
  }
  const onTextChange = (text) => { 
    setName(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Current Training is on {name}</Text>
      <Button title="Update State" onPress={onClickHandler} />
      {/* <Button
        title="Open Google"
        onPress={() => {
          Linking.openURL("https://google.com");
        }}
      /> */}
      <TextInput
        style={{
          marginTop: 10,
          height: 25,
          width: 150,
          borderColor: "blue",
          borderWidth: 2,
          paddingHorizontal: 5,
          marginBottom: 10,
          borderRadius: 7,
        }}
        keyboardType="default"
        placeholder="enter your text"
        onChangeText={onTextChange}
      />
      <TouchableOpacity>
        <Text style={styles.textStyle}>
          Open up App.js to start working on your app!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{
            width: 100,
            height: 150,
            borderWidth: 2,
            borderColor: "black",
            opacity: 0.7,
            borderRadius: 4,
            marginTop: 5,
          }}
          source={require("./assets/test-image.jpeg")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'green',
    backgroundColor: 'yellow',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    fontWeight: '300',
    // textAlign:'center'
  }
});
