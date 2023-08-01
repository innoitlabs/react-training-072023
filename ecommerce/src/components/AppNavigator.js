import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cart from '../screens/Cart'
import Products from '../screens/Products'
import MultipleReducers from '../screens/MultipleReducers'
import WebVw from "../screens/WebView";
import Map from '../screens/Map';
import Videos from '../screens/Videos';
import FontAwesome from "@expo/vector-icons/FontAwesome";

//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              <FontAwesome name="list" size={50} color="green" />;
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: { backgroundColor: "#28282B" },
            headerTintColor: "white",
            tabBarIcon: () => {
              <FontAwesome name="list" size="30" />;
            },
          }}
        />
        <Tab.Screen
          name="WebView"
          component={WebVw}
          options={{
            tabBarIcon: () => {
              <FontAwesome name="list" size="30" />;
            },
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: () => {
              <FontAwesome name="list" size="30" />;
            },
          }}
        />
        <Tab.Screen
          name="Video"
          component={Videos}
          options={{
            tabBarIcon: () => {
             <FontAwesome name="list" size="30" />;
            },
          }}
        />
      </Tab.Navigator>
      {/* <Drawer.Navigator initialRouteName="Products">
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
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Video" component={Videos} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({})