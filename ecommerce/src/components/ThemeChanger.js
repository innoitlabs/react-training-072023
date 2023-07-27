import { Dimensions, StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { changeTheme } from "../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const screenDimensions = Dimensions.get("screen");
const ThemeChanger = () => {
  const dispatch = useDispatch();
    const theme = useSelector(({ ThemeReducer }) => ThemeReducer);
    const toggleSwitch = () => dispatch(changeTheme(!theme));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme ? "#FFF" : "#e4e7ed",
        padding: 0,
      }}
    >
      <AppNavigator />
      <View
        style={{
          height: 20,
          width: 35,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "grey",
          position: "relative",
          bottom: 70,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          left: screenDimensions.width - 60,
        }}
      >
        <Switch
          trackColor={{ false: "e4e7ed", true: "#000" }}
          thumbColor={theme ? "rgb(6, 6, 194)" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={theme}
        />
      </View>
    </View>
  );
};

export default ThemeChanger;

const styles = StyleSheet.create({});
