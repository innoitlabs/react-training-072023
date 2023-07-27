import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import {myStore} from '../redux/store/store'
import ThemeChanger from './ThemeChanger'
import { StatusBar } from "expo-status-bar";

const Main = () => {
  return (
    <>
      <Provider store={myStore}>
        <ThemeChanger />
      </Provider>

      <StatusBar style="auto" />
    </>
  );
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});