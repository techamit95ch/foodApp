import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Appbar } from "react-native-paper";

import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

export default function App () {
  const Tab = createMaterialBottomTabNavigator();
  const HomeStack = createStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Search">
      <HomeStack.Screen name="Search" title="Business Search App" component={SearchScreen} />
      <HomeStack.Screen name="ResultShow" title="Result Show" component={ResultShowScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
    
  );
};



