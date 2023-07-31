import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";
import Cart from '../screens/Cart'
import Products from '../screens/Products'
import MultipleReducers from '../screens/MultipleReducers'
import WebVw from "../screens/WebView";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Products">
        <Drawer.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="MultipleReducers"
          component={MultipleReducers}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: { backgroundColor: "#28282B" },
            headerTintColor: "white",
          }}
        />
        <Drawer.Screen name="WebView" component={WebVw} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({})