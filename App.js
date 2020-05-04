import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Icon from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import CameraComponent from './components/CameraComponent';
import Reducer from './reducers/Reducer';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

/* const store = createStore(); */
const rocketIcon = <Icon name="rocket" size={30} color="#900" />;
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
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

          <Stack.Screen name="Camera" component={CameraComponent} />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        <Footer />
      </View>
    </>
  );
}
