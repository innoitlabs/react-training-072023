import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        Open up App.js to start working on your app!
      </Text>
      <TouchableHighlight style={[styles.core, styles.spacer]}>
        <Text> Default Normal</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.core, styles.hairlineBorder, styles.spacer]}
      >
        <Text> Default Hairline</Text>
      </TouchableHighlight>

      <TouchableHighlight style={[styles.core, styles.primary, styles.spacer]}>
        <Text> Primary Normal</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.core, styles.primary, styles.hairlineBorder]}>
        <Text> Primary Hairline</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

// const viewStyle = {
//   backgroundColor: "blue",
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
// };

// const textStyle = {
//   color: "#fff",
//   fontSize: 22,
// };

const styles = StyleSheet.create({
  viewStyle : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle : {
    fontSize: 22,
  },
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 0.5,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight:5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27',
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom:10
  }
});
