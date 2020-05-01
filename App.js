import React, { Component } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Icon from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';


const rocketIcon = <Icon name="rocket" size={30} color="#900" />;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          options={{ title: "Home" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}