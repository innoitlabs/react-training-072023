import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Switch,
  ToastAndroid,
  Platform,
  Alert
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Button title="Add" />
  </View>
);

const Home = ({ navigation }) => {
  const studentData = [
    {
      id: 1,
      studentName: "Karthik",
      roleNumber: "ROLE1",
    },
    {
      id: 2,
      studentName: "Jay",
      roleNumber: "ROLE2",
    },
    {
      id: 3,
      studentName: "Jash",
      roleNumber: "ROLE3",
    },
    {
      id: 4,
      studentName: "Sandeep",
      roleNumber: "ROLE4",
    },
    {
      id: 5,
      studentName: "Someone",
      roleNumber: "ROLE5",
    },
    {
      id: 6,
      studentName: "Dhanush",
      roleNumber: "ROLE6",
    },
    {
      id: 7,
      studentName: "Sandeep",
      roleNumber: "ROLE4",
    },
    {
      id: 8,
      studentName: "Someone",
      roleNumber: "ROLE5",
    },
    {
      id: 9,
      studentName: "Dhanush",
      roleNumber: "ROLE6",
    },
  ];

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const showToast = () => {
    ToastAndroid.show("Hi, I am a Toast", ToastAndroid.LONG);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Hi, This is a Gravity Toast",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Hi, This is a toast with gravity and offset",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => { }
        },
        {
          text: 'Ok',
          onPress: () => { }
        }
      ]
    )
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>

      <Button title="Show Alert" onPress={() => showAlert()} />
      {Platform.OS === "android" && (
        <View>
          <Button title="Toggle Toast" onPress={() => showToast()} />
          <View style={{ height: 20 }}></View>
          <Button
            title="Toast with Gravity"
            onPress={() => showToastWithGravity()}
          />
          <View style={{ height: 20 }}></View>
          <Button
            title="Toast with Gravity and Offset"
            onPress={() => showToastWithGravityAndOffset()}
          />
        </View>
      )}

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5bb4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text> {isEnabled ? "Switch is Enabled" : "Switch is Disabled"} </Text>
      <Button
        title="Go to Section List"
        onPress={() =>
          navigation.navigate("Details", {
            itemID: 86,
            otherParam: "any thing some param",
          })
        }
      />
      <FlatList
        data={studentData}
        renderItem={({ item }) => <Item name={item.studentName} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    // <View>
    //   <Text>Home</Text>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
});

export default Home;
