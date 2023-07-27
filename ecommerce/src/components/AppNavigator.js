import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Cart from '../screens/Cart'
import Products from '../screens/Products'
import MultipleReducers from '../screens/MultipleReducers'

const Stack = createStackNavigator();

const AppNavigator = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MultipleReducers"
          component={MultipleReducers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: { backgroundColor: "#28282B" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({})