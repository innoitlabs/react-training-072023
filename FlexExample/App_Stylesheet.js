import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.content, { alignSelf: "flex-start" }]}>
        Column 1
      </Text>
      <Text style={[styles.content, { alignSelf: "center" }]}>Column 2</Text>
      <Text style={[styles.content, { alignSelf: "flex-end" }]}>Column 3</Text> */}

      <View style={styles.innerContainer1}>
        <Text> Container 1 </Text>
      </View>
      <View style={styles.innerContainer2}>
        <Text> Container 2 </Text>
      </View>
      <View style={styles.innerContainer3}>
        <Text> Container 3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //6
  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    margin: 40,
  },
  innerContainer1: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  innerContainer2: {
    flex: 1,
    
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    margin: 40,
  },
  innerContainer3: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    margin: 40,
  },
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: "#ef4c",
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
  },
});
