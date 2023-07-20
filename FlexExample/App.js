import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.container}>
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
      <View style={styles.container2}>
        <View style={styles.innerContainer1}>
          <Text> Container 1 </Text>
        </View>
        <View style={styles.innerContainer2}>
          <Text> Container 2 </Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //6
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 5,
    borderColor: "green",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 5,
    borderColor: "green",
  },
  innerContainer1: {
    flex: 4,
    backgroundColor: "red",
  },
  innerContainer2: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer3: {
    flex: 2,
    backgroundColor: "blue",
  },
  // content: {
  //   padding: 20,
  //   margin: 0,
  //   backgroundColor: "#ef4c",
  //   width: 125,
  //   height: 125,
  //   borderWidth: 1,
  //   borderColor: "red",
  //   textAlign: "center",
  // },
});
